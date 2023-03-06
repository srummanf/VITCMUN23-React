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
            description: "Social, cultural, and humanitarian issues, including but not limited to human rights jurisprudence, are the main focus of the Social, Humanitarian, and Cultural Committee (SOCHUM). The Committee collaborates with experts, special rapporteurs, and working group leaders under the direction of the UNHRC to develop policies for women, indigenous peoples, youth, and other emerging social demographics. The Committee also examines the UNHRC's special procedure reports. Although the Committee addresses a broad range of social and cultural challenges, human rights were the subject of 50 percent of the 62 resolutions submitted at the Committee's 76th session.",
            image: com5
        },

        {
            id: 4,
            title: "Economic and Social Council",
            description: "The Economic and Social Council (ECOSOC), one of the six main organs of the United Nations, discusses economic, social, and environmentalpolicy in order to achieve commonly agreed-upon international policy goals (like the Sustainable Development Goals). Collaboration with subsidiary organisations including regional economic and social commissions, commissions that enable intergovernmental discourse, expert bodies, specialised agencies, etc., makes up the majority of ECOSEC's activities. The organization's current focus is on implementing the 2030 Agenda for Sustainable Development, serving as a coordinator, convener, and specialised body for policy dialogue, policy-making, and the forging of consensus towards the implementation of the 2030 Agenda for Sustainable Development as well as other major UN conferences and summits, as well as documenting and minimising theeffects of COVID 19, and other global challenges.",
            image: com4
        },

        {
            id: 5,
            title: "Lok Sabha",
            description: "Lok Sabha - the lower house of parliament is composed of representatives of the people chosen by direct election on the basis of universal adult suffrage.The maximum strength of Lok sabha by the Constitution is 552, which is made up by election of upto 530 members to represent the States, upto 20 members to represent the Union Territories. The members of the parliament represent the people from their own constituency which ensures the direct principle of the democratic participation.One of the United Nations' five principal organs, the United Nations Security Council (UNSC) is in charge of maintaining world peace and security.This fifteen-member council, including its five permanent members, seeks to address threats to international security and have primary control over all executive actions taken by the United Nations.",
            image: com3
        },

        {
            id: 6,
            title: "International Press Corps",
            description: "The role of the international press at the UN is to inform the public about the organization's activities and initiatives and to promote transparency, accountability, and global cooperation.The international press is essential for promoting the free flow of information and ideas, and for ensuring that people have access to accurate and diverse sources of news and information.",
            image: com6
        },

        {
            id: 7,
            title: "Trilateral Commission",
            description: "When it was established in 1973, the Trilateral Commission's main goals were to address the interdependence of the US and its allies (Canada, Japan, and western Europe) and to promote closer collaboration between the allies. It is headed by three regional chairs (for Europe, North America, and the Asia-Pacific Region), who are assisted by deputies and an executive committee. The different membership quotas allotted to each nation demonstrate its the value of conomic weight and political influence on the Commission. The commission reflects its political and commercial interests in its commitment to the core values of private enterprise and stronger collective management of global problems.",
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