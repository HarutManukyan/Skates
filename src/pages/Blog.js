import { useEffect, useState } from "react"

import instance from '../api/axios'

const Blog = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        instance.get('posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err) )
    }, [])

    return (
        <div className="blog-container">
            <div className="history-content">
                <div className="history-content">
                    <div className="history-content-text">
                        НАШ<br />
                        БЛОГ
                    </div>
                    <div className="history-content-img-div">
                        <img className="history-content-img" src="https://static.wixstatic.com/media/1e47b2_56f51fc0031c4837803ce274f5597b6e.jpg/v1/fill/w_795,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1e47b2_56f51fc0031c4837803ce274f5597b6e.jpg"/>
                    </div>
                </div>
            </div>
            <div className="posts">
                {
                    posts.map(({id, img, title, text, likes, comments}) => (
                        <div className="post" key={id}>
                            <div className="post-img-div">
                                <img src={img} className="post-img"/>
                            </div>
                            <div className="post-content">
                                <div className="post-user">
                                    user
                                </div>
                                <div className="post-title">
                                    {title}
                                </div>
                                <div className="post-text">
                                    {text}
                                </div>
                                <div className="post-reactions">
                                    <div className="post-likes">
                                        {likes} нравиться
                                    </div>
                                    <div className="post-comments">
                                        {comments} комментариев
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog