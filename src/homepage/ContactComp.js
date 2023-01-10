import { useNavigate } from "react-router-dom"

const ContactComp = () => {
    const navigate = useNavigate()

    return (
        <div className="contact-comp-wrapper">
            <div onClick={() => navigate('/clients')} className="contact-comp-text">
                связаться
            </div>
        </div>
    )
}

export default ContactComp