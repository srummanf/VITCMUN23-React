import React from 'react'
import photo from '../../../assets/secretariat.png'
import Styles from '../styles/Style.module.css'

function Index() {

    const Info1 = [
        {
            id: 1,
            name: "Keerthana Babu",
            role: "Secretary-General",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
        {
            id: 2,
            name: "Siddarth Bandam",
            role: "Director-General",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
        {
            id: 3,
            name: "Lauren Debra",
            role: "Deputy-Secretary-General",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
        {
            id: 4,
            name: "Karthik V",
            role: "Deputy-Director-General",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
    ]

    const Info2 = [
        {
            id: 1,
            name: "Lokesh Narayana",
            role: "Chargé D’Affaires",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
        {
            id: 2,
            name: "Arvind Krishnan",
            role: "Chief Advisor",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
        {
            id: 3,
            name: "Gurshaan Singh",
            role: "Chargé D’Affaires",
            desc: "Max founded our company. He is the father of our main goals and values. He found the core members of our team and helped them to show their unique talents in the work process. He laid the foundations of the company."
        },
    ]

    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center py-10 px-10 md:px-20 w-full flex-col gap-6'>
                <div className='grid md:grid-cols-4 gap-6 grid-cols-1'>
                    {
                        Info1.map((item) => (
                            <div id={`${item.id}`} className={`${item.id % 2 === 0 ? Styles.card2 : Styles.card1} flex items-start justify-center flex-col gap-2 p-5 text-white`}>
                                <div className='flex items-center justify-center'>
                                    <img src={photo} alt='' className='' />
                                </div>


                                <h1 className='text-2xl font-bold'>
                                    {item.name}
                                </h1>

                                <h2 className='mb-3'>
                                    {item.role}
                                </h2>

                                <hr className='border border-[#AE50A4] w-1/2 mb-3' />

                                <p className='max-w-md text-sm text-gray-800'>
                                    {item.desc}
                                </p>
                            </div>

                        ))
                    }

                </div>

                <div className='grid md:grid-cols-3 gap-6 grid-cols-1'>
                    {
                        Info2.map((item) => (
                            <div className={`${item.id % 2 === 0 ? Styles.card1 : Styles.card2} flex items-start justify-center flex-col gap-2 p-5 text-white`}>
                                <div className='flex items-center justify-center'>
                                    <img src={photo} alt='' className='' />
                                </div>


                                <h1 className='text-2xl font-bold'>
                                    {item.name}
                                </h1>

                                <h2 className='mb-3'>
                                    {item.role}
                                </h2>

                                <hr className='border border-[#AE50A4] w-1/2 mb-3' />

                                <p className='max-w-md text-sm text-gray-800'>
                                    {item.desc}
                                </p>
                            </div>

                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Index