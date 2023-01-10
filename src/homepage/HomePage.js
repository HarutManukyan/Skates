import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { userSelector } from "../redux/slices/userSlice"
import ContactComp from "./ContactComp"
import HistoryComp from "./HistoryComp"
import NewThings from "./NewThings"

const HomePage = () => {
    const navigate = useNavigate()
    const user = useSelector(userSelector)

    return (
        <>
            <div className="homepage-wrapper">
                <div className="homepage">
                    <div className="homepage-title">
                        КОРОЛИ <br />
                    </div>
                    <div className="homepage-title-white">
                        ВСЕХ<br />
                        ДОРОГ
                    </div>
                    <div className="homepage-btn-div">
                        <button onClick={() => navigate('/store')} className="homepage-btn">
                            КУПИТЬ
                        </button>
                    </div>
                </div>
            </div>
            <NewThings />    
            <HistoryComp />
            <ContactComp />
        </>
    )
}

export default HomePage