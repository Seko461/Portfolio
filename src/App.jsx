import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contacts from './components/Contacts';
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';
import { Suspense } from "react";

import { ClipLoader } from 'react-spinners';

import { useGSAP } from '@gsap/react';
// import 'bootstrap/dist/css/bootstrap.min.css';

gsap.registerPlugin(useGSAP);



function App() {


  const container = useRef();
  // const page = useRef();
  const [active, setActive] = useState(false);


  useGSAP(() => {
    const tween = gsap.fromTo(
      ".folder",
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, duration: 2.5 }
    )
    gsap.fromTo(
      ".content",
      { autoAlpha: 0, x: -200 },
      { autoAlpha: 1, x: 0, duration: 2.5 }
    )
    gsap.fromTo(
      ".top",
      { autoAlpha: 0, x: -200 },
      { autoAlpha: 1, x: 0, duration: 3 }
    )
    gsap.fromTo(
      ".description",
      { autoAlpha: 0, x: -200 },
      { autoAlpha: 1, x: 0, duration: 3 }
    )
    gsap.fromTo(
      ".containerNav",
      { autoAlpha: 0, y: -200 },
      { autoAlpha: 1, y: 0, duration: 1.5 }
    )
    gsap.fromTo(
      "ul",
      { autoAlpha: 0, y: -100 },
      { autoAlpha: 1, y: 0, duration: 2.5 }
    )
    gsap.fromTo(
      ".canvas",
      { autoAlpha: 0, x: 200 },
      { autoAlpha: 1, x: 0, duration: 2.5 }
    )
    gsap.fromTo(
      ".btnsWorks ",
      { autoAlpha: 0, y: 200 },
      { autoAlpha: 1, y: 0, duration: 3.5 }
    )

  });



  return (
    <>

      <BrowserRouter>
        <div className="background">
          <div ref={container} className="appContainer">
            <div className='containerNav'>
              <div className="navlinks">
                <ul>

                  <li onClick={() => setActive(active)}>
                    <NavLink to={"/"} onClick={() => tween.play()}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"} onClick={() => tween.play()}>
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/works"} onClick={() => tween.play()}>
                      Works
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contacts"} onClick={() => tween.play()}>
                      Contacts
                    </NavLink>
                  </li>

                </ul>
              </div>

            </div >

            <Routes>
              <Route path="/" element={
                <Suspense fallback={<ClipLoader />}>
                  <Home className="page" />
                </Suspense>
              } />
              <Route path="/about" element={
                <Suspense fallback={<ClipLoader />}>
                  <About className="page" />
                </Suspense>
              } />
              <Route path="/works" element={
                <Suspense fallback={<ClipLoader />}>
                  <Works className="page" activeSlide={1} />
                </Suspense>
              } />
              <Route path="/contacts" element={
                <Suspense fallback={<ClipLoader />}>
                  <Contacts className="page" />
                </Suspense>
              } />
              {/* <Route path="*" element={<Error404 />} /> */}
            </Routes>

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
