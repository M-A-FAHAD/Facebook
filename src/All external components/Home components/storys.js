'use client'
import { useState, useRef, useEffect } from 'react'
import '../../../public/AlCSS/storys.css'
export default function Storys() {
    const [div, setDiv] = useState('story-span-div-two')
    const [img, setImg] = useState('story-icons-two')
    const [text, setText] = useState('story-text-two')
    const [divtwo, setDivtwo] = useState('story-span-div')
    const [imgtwo, setImgtwo] = useState('story-icons')
    const [texttwo, setTexttwo] = useState('story-text')
    const [storys, setStoeys] = useState(true)
    const [reels, setReels] = useState(false)
    const sellectstoryscrool = useRef(null)
    const sellectreelsscrool = useRef(null)
    const changestory = () => {
        setDiv('story-span-div')
        setImg('story-icons')
        setText('story-text')
        setDivtwo('story-span-div-two')
        setImgtwo('story-icons-two')
        setTexttwo('story-text-two')
        setStoeys(false)
        setReels(true)

    }
    const changereels = () => {
        setDiv('story-span-div-two')
        setImg('story-icons-two')
        setText('story-text-two')
        setDivtwo('story-span-div')
        setImgtwo('story-icons')
        setTexttwo('story-text')
        setStoeys(true)
        setReels(false)

    }
    // storys scrool btn logic 
    const [story_left_scrool_btn, setStory_left_scrool_btn] = useState(false)
    const [story_right_scrool_btn, setStory_right_scrool_btn] = useState(false)
    const storyScrollLeft = () => {
        sellectstoryscrool.current.scrollLeft -= 585
        if (sellectstoryscrool.current.scrollLeft <= 585) {
            setStory_left_scrool_btn(false)
        } else {
            setStory_left_scrool_btn(true)
        }
        setStory_right_scrool_btn(true)
    }
    const storyScrollRight = () => {
        sellectstoryscrool.current.scrollLeft += 585;
        if (sellectstoryscrool.current.scrollLeft >= 0) {
            setStory_left_scrool_btn(true)
        }
        const storyScrollDuration = sellectstoryscrool.current.scrollLeft
        const storyTotalScrollDuration = sellectstoryscrool.current.scrollWidth
        if (storyScrollDuration + 585 >= storyTotalScrollDuration - 585) {
            setStory_right_scrool_btn(false)
        }
    }
    useEffect(() => {
        const TotalScrollDuration = sellectstoryscrool.current.scrollWidth
        if (TotalScrollDuration > 582) {
            setStory_right_scrool_btn(true)
        }
    }, [])
    //  reels scrool button logic 
    const [reels_right_scroll_btn, setReels_right_scroll_btn] = useState(true)
    const [reels_left_scroll_btn, setReels_left_scroll_btn] = useState(false)
    const reelsScrollLeft = () => {
        sellectreelsscrool.current.scrollLeft -= 450;
        if (sellectreelsscrool.current.scrollLeft <= 450) {
            setReels_left_scroll_btn(false)
        }
        setReels_right_scroll_btn(true)
    }
    const reelsScrollRight = () => {
        sellectreelsscrool.current.scrollLeft += 450;
        if (sellectreelsscrool.current.scrollLeft >= 0) {
            setReels_left_scroll_btn(true)
        }
        if (sellectreelsscrool.current.scrollLeft >= 450) {
            setReels_right_scroll_btn(false)
        }
    }
    //   exeptional code for fixing bug  
    useEffect(() => {
        if (storys == true) {
            setStory_left_scrool_btn(false)
            setStory_right_scrool_btn(true)
        }
        if (reels == true) {
            setReels_left_scroll_btn(false)
            setReels_right_scroll_btn(true)
        }
    }, [storys])
    return (
        <div className='storys-main-div'>
            <div className='storys-button'>
                <div onClick={changereels} className={div}>
                    <span className='story-span'><img className={img} src='/icons/storyboard.png' /><b className={text}>Storys</b></span>
                </div>
                <div onClick={changestory} className={divtwo}>
                    <span className='story-span'><img className={imgtwo} src='/icons/reels.png' /><b className={texttwo}>Reels</b></span>
                </div>
            </div>
            <div className='create-story-main-div'>
                {
                    storys &&
                    <>
                        <div ref={sellectstoryscrool} className='scroll-first-div'>
                            <div className='create-story-div'>
                                <div className='create-story-img-div'>
                                    {/* backround image heare  */}
                                </div>
                                <img className='story-plus-icon' src='/icons/story-plus.png' />
                                <b className='create-story-text'>Create story</b>
                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                        </div>
                        <div className='scroll-errow-btn-possition'>

                            {
                                story_left_scrool_btn &&
                                <>
                                    <button className='scroll-errow-btn right-errow-position' onClick={storyScrollLeft}><img className='scroll-errow-img' src='/icons/left-errow.png' /></button>
                                </>
                            }
                            {
                                story_right_scrool_btn &&
                                <>
                                    <button className='scroll-errow-btn left-errow-position' onClick={storyScrollRight}><img className='scroll-errow-img' src='/icons/right-errow.png' /></button>
                                </>
                            }

                        </div>
                    </>
                }
                {
                    reels &&
                    <>
                        <div ref={sellectreelsscrool} className='scroll-first-div'>
                            <div className='create-reels-div'>
                                <div className='reels-icon-div'>
                                    <img className='reels-icon' src='/icons/reels-icon.png' alt='Reels Icon' />
                                </div>
                                <div className='blue-plus-icon-div'>
                                    <img className='blue-plus-icon' src='/icons/plus-button.png' alt='Blue Plus Icon' />
                                </div>
                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>
                            <div className='scrolable-storys'>

                            </div>

                            <div className='reels-seemore-btn-main-div'>
                                <div className='reels-seemore-btn-div'>
                                    <img className='reels-seemore-btn' src='/icons/reels-see-more-icon.png' />
                                </div>
                                <span>See more</span>
                                <span>reels</span>
                            </div>
                        </div>
                        <div className='scroll-errow-btn-possition'>
                            {
                                reels_left_scroll_btn &&
                                <>
                                    <button className='scroll-errow-btn right-errow-position' onClick={reelsScrollLeft}><img className='scroll-errow-img' src='/icons/left-errow.png' /></button>
                                </>
                            }
                            {
                                reels_right_scroll_btn &&
                                <>
                                    <button className='scroll-errow-btn left-errow-position' onClick={reelsScrollRight}><img className='scroll-errow-img' src='/icons/right-errow.png' /></button>
                                </>
                            }
                        </div>
                    </>
                }
            </div>
        </div >
    )
}


