import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
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
const mapStateToProps=({user:{currentUser}})=>({
    currentUser

});
export default connect(mapStateToProps)(Header);
