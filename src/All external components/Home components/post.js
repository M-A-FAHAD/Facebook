import React from 'react'
import '../../../public/AlCSS/post.css'
export default function Post() {
    return (
        <>
            <div className='post-main-div'>
                <div className='post-div-one'>
                    <div className='break-coll'>
                        <div className='post-profiel-imag-div'>
                            <img className='post-profil-img' src='/icons/profile.jpg' />
                        </div>
                        <div className='profilename-div'>
                            <b className='proflie-text'>No Profile Name</b>
                            <div className='post-time-div'>
                                <h5 className='post-time-text'>Just now .</h5>
                                <img className='post-time-img' src='/icons/earth.png' />
                            </div>
                        </div>
                    </div>
                    <div className='break-coll'>
                        <div className='more-icon-div'>
                            <img className='more-icons' src='/icons/more.png' />
                        </div>
                        <div className='more-icon-div'>
                            <img className='more-icons' src='/icons/cros.png' />
                        </div>
                    </div>
                </div>
                <div className='post-div-two'>
                    <p>photo/video caption heare </p>
                </div>
                <div className='post-div-three'>

                </div>
                <div className='post-div-four'>
                    <p>no one like this post</p>
                </div>
                <div className='post-div-five'>
                    <div className='like-section-div'>
                        <img className='like-image' src='/icons/like-before.png' />
                        <span className='like-text'>Like</span>
                    </div>
                    <div className='like-section-div'>
                        <img className='like-image' src='/icons/comment.png' />
                        <span className='like-text'>Comment</span>
                    </div>
                    <div className='like-section-div'>
                        <img className='like-image' src='/icons/share.png' />
                        <span className='like-text'>Share</span>
                    </div>
                </div>
                <div className='post-div-six'>
                    <div className='comments-main-div'>
                        <div className='comment-profile-img-div'>
                            <img className='comment-profile-img' src='/icons/profile.jpg' />
                        </div>
                        <div className='comment-input-div'>
                            <div className='comment-input-field'>
                                <input className='comment-input-field' type='text' placeholder='Write a comment...' />
                            </div>
                            <div className='comment-input-field-main-div'>
                                <div className='comment-input-fiels-icons-div'>
                                    <img className='comment-input-field-icons' src='/icons/avtar.png' />
                                </div>
                                <div className='comment-input-fiels-icons-div'>
                                    <img className='comment-input-field-icons' src='/icons/smile.png' />
                                </div>
                                <div className='comment-input-fiels-icons-div'>
                                    <img className='comment-input-field-icons' src='/icons/camera.png' />
                                </div>
                                <div className='comment-input-fiels-icons-div'>
                                    <img className='comment-input-field-icons' src='/icons/gif.png' />
                                </div>
                                <div className='comment-input-fiels-icons-div'>
                                    <img className='comment-input-field-icons' src='/icons/sticker.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

