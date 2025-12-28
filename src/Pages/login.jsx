import { Link } from "react-router-dom";

export default function LoginPage(){
    return (
        <div className="w-full h-full bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-ful flex items-center justify-center flex-col p-[15px]">
                <Link to="/"><img src="/logo2.jpeg" className="w-[150px] h-auto object-cover mb-[20px] shadow-2xl"></img></Link> 
                <h1 className="text-primary text-[40px] font-lora italic font-semibold text-shadow-2xs text-center">Plug In Power Up. Play Hard</h1>
                <p className="text-primary text-[20px] text-center pt-[10px] font-lora font-normal italic">your ultimate destination for gaming gear...</p>
                

            </div>
            <div className="w-[50%] h-full flex items-center justify-center">
                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col items-center justify-center p-[30px]">
                    <h1 className="text-[40px] font-lora font-bold text-white text-shadow-gray text-shadow-xs mb-[20px]">Login</h1>
                    <input type="email" placeholder="Enter Email.." className="w-full h-[50px] mb-[20px] rounded-lg border border-white p-[10px] text-[17px] text-primary focus:outline-none focus:ring-2 focus:ring-accent"></input>
                    <input type="password" placeholder="Enter password.." className="w-full h-[50px] mb-[5px] rounded-lg border border-white p-[10px] text-[17px] text-primary focus:outline-none focus:ring-2 focus:ring-accent"></input>
                    <p className="text-white w-full text-left text-[14px] mb-[20px]"><Link to="/fpassword" className="hover:text-accent">Forgot Password?</Link></p>
                    <button className="w-full h-[50px] bg-white text-secondary font-mono font-semibold rounded-[5px] cursor-pointer hover:bg-accent hover:text-white shadow shadow-2xl">Login</button>
                    <p className="text-white not-italic text-shadow-xs">Don't have an account? <Link to="/register" className="text-accent italic">Register</Link></p>
                    


                </div>

            </div>


        </div>
    )
}