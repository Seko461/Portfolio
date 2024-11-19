import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const About = () => {

    const logos = [
        {
            id: 1,
            item: './logos/html-icon.png',

        },
        {
            id: 2,
            item: './logos/visual-studio-code-icon.png',

        },
        {
            id: 3,
            item: './logos/three-js-icon.png',

        },
        {
            id: 4,
            item: './logos/tailwind-css-icon.png',

        },
        {
            id: 5,
            item: './logos/react-js-icon.png',

        },
        {
            id: 6,
            item: './logos/php-programming-language-icon.png',

        },
        {
            id: 7,
            item: './logos/mysql-icon.png',

        },
        {
            id: 8,
            item: './logos/javascript-programming-language-icon.png',

        },
        {
            id: 9,

            item: './logos/vue-js-icon.png',

        },
        {
            id: 10,
            item: './logos/gsap-greensock.svg',

        },
        {
            id: 11,
            item: './logos/git-icon.png',

        },
        {
            id: 12,
            item: './logos/github-icon.png',

        },
        {
            id: 13,
            item: './logos/figma-icon.png',

        },
        {
            id: 14,
            item: './logos/css-icon.png',

        },
        {
            id: 15,
            item: './logos/bootstrap-5-logo-icon.png',

        },
    ]


    const logoContainer = useRef();

    useGSAP(() => {
        const bannerTween = gsap.fromTo(
            ".banner",
            {
                x: 1000,
                autoAlpha: 0.5
            },
            {
                x: -1000,
                autoAlpha: 0.5,
                repeat: - 1,
                ease: "linear",
                duration: 12,
                // yoyo: true,


            }
        )
        bannerTween.play();
    });

    return (
        <>
            <div className='folder' >

                <div className="skills-container">
                    <div className="skill-title">

                        <h1>Skills</h1>
                    </div>
                    <div className="skill-body">

                        <div className="skill-left">
                            <ul>
                                <li>
                                    <label for="html">html: </label>
                                    <progress id="html" max={100} value={90}>90%</progress>
                                </li>
                                <li>
                                    <label for="css">css: </label>
                                    <progress id="css" max={100} value={90}>90%</progress>
                                </li>
                                <li>

                                    <label for="JS">JS: </label>
                                    <progress id="JS" max={100} value={80}>80%</progress>
                                </li>
                                <li>

                                    <label for="PHP">PHP: </label>
                                    <progress id="PHP" max={100} value={70}>70%</progress>
                                </li>
                                <li>

                                    <label for="Bootstrap">Bootstrap: </label>
                                    <progress id="Bootstrap" max={100} value={90}>90%</progress>
                                </li>
                                <li>

                                    <label for="Tailwind">Tailwind: </label>
                                    <progress id="Tailwind" max={100} value={60}>60%</progress>
                                </li>
                            </ul>



                        </div>
                        <div className="skill-right">
                            <ul>
                                <li>
                                    <label for="MySQL">MySQL: </label>
                                    <progress id="MySQL" max={100} value={90}>90%</progress>
                                </li>
                                <li>
                                    <label for="React">React: </label>
                                    <progress id="React" max={100} value={90}>90%</progress>
                                </li>
                                <li>
                                    <label for="Vue">Vue: </label>
                                    <progress id="Vue" max={100} value={60}>60%</progress>
                                </li>
                                <li>
                                    <label for="Git">Git: </label>
                                    <progress id="Git" max={100} value={70}>70%</progress>
                                </li>
                                <li>
                                    <label for="ThreeJS">ThreeJS: </label>
                                    <progress id="ThreeJS" max={100} value={60}>60%</progress>
                                </li>
                                <li>
                                    <label for="GSAP">GSAP: </label>
                                    <progress id="GSAp" max={100} value={80}>80%</progress>
                                </li>
                            </ul>






                        </div>
                    </div>


                </div>
                <div ref={logoContainer} className="logoContainer">
                    <div className="banner">
                        {logos.map((logo, index) => {
                            return (
                                <img src={logo.item} key={index} alt="" />
                            )
                        })}
                        {/* <img src='./logos/html-icon.png' alt="" />
                        <img src='./logos/visual-studio-code-icon.png' alt="" />
                        <img src='./logos/three-js-icon.png' alt="" />
                        <img src='./logos/tailwind-css-icon.png' alt="" />
                        <img src='./logos/react-js-icon.png' alt="" />
                        <img src='./logos/php-programming-language-icon.png' alt="" />
                        <img src='./logos/javascript-programming-language-icon.png' alt="" />
                        <img src='./logos/vue-js-icon.png' alt="" />
                        <img src='./logos/gsap-greensock.svg' alt="" />
                        <img src='./logos/git-icon.png' alt="" />
                        <img src='./logos/github-icon.png' alt="" />
                        <img src='./logos/figma-icon.png' alt="" />
                        <img src='./logos/css-icon.png' alt="" />
                        <img src='./logos/html-icon.png' alt="" />
                        <img src='./logos/bootstrap-5-logo-icon.png' alt="" /> */}
                    </div>
                </div>
            </div >


        </>
    )
}

export default About
