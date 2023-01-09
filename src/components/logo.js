import { useEffect, useState } from "react"
import Lottie from "lottie-react";
import mathAnimation from './math.json'

function Logo() {












    return (





        <div className="flex justify-center w-full items-start py-6 text-2xl md:text-xl font-bold select-none h-1/4">
            <div className="flex items-center justify-center gap-3 w-full">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="#dc2626" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg> */}
                <div className="w-[48px] h-[48px]">
                    <Lottie animationData={mathAnimation} loop={false} />

                </div>
                Kdv Hesaplayıcı
            </div>



        </div>


    )
}

export default Logo