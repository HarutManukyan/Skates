import { useNavigate } from 'react-router-dom'

const HistoryComp = () => {
    const navigate = useNavigate()

    return (
        <div className="hist-comp-wrapper">
            <div className="hist-comp">
                <div className="hist-comp-title">
                    КТО <br />
                    МЫ
                </div>
                <div className="hist-comp-text">
                    Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свое содержание и настроить шрифт. Текстовый блок можно перетащить в любое место на странице.
                </div>
                <div className="hist-comp-btn-div">
                    <button onClick={() => navigate('/history')} className="hist-comp-btn">
                        НАША ИСТОРИЯ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HistoryComp