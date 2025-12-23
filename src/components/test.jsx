import { useState } from "react"

export default function Test(){

    const [count, setCount] = useState(0)

    return(
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[300px] h-[300px] shadow-2xl bg-white flex items-center">
                <button className="w-[100px] h-[50px] bg-red-600 text-center text-white cursor-pointer"onClick={
                    ()=>{
                        setCount(count-1)

                    }
                }>
                    Decrement
                </button>

                <h1 className="w-[100px] h-[50px] text-center text-[30px]">
                    {count}
                </h1>

                <button className="w-[100px] h-[50px] bg-blue-600 text-center text-white cursor-pointer"onClick={
                    ()=>{
                        setCount(count+1)
                    }
                }>
                    increment
                </button>

            </div>
        </div>
    )
}