import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Typed from "typed.js";
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import { OrbitControls } from '@react-three/drei';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {


    const folder = useRef();
    const notify = () => toast("Use your mouse to play with the cube");
    const notify2 = () => toast("Double click on the panel to reset it");


    const clicked = () => {
        console.log('is clicked');
        folder.current.style.transformStyle = "preserve-3d";
        folder.current.style.transform = "perspective(1000px) rotateY(55deg) scale(0.5) translateX(-400px) ";
        folder.current.style.transition = "2.5s";


        notify();
        notify2();



    }
    const reset = () => {

        folder.current.style.transform = " scale(1) rotateY(0deg)";
        folder.current.transition = "2.5s ";



    }
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Sebastian Kokotovic", "your Front Dev"],
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);



    return (
        <>
            <div ref={folder}
                className='folder'
                onDoubleClick={reset}
            >
                {/* <img src="./wave_gray.png" alt="background" /> */}
                <div className="HomeContentContainer">
                    <div className="row top">
                        <h3>Hey_</h3>
                        <h2>I'm <span ref={el} /></h2>
                        <p className='description'>I'm a web developer, expecially focused on FrontEnd.
                            I love make your dreams comes true. We can build up your web sites together <br></br>
                            tailor-made for your every need. <br></br> So let's go I'm waiting for you
                        </p>
                        <div className="form home-form">
                            <div className="home-form-left">

                                <a href="/contacts">
                                    <input className="submit" type="submit" value="Hire Me" />
                                </a>
                            </div>
                            <div className="home-form-right">

                                <a>

                                    <input
                                        className="submit open-folder"
                                        type="submit"
                                        onClick={clicked}

                                        value="Click Here" />
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
            <ToastContainer />
            <Canvas className="canvas" camera={{
                position: [
                    5,
                    8,
                    12
                ]
            }}

            >
                <OrbitControls
                    enablePan={true}
                    enableRotate={true}
                    enableZoom={true}
                />
                <Cube />
            </Canvas>
        </>

    )
}

export default Home 
