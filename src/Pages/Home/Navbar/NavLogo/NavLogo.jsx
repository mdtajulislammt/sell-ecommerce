import { Link } from 'react-router-dom';
import logo from '../../../../assets/Asset 11@4x.png'
import logo2 from '../../../../assets/Asset 7@4x.png'

const NavLogo = () => {
     return (
          <div className=''>
               <Link to={'/'}><img src={logo} alt="" className=' md:block hidden w-52' /></Link>
               <Link to={'/'}><img src={logo2} alt="" className=' md:hidden w-12 drop-shadow' /> </Link>
               
              
          </div>
     );
};

export default NavLogo;