import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import NotFound from "./404";

export default function HomePage(){
    return (
        <div className="w-full h-full max-h-full overflow-auto ">
            <Header/>
            <div className="w-full min-h-[calc(100%-100px)] bg-primary">
              <Routes>
                <Route path="/" element={<h1>Home Page</h1>}/>
                <Route path="/products" element={<h1>Product Page</h1>}/>
                <Route path="/about" element={<h1>About us Page</h1>}/>
                <Route path="/contact" element={<h1>contact us Page</h1>}/>
                <Route path="/*" element={<NotFound/>}/>
              </Routes>
            </div>

        </div>
    )
}