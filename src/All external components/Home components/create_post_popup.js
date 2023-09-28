'use client'
import { useDispatch } from 'react-redux'
import { hidepopup } from '@/RTK/slices'
import '../../../public/AlCSS/CreatePostPopup.css'


export default function CreatePostPopup() {
    const dispatch = useDispatch()
    const postpopuphide = () => {
        dispatch(hidepopup())
    }
    return (
        <div className="create-post-popup-main-div">
            <div className='create-post-popup-first-header-div'>
                <h1>Create Post</h1>
            </div>
            <div onClick={postpopuphide} className='create-post-popup-crox-btn-div'>
                <img className='create-post-popup-crox-btn-img' src='/icons/cros.png' />
            </div>
            <hr />
            <div className='create-post-popup-footer-section-main-div'>
                <div className='create-post-popup-profile-div'>
                    <img className='create-post-popup-profile-img' src='/icons/profile.jpg' />
                    <div className='create-post-popup-profile-name-div'>
                        <h1>No Profile Name</h1>
                        <div className='create-post-popup-friends-div'>
                            <img src='/icons/friends-dark.png' />
                            <b className='create-post-popup-friends-text'>Friends</b>
                            <img src='/icons/down-arrow.png' />
                        </div>
                    </div>
                </div>
                <div className='create-post-popup-text-input-div'>
                    <input className='create-post-popup-text-input-field' step='text' placeholder="what's on your mind" />
                    <div className='create-popst-popup-color-icons-div'>
                        <img className='create-popst-popup-color-icons' src='/icons/satp.png' />
                        <img title='Emoji' className='create-popst-popup-color-icons' src='/icons/smile-dark.png' />

                    </div>
                </div>
                <div className='addto-and-postbtn-main-div'>
                    <div className='addto-your-post-div'>
                        <b>Add to your post</b>
                        <div className='addto-your-post-icons-div'>
                            <img className='addto-your-post-icons' src='/icons/photo-gallery.png' />
                            <img className='addto-your-post-icons' src='/icons/tag-people.png' />
                            <img className='addto-your-post-icons' src='/icons/feeling.png' />
                            <img className='addto-your-post-icons' src='/icons/location-pin.png' />
                            <img className='addto-your-post-icons' src='/icons/color-gif.png' />
                            <img className='addto-your-post-icons' src='/icons/more.png' />
                        </div>
                    </div>
                    <div className='create-post-popup-post-button-div'>
                        <button className='create-post-popup-post-button'><b className='create-post-popup-post-button-btn-text'>Post</b></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
