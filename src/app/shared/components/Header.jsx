import { useEffect, useState } from "react";
import Button from "./Button";
import { useRef } from "react";


export default function Header () {
    
    const [position, setPosition] = useState(window.scrollY);


    return <>
        <header className="flex md:p-6 p-4 justify-between items-center">
            <div className="logo">
                Mindset221
            </div>

            <div>
                <Button label="Support US" />
            </div>
        </header>
    </>
}