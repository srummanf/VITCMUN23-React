import React from 'react'
import Styles from '../styles/Style.module.css'

function Index() {
    return (
        <>
            <div className='flex items-center justify-center h-screen p-10'>
                <div className={`${Styles.heading} flex items-center justify-center flex-col gap-6 text-center w-full h-full`}>
                    <h1 className="text-white text-base md:text-2xl font-semibold md:text-center text-left">VELLORE INSTITUTE OF TECHNOLOGY, CHENNAI</h1>
                    <h2 className="text-white text-6xl md:text-7xl font-bold leading-tight md:text-center text-left">MODEL UNITED NATIONS</h2>
                    <h3 className="text-white text-2xl font-bold md:text-center text-left">24 25 26 March 2023</h3>
                </div>
            </div>
        </>
    )
}

export default Index