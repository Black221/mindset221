import { Outlet } from "react-router-dom";


const Layout = () => {

    return (
        <div id="posts" className="">

            <Outlet />
            
        </div>
    )
}

export default Layout;