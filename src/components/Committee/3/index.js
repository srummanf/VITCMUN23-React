import React from 'react'
import Styles from '../styles/Style.module.css'

function Index() {
    return (
        <>
            <div className={`flex ${Styles.bg} items-center justify-center pt-5 pb-20 md:pt-40 md:pb-40 px-10 md:px-20 w-full flex-col`}>
                <div className='flex items-center justify-center w-full '>
                    <p className='max-w-4xl text-justify'>
                        The objective of the VITCMUN is to facilitate novel discussions on
                        pressing contemporary issues. Committees focus both on Indian issues
                        with Lokh sabha and also international affairs. The MUN also provides
                        focus on diverse fields like Economics, Culture, Military Affairs etc.
                        Regional committees like the Trilateral commission also provide
                        alternative perspectives on the world order. The scope of these
                        committees is limited only by the ingenuity of the delegates</p>
                </div>
                <hr className='mt-20 border border-gray-700 rounded w-1/2' />

            </div>
        </>
    )
}

export default Index