import React from 'react'
import Styles from '../styles/Style.module.css'

function Index() {
    return (
        <>
            <div className={`flex ${Styles.bg} items-center justify-center pt-5 pb-20 md:pt-40 md:pb-40 px-10 md:px-20 w-full flex-col`}>
                <div className='flex items-center justify-center w-full '>
                    <p className='max-w-4xl text-justify'>
                        Model United Nations IITI is back again with the focus of giving a platform to young, budding pioneers and pace-setters to address some of the very grave problems engulfing the world. An assorted collecton of UN committees to pursue, MUN IITI 6.0 offers an engaging opportunity for delegates wanting meaningful deliberaton. This MUN is an attempt to promote healthy discussion and debate on various conflicts and obstacles from a young perspective and provide rational and feasible fixes to the same. Our pool of dedicated MUN team will bring forth the most engaging motions aimed to facilitate the highest quality of debate.
                    </p>
                </div>
                <hr className='mt-20 border border-gray-700 rounded w-1/2' />

            </div>
        </>
    )
}

export default Index