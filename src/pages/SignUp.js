import { useState } from "react"

import instance from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setUser } from "../redux/slices/userSlice"

const SignUp = () => {
    const [name, setUserName] = useState('')
    const [password, setUserPassword] = useState('')
    const [email, setUserEmail] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const addUser = () => {

        const userObj = {
            id: Math.round(Math.random() * 100000000000),
            name,
            password,
            email,
            cart: []
        }

        instance.post('users', userObj)
        .then(() => {
            dispatch(setUser(userObj))
            navigate('/home-page')
        })
        .catch(err => console.log(err))
        
    }

    return (
        <div className="auth-container">
            <div style={{paddingBottom: '20px'}} className="auth-title">
                Sign up
            </div>
            <div className="auth-form">
                <input 
                    type='text' 
                    placeholder='name'
                    className="auth-input"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                    type='text' 
                    placeholder='email'
                    className="auth-input"
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <div className="password">
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        className="auth-input"
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <div onClick={() => setShowPassword(!showPassword)} className="show-password">
                        {
                            showPassword ? <BsEyeSlashFill /> : <BsEyeFill />
                        }
                    </div>
                </div>
                <button className="submit" onClick={addUser}>Log in</button>
                <p className="auth-navigate">
                    Don't have an account?<span onClick={() => navigate('/signup')}>Sign Up</span>
                </p>
            </div>
        </div>
    )
}

export default SignUp