import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sagaGetLogoutAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'
import { sagaGetLogoutAdminAC } from '../../redux/actionCreators/asyncAC/asyncAdminAC';
import styles from './Navbar.module.css';
import logo from './img/logo.svg';

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.userReducer.user);
  const admin = useSelector((state) => state.adminReducer.admin)
  const isUserLogout = useSelector((state) => state.userReducer.isUserLogout)
  
  const logoutFunc = () => {
    dispatch(sagaGetLogoutAC())
 }

 const logoutFuncAdmin = () => {
  dispatch(sagaGetLogoutAdminAC())
 }
 if (isUserLogout) {
  history.push('/')
}


  return (
    <header className={styles.navbar}>
      <nav>
        {
          admin ?
          <div className={styles.adminNav}>
            <h1 className={styles.adminHeader}>Adminka</h1>
            <li><button className={styles.navbarexit} onClick={logoutFuncAdmin}>выйти</button></li>
          </div>
          
          :
          <ul>
	        <Link to='/'><li><img src={logo} alt="" width="70px" /></li></Link>
	        <div className={styles.navbartext}>
          {user 
          && (
          <>
            <li><Link to="/profile">профиль</Link></li>
            <li><button className={styles.navbarexit} onClick={logoutFunc}>выйти</button></li>
          </>
          )}
          {!user
          && (
          <>
	          <li><Link to="/login">войти</Link></li>
          </>
          )}
	        </div>

        </ul>
        }
        
      </nav>
    </header>
  );
};

export default Navbar;
