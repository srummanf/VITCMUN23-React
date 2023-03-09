import React from 'react'
import photo1 from '../../../assets/Secretrait Photos/1.jpg' 
import photo2 from '../../../assets/Secretrait Photos/2.jpg' 
import photo3 from '../../../assets/Secretrait Photos/3.jpg' 
import photo4 from '../../../assets/Secretrait Photos/4.jpg' 
import photo5 from '../../../assets/Secretrait Photos/5.jpg' 
import photo6 from '../../../assets/Secretrait Photos/6.jpg' 
import photo7 from '../../../assets/Secretrait Photos/7.jpg' 
import photo8 from '../../../assets/Secretrait Photos/8.jpg'
import photo9 from '../../../assets/Secretrait Photos/9.jpg' 
import photo10 from '../../../assets/Secretrait Photos/10.jpg'  
import Styles from '../styles/Style.module.css'

function Index() {

    const info = [

        {
            id: 1,
            role: "Delegate Affairs",
            details: [
                {
                    image: photo9,
                    name: "TCA Varshini & Kushagra Dhingra",
                },
            ]
        },
        {
            id: 2,
            role: "EB Affairs",
            details: [
                {
                    image: photo7,
                    name: "Prisha Anand & Siva Narayan S A",
                },
            ]
        },
        {
            id: 3,
            role: "Social Media & Marketing",
            details: [
                {
                    image: photo1,
                    name: "Veenavarthini, Karthik Sabareesh, Ann Maria Thomson",
                },
            ]
        },
        {
            id: 4,
            role: "Sponsorship",
            details: [
                {
                    image: photo8,
                    name: "Aasish Mahesh & Vasu Sumeet Seth",
                },
            ]
        },
        {
            id: 5,
            role: "Tech",
            details: [
                {
                    image: photo8,
                    name: "Ronit Bokadia & Ojas Aklecha",
                }
            ]
        },
        {
            id: 6,
            role: "Finance",
            details: [
                {
                    image: photo8,
                    name: "Nitish R & Kamal Raj N",
                }
            ]
        },
        {
            id: 7,
            role: "Internal Affairs",
            details: [
                {
                    image: photo8,
                    name: "Narender Senthil",
                }
            ]
        },
        {
            id: 8,
            role: "Logistics",
            details: [
                {
                    image: photo3,
                    name: "Krithik, Inban Azhagiri, Alan Immanuel",
                }
            ]
        },
        {
            id: 9,
            role: "Hospitality",
            details: [
                {
                    image: photo6,
                    name: "Swetha B & Sushitha Ravisankar",
                }
            ]
        },
        {
            id: 10,
            role: "Content & Outreach",
            details: [
                {
                    image: photo2,
                    name: "Akash P Videsh, Suseema Devi, Rifat",
                }
            ]
        },
        {
            id: 11,
            role: "Design",
            details: [
                {
                    image: photo6,
                    name: "Roshini Venkatesh & Harshadaavenkat",
                }
            ]
        },
        {
            id: 12,
            role: "Photography",
            details: [
                {
                    image: photo10,
                    name: "Krishna T E, Prabhu Shankar M, Jeffrey Simon M",
                }
            ]
        },
        {
            id: 13,
            role: "Videography",
            details: [
                {
                    image: photo4,
                    name: "Vignesh R, Aravindhan S, Fabin Prakash",
                }
            ]
        },

    ]

    return (
        <>
            <div className='flex bg-[#daccf9] items-center justify-center py-10 px-10 md:px-20 w-full flex-col gap-6'>
                <div className={`${Styles.generals} w-full py-5 text-center font-semibold`}>
                    UNDER-SECRETARY-GENERALS
                </div>

                <div className='flex items-center justify-center flex-col gap-20'>


                    {
                        info.map((roles) => (
                            <div className='flex items-center justify-center w-full flex-col gap-6'>
                                <h2 className='text-xl font-medium'>
                                    {roles.role}
                                </h2>
                                <div className='flex items-center justify-center gap-6 w-full flex-col md:flex-row'>
                                    {
                                        roles.details.map((person) => (
                                            <div className={`${Styles.general_card} flex items-center justify-center flex-col`}>
                                                <img src={`${person.image}`} alt='' className='mb-3 w-80 h-80 object-cover' />
                                                <h3 className='font-bold text-lg'>
                                                    {`${person.name}`}
                                                </h3>
                                            </div>
                                        ))
                                    }

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