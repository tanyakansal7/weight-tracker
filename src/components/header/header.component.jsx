import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header=({currentUser})=>(
    <div className="header">

    {
       currentUser ?
       (<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>)
                :(
           <Link className="option" to='/signin'>
           SIGN IN
           </Link>
       )
    }
</div>
);

export default Header;