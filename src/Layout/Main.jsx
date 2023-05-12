
import { Outlet } from 'react-router-dom';
// import Main from './Main';
import Footer from '../Home/Shared/Footer';
import Navbar from '../Home/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;