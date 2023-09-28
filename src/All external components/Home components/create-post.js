'use client'
import { useDispatch } from 'react-redux'
import '../../../public/AlCSS/create-post.css'
import { showpopup } from '@/RTK/slices'
export default function Create_post() {
    const dispatch = useDispatch()
    const handleshowpopup = () => {
        dispatch(showpopup())
    }
    return (
        <div className='create-post-main-div'>
            <div className='create-post-button-div'>
                <div className='create-post-img-div'>
                    <img className='create-post-img' src='/icons/profile.jpg' />
                </div>
                <div onClick={() => handleshowpopup()} className='create-post-text-div'>
                    <span className='create-post-text'>What's on your mind?</span>
                </div>
            </div>
            <hr />
            <div className='post-option-div'>
                <div className='all-post-option-div'>
                    <img className='all-post-option-img' src='/icons/live.png' />
                    <span className='all-post-option-text'>Live Video</span>
                </div>
                <div className='all-post-option-div'>
                    <img className='all-post-option-img' src='/icons/photo.png' />
                    <span className="all-post-option-text">Photo/video</span>
                </div>
                <div className='all-post-option-div feeling-div'>
                    <img className='all-post-option-img' src='/icons/feeling.png' />
                    <span className='all-post-option-text'>Feeling/activity</span>
                </div>
            </div>
        </div>
    )
}