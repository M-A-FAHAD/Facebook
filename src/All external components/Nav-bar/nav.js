'use client'
import Link from 'next/link';
import '../../../public/AlCSS/nav.css'
import { useState } from 'react';
export default function Nav() {
    const [homediv, setHomediv] = useState('nav-middle-main-div-two')
    const [friendsdiv, setFriendsdiv] = useState('nav-middle-main-div')
    const [videodiv, setVideodiv] = useState('nav-middle-main-div')
    const [marketdiv, setMarketdiv] = useState('nav-middle-main-div')
    const [groupdiv, setGroupdiv] = useState('nav-middle-main-div')
    const changehome = () => {
        setHomediv('nav-middle-main-div-two')
        setFriendsdiv('nav-middle-main-div')
        setVideodiv('nav-middle-main-div')
        setMarketdiv('nav-middle-main-div')
        setGroupdiv('nav-middle-main-div')
    }
    const changefriends = () => {

        setHomediv('nav-middle-main-div')
        setFriendsdiv('nav-middle-main-div-two')
        setVideodiv('nav-middle-main-div')
        setMarketdiv('nav-middle-main-div')
        setGroupdiv('nav-middle-main-div')
    }
    const changevideo = () => {
        setHomediv('nav-middle-main-div')
        setFriendsdiv('nav-middle-main-div')
        setVideodiv('nav-middle-main-div-two')
        setMarketdiv('nav-middle-main-div')
        setGroupdiv('nav-middle-main-div')
    }
    const changemarket = () => {
        setHomediv('nav-middle-main-div')
        setFriendsdiv('nav-middle-main-div')
        setVideodiv('nav-middle-main-div')
        setMarketdiv('nav-middle-main-div-two')
        setGroupdiv('nav-middle-main-div')
    }
    const changegroup = () => {
        setHomediv('nav-middle-main-div')
        setFriendsdiv('nav-middle-main-div')
        setVideodiv('nav-middle-main-div')
        setMarketdiv('nav-middle-main-div')
        setGroupdiv('nav-middle-main-div-two')

    }
    const [dropdown_profile, setDropdown_profile] = useState(false);
    const dropdown_btn = () => {
        dropdown_profile == false ? setDropdown_profile(true) : setDropdown_profile(false)
    }
    return (
        <main>
            <nav className='nav-main-div'>
                <span className='scarchbar-main-div'>
                    <img className="facebook-icon" src="/icons/facebook.png" />
                    <div className='scarch-span'>
                        <svg className='search-icon-svg'
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>

                        <input className='scarch-bar' placeholder='Search Facebook' />
                    </div>
                    <img className='hambarger' src='/icons/hambarger.png' />
                </span>
                <span className='middle-icon-main-div'>
                    <span onClick={changehome} title='Home' className={homediv}> <img className='nav-middle-icons' src='/icons/home.png' /></span>
                    <span onClick={changefriends} title='Friends' className={friendsdiv}> <img className='nav-middle-icons' src='/icons/friends.png' /></span>
                    <span onClick={changevideo} title='Video' className={videodiv}> <img className='nav-middle-icons' src='/icons/video.png' /></span>
                    <span onClick={changemarket} title='Marketplace' className={marketdiv}> <img className='nav-middle-icons' src='/icons/marketplace.png' /></span>
                    <span onClick={changegroup} title='Group' className={groupdiv}> <img className='nav-middle-icons' src='/icons/group.png' /></span>
                </span>
                <span className='right-icon-main-div'>
                    <span className='right-icon-div plus-div'><img className="plus-icon" src="/icons/plus.png" /></span>
                    <span className='right-icon-div'><img className="nav-right-icons" src="/icons/menu.png" /></span>
                    <span className='right-icon-div'><img className="nav-right-icons" src="/icons/messenger.png" /></span>
                    <span className='right-icon-div'><img className="nav-right-icons" src="/icons/notification.png" /></span>
                    <span onClick={dropdown_btn} className='right-icon-div'><img className="nav-right-icons" src="/icons/user.png" /></span>
                </span>
            </nav>
            {
                dropdown_profile &&
                <div className='dropdown-profiel-main-div'>
                    <div className='dropdown-profile-section'>
                        <div className='dropdown-profile-img-div'>
                            <div className='dropdown-profile-img-section-div'>
                                <img className='dropdown-profile-img' src='/icons/profile.jpg' />
                                <p className='profile-name-text'>No profile name</p>
                            </div>
                            <hr />
                            <Link className='see-more-profile-text' href='#'>See all profile</Link>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            }
        </main>
    );
}