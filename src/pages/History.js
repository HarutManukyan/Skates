const History = () => {
    const team = [
        {
            id: 1,
            img: 'https://static.wixstatic.com/media/1e47b2_cbc997b570d9496fa45cdc206e2db9af.jpg/v1/fill/w_280,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_cbc997b570d9496fa45cdc206e2db9af.jpg',
            name: 'Данила Сергеев'
        },
        {
            id: 2,
            img: 'https://static.wixstatic.com/media/1e47b2_09abf02d83a3442999fea3c59953ad17.jpg/v1/fill/w_280,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_09abf02d83a3442999fea3c59953ad17.jpg',
            name: 'Карина Орлова '
        },
        {
            id: 3,
            img: 'https://static.wixstatic.com/media/1e47b2_4cb92ea57b454e42a50a0929310e4ad9.jpg/v1/fill/w_280,h_185,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_4cb92ea57b454e42a50a0929310e4ad9.jpg',
            name: 'Марат Дольский'
        }
    ]

    return (
        <div className="history-container">
            <div className="history-content">
                <div className="history-content-text">
                    НАША <br />
                    ИСТОРИЯ
                </div>
                <div className="history-content-img-div">
                    <img className="history-content-img" src="https://static.wixstatic.com/media/1e47b2_4b3f41833bb1481284a38f42c08eb8d3.jpg/v1/fill/w_795,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_4b3f41833bb1481284a38f42c08eb8d3.jpg"/>
                </div>
            </div>
            <div className="history-texts">
                <div className="history-text1">
                    Это текст. Нажмите один раз и выберите «Редактировать текст» или кликните дважды, чтобы добавить содержание и настроить шрифт.
                </div>
                <div className="history-text2">
                    Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свое содержание и настроить шрифт. Текстовый блок можно перетащить в любое место на странице. Расскажите посетителям сайта о себе подробнее, например, как вам пришла в голову идея бизнеса.
                    <br /><br />
                    Здесь будет удачно смотреться текст о ваших услугах. Используйте эту возможность, чтобы выгодно представить свою компанию клиентам. Объясните, в чем заключается ваше преимущество перед конкурентами. Приводите увлекательные факты, цифры и не забудьте про ключевые слова, по которым ваш сайт найдут в поисковых системах.
                </div>  
            </div>
            <div className="team-container">
                <div className="team-title">
                    КОМАНДА
                </div>
                <div className="team">
                    {
                        team.map(({id, img, name}) => (
                            <div key={id}>
                                <div className="team-img-div">
                                    <img src={img} className='team-img'/>
                                </div>
                                <div className="team-name">
                                    {name}
                                </div>
                                <div className="team-text">
                                    Это текст. Кликните дважды, чтобы отредактировать. Расскажите здесь о себе.
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default History