import React, { useState, useRef, Suspense } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '../assets/styles/Works.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Link } from 'react-router-dom';
import WeatherApp from './WeatherApp';
import { ClipLoader } from 'react-spinners';
import TicTacToe from './TicTacToe';
import AppQRCode from './AppQRCode';
import Accordion from './Accordion';

gsap.registerPlugin(useGSAP);

const Works = (props) => {
    const [activeSlide, setactiveSlide] = useState(props.activeSlide);

    const works = [<WeatherApp />, <TicTacToe />, <AppQRCode />, <Accordion />]


    // const works = [
    //     {
    //         id: 1,
    //         title: "Title",
    //         description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."

    //     },
    //     {
    //         id: 2,
    //         title: "Title",
    //         description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."

    //     },
    //     {
    //         id: 3,
    //         title: "Title",
    //         description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //         link: '../../components/workDirectory/WeatherApp.jsx'

    //     },
    //     {
    //         id: 4,
    //         title: "Title",
    //         description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."

    //     },
    //     {
    //         id: 5,
    //         title: "Title",
    //         description: " Lorem ipsum dolor sit amet consectetur adipisicing elit."

    //     },
    // ]
    const next = () =>
        activeSlide < works.length - 1 && setactiveSlide(activeSlide + 1);

    const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

    const sliderContainer = useRef();
    useGSAP(() => {
        const copyTween = gsap.fromTo(
            ".top-work",
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 2.5 }
        )
        gsap.fromTo(
            ".bottom-work",
            { autoAlpha: 0, y: -20 },
            { autoAlpha: 1, y: 0, duration: 2.5 }
        );

        copyTween.play()

    })

    const getStyles = (index) => {
        if (activeSlide === index)
            return {
                opacity: 1,
                transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                zIndex: 10,

            };
        else if (activeSlide - 1 === index)
            return {
                opacity: 1,
                transform: "translateX(-240px) translateZ(-400px) rotateY(45deg) scale(.8)",
                zIndex: 9
            };
        else if (activeSlide + 1 === index)
            return {
                opacity: 1,
                transform: "translateX(240px) translateZ(-400px) rotateY(-45deg) scale(.8)",
                zIndex: 9
            };
        else if (activeSlide - 2 === index)
            return {
                opacity: 1,
                transform: "translateX(-480px) translateZ(-500px) rotateY(80deg) scale(.6)",
                zIndex: 8
            };
        else if (activeSlide + 2 === index)
            return {
                opacity: 1,
                transform: "translateX(480px) translateZ(-500px) rotateY(-80deg) scale(.6)",
                zIndex: 8
            };
        // else if (index < activeSlide - 2)
        //     return {
        //         opacity: 1,
        //         transform: "translateX(-480px) translateZ(-600px) rotateY(35deg) scale(.6)",
        //         zIndex: 7
        //     };
        // else if (index > activeSlide + 2)
        //     return {
        //         opacity: 1,
        //         transform: "translateX(480px) translateZ(-600px) rotateY(-35deg) scale(.6)",
        //         zIndex: 7
        //     };
    };





    return (
        <>
            {/* carousel */}
            <div className="slideC">
                {works.map((work, index) => (
                    <div
                        className="folder folderSlide slide"
                        style={{
                            ...getStyles(index)
                        }}
                    >
                        <div ref={sliderContainer}

                            className="sliderContent">
                            {/* <h1 className='top-work'>{work.title}: {work.id}</h1>
                            <p className='bottom-work'>{work.description}</p>
                            <Link to="./WeatherApp.jsx">Link</Link> */}
                            {work}
                        </div>
                    </div>
                ))}

                {/* <div className="folder">
                    ciao
                </div> */}

            </div>
            {/* carousel */}

            <div className="btnsWorks">
                <FontAwesomeIcon
                    className="btnIcon"
                    onClick={prev}
                    icon={faArrowLeft}

                    size="2x"
                />
                <FontAwesomeIcon
                    className="btnIcon"
                    onClick={next}
                    icon={faArrowRight}

                    size="2x"
                />
            </div>

            {/* <div className='folder'>
                <Suspense fallback={<ClipLoader />}>
                    <div className="weatherAppContainer">
                        <h1>Weather App</h1>
                        <WeatherApp />
                    </div>
                </Suspense>
            </div>
            <div className="folder">
                <Suspense fallback={<ClipLoader />}>
                    <TicTacToe />
                </Suspense>
            </div> */}

        </>
    );
};



export default Works
