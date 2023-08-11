import { Routes as ReactRoutes, Route } from 'react-router-dom'
import Layout from "./Layout"
import Home from './home';
import Admin from './admin';
import Posts from './posts';
import Portfolio from './portfolio';

export default function Routes () {

    return (<>
        <ReactRoutes>
			<Route path="/" element={ <Layout /> } >
				<Route path="/" element={
					<Home />
				} />

				<Route path="/admin/*" element={
					<Admin />
				} />

				<Route path="/posts/*" element={
					<Posts />
				} />

				<Route path="/portfolio/*" element={
					<Portfolio />
				} />
			</Route>
		</ReactRoutes>
    </>)
}