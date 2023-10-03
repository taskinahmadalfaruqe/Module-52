
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-poppins container max-w-[1140px]'>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;