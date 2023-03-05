import React from 'react'
import VITCMUN from '../../../assets/logo.png'

function Index() {
    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center pt-5 pb-20 md:pt-40 md:pb-40 px-10  md:px-20 w-full'>
                <div className='flex items-center justify-center md:justify-between md:flex-row flex-col-reverse '>

                    <div className=' flex items-center md:items-start justify-center flex-col gap-4 md:text-left text-center'>
                        <h3 className='text-4xl font-bold text-center'>
                            About VITC MUN
                        </h3>
                        <p className='max-w-4xl text-justify'>
                            Model United Nations IITI is back again with the focus of giving a platform to young, budding pioneers and pace-setters to address some of the very grave problems engulfing the world. An assorted collecton of UN committees to pursue, MUN IITI 6.0 offers an engaging opportunity for delegates wanting meaningful deliberaton. This MUN is an attempt to promote healthy discussion and debate on various conflicts and obstacles from a young perspective and provide rational and feasible fixes to the same. Our pool of dedicated MUN team will bring forth the most engaging motions aimed to facilitate the highest quality of debate.
                        </p>
                    </div>
                    <div className=' flex items-center justify-center'>
                        <img src={VITCMUN} alt='' className='w-[70%]' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Index