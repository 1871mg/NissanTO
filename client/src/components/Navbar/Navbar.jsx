import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sagaGetLogoutAC } from "../../redux/actionCreators/asyncAC/asyncUserAC";
import { sagaGetLogoutAdminAC } from "../../redux/actionCreators/asyncAC/asyncAdminAC";
import { sagaGetLogoutWorkerAC } from "../../redux/actionCreators/asyncAC/asyncWorkerAC";
import styles from "./Navbar.module.css";
import logo from "./img/logo.svg";


const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const admin = useSelector((state) => state.adminReducer.admin);
  const worker = useSelector((state) => state.workerReducer.worker);
  const isUserLogout = useSelector((state) => state.userReducer.isUserLogout);

  const logoutFunc = () => {
    dispatch(sagaGetLogoutAC());
  };

  const logoutFuncAdmin = () => {
    dispatch(sagaGetLogoutAdminAC());
    history.push("/");
  };

  const logoutFuncWorker = () => {
    dispatch(sagaGetLogoutWorkerAC());
    history.push("/");
  };

  if (isUserLogout) {
    history.push("/");
  }

  return (
    <header className={styles.navbar}>
      <nav>
        {admin ? (
          <div className={styles.adminNav}>
            <h1 className={styles.adminHeader}>Admin</h1>
            <li>
              <button className={styles.navbarexit} onClick={logoutFuncAdmin}>
                выйти
              </button>
            </li>
          </div>
        ) : worker ? (
          <div className={styles.adminNav}>
            <h1 className={styles.adminHeader}>Worker</h1>
            <li>
              <button className={styles.navbarexit} onClick={logoutFuncWorker}>
                выйти
              </button>
            </li>
          </div>
        ) : (
          <ul>
            <Link to="/">
              <li>
                <img src={logo} alt="" width="70px" />
              </li>
            </Link>
            <div className={styles.navbartext}>
              {user && (
                <>
                  <li>
                    <Link to="/profile">профиль</Link>
                  </li>
                  <li>
                    <button className={styles.navbarexit} onClick={logoutFunc}>
                      выйти
                    </button>
                  </li>
                </>
              )}
              {!user && (
                <>
                  <li>
                    <Link to="/login">войти</Link>
                  </li>
                </>
              )}
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
