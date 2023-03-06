import React from 'react'
import VITCMUN from '../../../assets/logo.png'

function Index() {
    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center pt-5 pb-20 md:pt-40 md:pb-40 px-10  md:px-20 w-screen'>
                <div className='flex items-center justify-center md:justify-between md:flex-row flex-col-reverse '>

                    <div className=' flex items-center md:items-start justify-center flex-col gap-4 md:text-left text-center'>
                        <h3 className='text-2xl md:text-4xl font-bold text-center'>
                            About VITC MUN
                        </h3>
                        <p className='max-w-4xl text-justify'>
                            VITCMUN, or Vellore Institute of Technology Chennai Model United
                            Nations, is an annual conference held at the Vellore Institute of
                            Technology, Chennai. It is a platform for students to engage in
                            simulated United Nations discussions and debates on global issues.
                            Participants are assigned different countries and must represent their
                            viewpoints and policies during the conference. VITC MUN provides a
                            unique opportunity for students to improve their public speaking and
                            negotiation skills, as well as learn more about international relations
                            and current events. It also encourages critical thinking and the ability
                            to understand different perspectives, making it an invaluable experience
                            for anyone interested in politics or diplomacy.                        </p>
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