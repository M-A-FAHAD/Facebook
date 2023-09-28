'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../../../public/AlCSS/left.css'
import '../../app/globals.css'
export default function Left() {
    const [drop, setDrop] = useState(false)
    const [falldown, setFalldown] = useState(true)
    const [flyup, setFlyup] = useState(false)
    const dropbutton = () => {
        if (drop == false) {
            setDrop(true)
            setFalldown(false)
            setFlyup(true)
        } else {
            setDrop(false)
            setFalldown(true)
            setFlyup(false)
        }
    }

    return (
        <>
            <div className='left-main-div'>
                <div className='fixed-six div'>
                    <ul className="main-ul">
                        <div>
                            <li className="list-itemes">
                                <img className='icons' src='/icons/user.png' />
                            </li>
                            <li className="list-itemes">
                                <img className='icons' src='/icons/one.png' /><b>Find friends</b>
                            </li>
                            <li className="list-itemes">
                                <img className='icons' src='/icons/two.png' /><b>Feeds</b>
                            </li>
                            <li className="list-itemes">
                                <img className='icons' src='/icons/three.png' /><b>Groups</b>
                            </li>
                            <li className="list-itemes">
                                <img className='icons' src='/icons/four.png' /><b>Video</b>
                            </li>
                            <li className="list-itemes">
                                <img className='icons' src='/icons/five.png' /><b>Marketplace</b>
                            </li>
                        </div>
                        <div className='dropdown-option'>
                            <AnimatePresence>
                                {drop &&
                                    <motion.div
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 0 }}
                                        transition={{ duration: 0.1 }} s>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/six.png' /><b>Ad Centre</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/seven.png' /><b>Ads Manager</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/eight.png' /><b>Blood Donations</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/nine.png' />
                                            <b>Climate Science Centre</b>

                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/ten.png' />
                                            <b>Crisis Response</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/eleven.png' />
                                            <b>Events</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/twelve.png' />
                                            <b>Fundraisers</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/thirteen.png' />
                                            <b>Gaming video</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/fourteen.png' />
                                            <b>Memories</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/fifteen.png' />
                                            <b>Messenger</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/sixteen.png' />
                                            <b>messenger Kids</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/seventeen.png' />
                                            <b>Orders and payments</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/eightteen.png' /><b>Pages</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/nineteen.png' /><b>Play games</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/twenty.png' /><b>Recent ad activity</b>
                                        </li>
                                        <li className="list-itemes">
                                            <img className='icons' src='/icons/twentyone.png' /><b>Saved</b>
                                        </li>
                                    </motion.div>

                                }
                            </AnimatePresence>
                        </div>
                        <li onClick={dropbutton} className='drop-button'>
                            {
                                falldown && <div className='dropdown-main-div'>
                                    <svg className='dropdow-icon-svg' width="256px" height="256px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path> </g> </g></svg>
                                    <b className='see-more-less'>See more</b>
                                </div>
                            }
                            {
                                flyup && <div className='dropdown-main-div'>
                                    <svg className='dropdow-icon-svg' width="256px" height="256px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path> </g> </g></svg><b className='see-more-less'>See less</b>
                                </div>

                            }
                        </li>
                    </ul>
                    <hr className='hr' />

                </div>
            </div>
        </>
    )
}






// dropdown svg [
// <svg width="256px" height="256px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path> </g> </g></svg>
// ]
// dropup svg[
//     <svg width="256px" height="256px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.00024000000000000003" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="none" d="M0 0h24v24H0z"></path> <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path> </g> </g></svg>
// ]