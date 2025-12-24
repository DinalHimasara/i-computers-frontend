import { Link, Route, Routes } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdRateReview } from "react-icons/md";

export default function AdminPage(){
    return(
        <div className="w-full h-full flex bg-accent">
            <div className="w-[300px] h-full max-h-full bg-accent">
                <div className="w-full h-[175px] flex flex-col items-center justify-center text-white">
                    <img src="/logoch1.png" className="h-full "></img>
                    
                </div>
                <div className="w-full h-[400px] text-2xl text-primary flex flex-col p-[20px]">
                    <Link to="/admin" className="w-full flex h-[40px] items-center gap-3"><FaClipboardList />Orders</Link>
                    <Link to="/admin/product" className="w-full flex h-[40px] items-center gap-3" ><FaBoxOpen />Product</Link>
                    <Link to="/admin/users" className="w-full flex h-[40px] items-center gap-3"><HiUsers />Users</Link>
                    <Link to="/admin/reviews" className="w-full flex h-[40px] items-center gap-3"><MdRateReview />Reviews</Link>
                </div>

            </div>
            <div className="w-[calc(100%-300px)] h-full max-h-full overflow-auto border-[7px] rounded-2xl border-accent bg-primary">
                <Routes path="/">
                    <Route path="/" element={<h1>Orders</h1>} />
                    <Route path="/product" element={<h1>Product</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                </Routes>
            </div>
        </div>
    )
}