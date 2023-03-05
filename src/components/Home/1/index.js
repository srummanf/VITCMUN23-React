import React from 'react'
import Styles from '../styles/Style.module.css'
import { motion } from "framer-motion";


function Index() {

    const MotionHeading = motion.div;

    return (
        <>
            <div className='flex items-center justify-center h-screen p-10'>
                <motion.div
                    className={`${Styles.heading} flex items-center justify-center flex-col gap-6 text-center w-full h-full`}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <MotionHeading
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h1 className="text-white text-base md:text-2xl font-semibold md:text-center text-left">VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI</h1>
                    </MotionHeading>
                    <MotionHeading
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <h2 className="text-white text-6xl md:text-7xl font-bold leading-tight md:text-center text-left">MODEL UNITED NATIONS</h2>
                    </MotionHeading>
                    <MotionHeading
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <h3 className="text-white text-2xl font-bold md:text-center text-left">24 25 26 March 2023</h3>
                    </MotionHeading>
                </motion.div>
            </div>

        </>
    )
}

export default Index