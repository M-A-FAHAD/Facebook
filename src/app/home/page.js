'use client'
import Left from "@/All external components/Home components/left";
import '../globals.css'
import '../../../public/AlCSS/home.css'
import Nav from "@/All external components/Nav-bar/nav";
import Middle from "@/All external components/Home components/middle";
import Right from "@/All external components/Home components/right";
import CreatePostPopup from "@/All external components/Home components/create_post_popup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { hidepopup } from '@/RTK/slices'
export default function Page() {
    const dispatch = useDispatch()
    const popupValue = useSelector((state) => state.popup_change)
    const freezescreen = () => {
        document.body.style.overflow = "hidden";
    }
    const unfreezescreen = () => {
        document.body.style.overflow = "auto";
    }
    useEffect(() => {
        if (popupValue == "") {
            freezescreen()
        } else {
            unfreezescreen()
        }
    }, [popupValue])
    const bodyTapUnfreez = (event) => {
        if (event.target.id === 'targetDiv') {
            unfreezescreen();
            dispatch(hidepopup())
        }

    }
    return (
        <>
            <div className=" home-full-div">
                <div className="navbar">
                    <Nav />
                </div>
                <div className="home-main-conatiner">
                    <div className="left-bar">
                        <Left />
                    </div>
                    <div className="middle-bar">
                        <Middle />
                    </div>
                    <div className="right-bar">
                        <Right />
                    </div>
                </div>
                <div onClick={bodyTapUnfreez} className={`create-post-popup-section ${popupValue}`} id="targetDiv">
                    <div ><CreatePostPopup /></div>
                </div>
            </div>
        </>
    )
}
