import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import  Shared from "./shared"


const Layout = () => {

    const ref = useRef();

    useEffect(() => {
        console.log(ref);
    },[])

    return (
        <main ref={ref} className="overflow-auto">

            <Shared.Header />
            
            <Outlet />

            <Shared.Background />

            <Shared.Footer />

        </main>
    )
}

export default Layout;