import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';
import { QuickAction } from './QuickActions';

import  Search  from './Search/Search';
import DonateBlood from './donateBlood/donate'

import icons from '../../sass/img/icons.svg';
import Logout from '../../img/SVG/logout.svg';
import profilePicture from '../../sass/img/user.png';
import ProfileActions from './ProfileActions';



import Logo from '../../sass/img/logowhite.png';
import DashboardBackground from '../../img/background.svg'

import '../../css/dashboard/main.min.css';

class Sidebar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
    
    render() {
        const year = new Date();
        return(

     <div className="dashboard-content">
          <nav className= "sidebar">
          <img src={Logo} alt="logo" className="readydonor-logo" /> 
            
            <ul className = "side-nav">
              
           
              <center className="profile-image">
                
                <i class="fas fa-user-circle "></i>
              </center>                
              <Select labelId="label" id="select" value="20" className="account-dropdown">
                  <li className="account">
                    <Link to="#" className="account-link">Account</Link>
                  </li>
                  <li className="account">
                  <Link to="#" className="account-link">Logout</Link>
                  </li>
            </Select>
            
             
              
           
              <li className ="side-nav__item">
              <Link to="/" className="side-nav__link navItem"> 
                <div className ="user-nav__icon-box">
                <i class="fas fa-desktop"></i>
                <span className="side-nav__text">Home</span>
                
              </div>
            </Link>
            </li>
            
            <li className ="side-nav__item">
              <Link to="/profile" className="side-nav__link"> 
              <div className ="user-nav__icon-box">
              <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-user`} />
                  </svg>
                <span className="side-nav__text">Profile</span>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/donate" component={DonateBlood} className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-add-user`} />
                  </svg>
                <span className="side-nav__text">Donate Blood</span>
               
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/search" className="side-nav__link" component={Search}> 
                <div className ="user-nav__icon-box">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-search`} />
                  </svg>
              </div> 
                <span className="side-nav__text">Search for Blood</span>
                
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/donate-blood" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-calendar`} />
                  </svg>
                <span className="side-nav__text">Donor list</span>
               
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-location2`} />
                  </svg>
                <span className="side-nav__text">Contact Info</span>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                <a href=""
                  onClick={this.onLogoutClick.bind(this)}>
                  <img src={Logout}  className ="side-nav__icon" /> {' '}
                  <span className="side-nav__text">Log out</span>
                </a>
                  
              </div>
            </Link>
            </li>
          </ul>
            <div class = "legal"> 
              &copy; {year.getFullYear()} by Readydonor. All rights reserved
            </div>
          </nav>
    </div>
        );
    }
}





Sidebar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  
};

const mapStateToProps = state => ({

  auth: state.auth
});

export default connect(mapStateToProps, {  logoutUser, clearCurrentProfile })(
  Sidebar
);