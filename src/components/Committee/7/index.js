import React from 'react'
import com1 from '../../../assets/com-1.png'
import com2 from '../../../assets/com-2.png'
import com3 from '../../../assets/com-3.png'
import com4 from '../../../assets/com-4.png'
import com5 from '../../../assets/com-5.png'
import com6 from '../../../assets/com-6.png'
import com7 from '../../../assets/com-7.png'
import Styles from '../styles/Style.module.css'

function Index() {

    const info = [

        {
            id: 1,
            title: "United Nations Security Council",
            description: "One of the United Nations' five principal organs, the United Nations Security Council (UNSC) is in charge of maintaining world peace and security.This fifteen-member council, including its five permanent members, seeks to address threats to international security and have primary control over all executive actions taken by the United Nations.",
            image: com1
        },

        {
            id: 2,
            title: "United Nations General Assembly Disarmament and International Security Committee",
            description: "Being the First Committee of the General Assembly, DISEC deals with international disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.",
            image: com2
        },

        {
            id: 3,
            title: "United Nations General Assembly Social, Humanitarian & Cultural Committee ",
            description: "One of the United Nations' five principal organs, the United Nations Security Council (UNSC) is in charge of maintaining world peace and security.This fifteen-member council, including its five permanent members, seeks to address threats to international security and have primary control over all executive actions taken by the United Nations.",
            image: com3
        },

        {
            id: 4,
            title: "Economic and Social Council",
            description: "Being the First Committee of the General Assembly, DISEC deals with international disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.",
            image: com4
        },

        {
            id: 5,
            title: "Lok Sabha",
            description: "One of the United Nations' five principal organs, the United Nations Security Council (UNSC) is in charge of maintaining world peace and security.This fifteen-member council, including its five permanent members, seeks to address threats to international security and have primary control over all executive actions taken by the United Nations.",
            image: com5
        },

        {
            id: 6,
            title: "International Press Corps",
            description: "Being the First Committee of the General Assembly, DISEC deals with international disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.",
            image: com6
        },

        {
            id: 7,
            title: "Trilateral Commission",
            description: "Being the First Committee of the General Assembly, DISEC deals with international disarmament, global challenges and threats to peace that affect the international community and seeks out solutions to the challenges in the international security regime.",
            image: com7
        },
    ]

    return (
        <>
            <div className={`flex ${Styles.bg} items-center justify-center py-10 px-10 md:px-20 w-full flex-col gap-6`}>
                <div className='flex items-center justify-center flex-col gap-20'>
                    {
                        info.map((item) => (
                            <div className={`${item.id % 2 === 0? 'md:flex-row-reverse' : 'md:flex-row'} flex-col flex items-center justify-between w-full gap-6`}>
                                <div className='flex items-center justify-center w-full'>
                                    <img src={item.image} alt='' className='w-72' />
                                </div>
                                <div className='flex items-start justify-center flex-col gap-2'>
                                    <h3 className='text-2xl md:text-4xl font-semibold'>
                                        {item.title}
                                    </h3>
                                    <p className='text-lg'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
        </>
    )
}

export default Index