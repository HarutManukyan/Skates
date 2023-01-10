import { useEffect, useState } from "react"

import instance from '../api/axios'
import { useNavigate } from 'react-router-dom'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { setUser } from "../redux/slices/userSlice"
import { setCart } from "../redux/slices/productSlice"

const Auth = () => {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [users, setUsers] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [empty, setEmpty] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        instance.get('users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    const logIn = () => {
        users.map(({id, name, password, email, cart, money, ordered}) => {
            if(name.toLowerCase() == userName.toLowerCase() && password == userPassword){
                navigate('/home-page')
                const userInfo = {
                    id, name, password, email, cart, money, ordered
                }
                dispatch(setUser(userInfo))
            } 
            if(userName == '' || userPassword == ''){
                setEmpty(true)
                console.log(empty)
            }
        })
        dispatch(setCart(false))
    }

    return (
        <div className="auth-container">
            <div className="auth-title">
                Sign in
            </div>
            <div className="auth-form">
                <input 
                    type='text' 
                    placeholder='name'
                    className="auth-input"
                    style={empty && userName == false ? {border: '1.5px red solid'}:null}
                    onChange={(e) => setUserName(e.target.value)}
                />
               {empty && userName == false && <div style={{fontSize: '13px', color:'red'}}>Error</div>}
                <div className="password">
                    <input 
                        type={showPassword ? 'text' : 'password'}
                        placeholder='password'
                        className="auth-input"
                        style={empty && userPassword == false ? {border: '1.5px red solid'}:null}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <div onClick={() => setShowPassword(!showPassword)} className="show-password">
                        {
                            showPassword ? <BsEyeSlashFill /> : <BsEyeFill />
                        }
                    </div>
                </div>
                {empty && userPassword == false &&<div style={{fontSize: '13px', color:'red'}}>Error</div>}
                <button className="submit" onClick={logIn}>Log in</button>
                <p className="auth-navigate">
                    Don't have an account?<span onClick={() => navigate('/signup')}>Sign Up</span>
                </p>
            </div>
        </div>
    )
}

export default Auth