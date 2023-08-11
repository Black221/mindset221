import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Layout from "./Layout"

export default function Routes () {

    return <>
    
        <ReactRoutes>
			<Route path="/" element={ <Layout /> } >
                <Route path="/" element={<>
                    <div>test</div>
                </>}/>

                <Route path="/test" element={<>
                    <div>test 2</div>
                </>}/>
            </Route>
        </ReactRoutes>
        
    </>
}