import "./sidebar.scss"
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LoginIcon from '@mui/icons-material/Login';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
          <span className="logo">Dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <FlutterDashIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>
                Dashboard
              </span>
            </Link>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PeopleOutlineIcon className="icon" />
              <span>
                Users
              </span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsIcon className="icon" />
              <span>
                Products
              </span>
            </li>
          </Link>
          <li>
            <BorderColorIcon className="icon" />
            <span>
              Orders
            </span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>
              Delivery
            </span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>
              Stats
            </span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>
              Notification
            </span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <SettingsSuggestIcon className="icon" />
            <span>
              System Health
            </span>
          </li>
          <li>
            <LoginIcon className="icon" />
            <span>
              Logs
            </span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>
              Settings
            </span>
          </li>
          <p className="title">USER</p>
          <li>
            <GroupAddIcon className="icon" />
            <span>
              Profiles
            </span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>

      </div>
    </div>
  )
}

export default Sidebar