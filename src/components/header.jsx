import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent flex">
            <img src = "/logo1.png" className="h-full"></img>
            <div className="w-full h-ful flex text-primary items-center justify-center gap-[30px] text-[18px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </header>
    )
}