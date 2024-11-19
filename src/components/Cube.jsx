import { useFrame, useThree } from '@react-three/fiber'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useRef, useState } from 'react'
import { Clock } from 'three'


const Cube = () => {
    const [active, setActive] = useState(false);
    const cubeRef = useRef();

    const clock = new Clock();
    const delta = clock.getDelta();
    // useFrame((state, delta) => {
    //     cubeRef.current.rotation.y += 2 * delta;

    // });
    useFrame(({ clock }) => {
        const a = clock.getElapsedTime()
        cubeRef.current.rotation.y += 0.010;
        // cubeRef.current.position.y = Math.sin(clock.getElapsedTime())
        if (active) {
            cubeRef.current.rotation.y = 0;
            // console.log('is active');
        }
    })



    const state_camera = useThree(state => state.camera)
    console.log(state_camera);
    const mesh = useThree();
    const { scene, camera } = useThree();



    return (
        <>
            <directionalLight
                position={[-2.38, 1.32, 0.74]}
                intensity={5}
            />
            <ambientLight intensity={0.5} />
            <mesh
                ref={cubeRef}
                position={[6, 4.5, -2]}
                scale={2.5}
                // scale={active ? 1.5 : 1}
                onPointerOver={() => setActive(!active)}
                onPointerLeave={() => setActive(false)}


            >
                <boxGeometry />
                <meshStandardMaterial color={'blue'} />
            </mesh>
        </>
    )
}

export default Cube

