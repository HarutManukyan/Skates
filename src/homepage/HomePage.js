import NewThings from "./NewThings"

const HomePage = () => {
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
                        <button className="homepage-btn">
                            КУПИТЬ
                        </button>
                    </div>
                </div>
            </div>
            <NewThings />    
        </>
    )
}

export default HomePage