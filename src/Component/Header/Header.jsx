import moment from 'moment';
import BrakingNews from './BrakingNews';
import Navbar from '../NavBar/Navbar';

const Header = () => {

    return (
        <div className="my-2">
        <div className='text-center flex justify-center flex-col gap-2'>
        <label >
            <img src="/logo.png" className="mx-auto" alt="LOGO" />
        </label>
        <p>Journalism Without Fear or Favor</p>
        <div>{moment().format("dddd, MMMM D, YYYY")}</div>
        </div>
        <div className='my-3'>
            <BrakingNews></BrakingNews>
        </div>
        <div>
            <Navbar></Navbar>
        </div>
      </div>
    );
};

export default Header;