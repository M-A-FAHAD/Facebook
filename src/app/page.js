'use client'
import Link from "next/link";
import './globals.css'
import '../../public/AlCSS/login.css'
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Page() {
  //login logic without database
  const number = '01771477206'
  const email = 'mishalahamed885@gmail.com'
  const password = 'fahad1477206'
  const [inputid, setInputid] = useState('')
  const [inputpassword, setInputpassword] = useState('')
  const [iderror, setIderror] = useState(false)
  const [passworderror, setPassworderror] = useState(false)
  const [idimptyerror, setIdimptyerror] = useState(false)
  const [passwordimptyerror, setPasswordimptyerror] = useState(false)
  const router = useRouter()
  const homenavigator = () => {
    router.push('/home')
  }
  const handleidinput = (e) => {
    setInputid(e.target.value)
    setIderror(false)
    setIdimptyerror(false)
  }
  const handlepasswordinput = (e) => {
    setInputpassword(e.target.value)
    setPassworderror(false)
    setPasswordimptyerror(false)
  }

  const submitdata = () => {
    if ((inputid === number || inputid === email) && inputpassword === password) {
      homenavigator();
    }
    //  else {
    //   alert('Invalid login');
    // }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    submitdata()

    if (inputid !== number && inputid !== "") {
      setIderror(true)
    } else if (inputid === "") {
      setIdimptyerror(true)
    }
    if (inputpassword !== password && inputpassword !== "") {
      setPassworderror(true)
    } else if (inputpassword === "") {
      setPasswordimptyerror(true)
    }
  }
  return (
    <>
      <main>
        <header >
          <div className="header-main-div">
            <section className="first-section">
              <img className="first-heading" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"></img>
              <h2 className="facebook-helps">Facebook helps you connect and share with the people in your life</h2>
            </section>
            <section>
              <div className="form-section">
                <div className="input-field">
                  <form onSubmit={onSubmit}>
                    <input className="input-btn" value={inputid} onChange={handleidinput} type="text" placeholder="Email adress or phone number" />
                    {
                      iderror && <div>
                        <p className="text-red-500 text-[12px] ">The email address you entered isn't connected to an account.</p>
                        <b className="text-red-500 text-[12px] hover:cursor-pointer hover:underline ml-[-10rem]">Find your acount and log in.</b>
                      </div>
                    }
                    {
                      idimptyerror && <p className="text-red-500 text-[12px] ml-[-7rem] ">Plese enter your email or phone number</p>
                    }
                    <input className="password-btn" value={inputpassword} onChange={handlepasswordinput} type="password" placeholder="Password" />
                    {
                      passworderror && <div>
                        <b className="text-red-500 text-[12px]  ml-[-14rem]">Wrong Password</b>
                      </div>
                    }
                    {
                      passwordimptyerror && <p className="text-red-500 text-[12px] ml-[-11.5rem] ">Plese enter your password</p>
                    }
                    <button type="submit" className="log-in-btn">Log in</button>
                  </form>
                  <Link className="link" href='/'><p className="hover_effect forgotten-btn">Forgotten password?</p></Link>
                  <hr className="hr" />
                  <button className="newacount-btn"><b>Create new account</b></button>
                </div>
                <div className="create-page-div">
                  <Link className="link hover_effect" href='/'><b>Create a Page</b></Link> for a celebrity,brand or business.
                </div>
              </div>
            </section>
          </div >
        </header >
        <footer>
          <div className="footer-main-div">
            <ul className="first-ul">
              <li className="hover_effect">English(UK)</li>
              <li className="hover_effect">বাংলা</li>
              <li className="hover_effect">অসমীয়া</li>
              <li className="hover_effect">हिन्दी</li>
              <li className="hover_effect">नेपाली</li>
              <li className="hover_effect">Bahasa Indonesia</li>
              <li className="hover_effect">العربية</li>
              <li className="hover_effect">中文(简体)</li>
              <li className="hover_effect">Bahasa Melayu</li>
              <li className="hover_effect">Español</li>
              <div className="plus-ico"><span className="mt-[-5px]">+</span></div>
            </ul>
            <hr className="hr-two" />
            <ul className="second-ul">
              <li className="hover_effect">Sign Up</li>
              <li className="hover_effect">Log in</li>
              <li className="hover_effect">Massenger</li>
              <li className="hover_effect">Facebook Lite</li>
              <li className="hover_effect">Watch</li>
              <li className="hover_effect">Places</li>
              <li className="hover_effect">Games</li>
              <li className="hover_effect">Marketplace</li>
              <li className="hover_effect">Meta pay</li>
              <li className="hover_effect">Meta Store</li>
              <li className="hover_effect">Meta Quest</li>
              <li className="hover_effect"> Inatagram</li>
              <li className="hover_effect">Threads</li>
              <li className="hover_effect">Fundraisers</li>
              <li className="hover_effect">Services</li>
              <li className="hover_effect">Voting Information Centre</li>
              <li className="hover_effect">Privacy Policy</li>
              <li className="hover_effect">Privacy Centre</li>
              <li className="hover_effect">Groups</li>
              <li className="hover_effect">About</li>
              <li className="hover_effect">Create ad</li>
              <li className="hover_effect">Create Page</li>
              <li className="hover_effect">Devellopers</li>
              <li className="hover_effect">Careers</li>
              <li className="hover_effect">Cookies</li>
              <li className="hover_effect">AdChoices</li>
              <li className="hover_effect">Terms</li>
              <li className="hover_effect">Help</li>
              <li className="hover_effect">Contact uploading and non-users</li>
            </ul>
            <span className="meta-2023"> Meta © 2023</span>
          </div>
        </footer>
      </main >
    </>
  )
}
