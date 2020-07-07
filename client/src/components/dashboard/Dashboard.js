import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import { logoutUser } from '../../actions/authActions';
import { QuickAction } from './QuickActions';

//import HorizontalLabelPositionBelowStepper from './UserForm'

import  Search  from './Search/Search';

import icons from '../../sass/img/icons.svg';
import profilePicture from '../../sass/img/user.png';
import ProfileActions from './ProfileActions';



import Logo from '../../sass/img/logowhite.png';
import DashboardBackground from '../../img/background.svg'

import '../../css/dashboard/main.min.css';



class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }
//  handleSearch = query =>  {
//    this.setState({ searchQuery: query, })
//  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const year = new Date();
    const { logoutUser } = this.props;
    

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
        
          <div className="dashboard">
            <img src={DashboardBackground} className="dashboard-background" />
              <p className="profile-welcome">
                 <Link to={`/profile/${profile.name}`} className="user-name">Hi {user.name}</Link>
              </p>
            <div className="quick-action-container">
              <h2 className="quick-action-text">Quick Actions</h2>
              <QuickAction />
            </div>
           
          </div>
          
        );
      } else {
        // User is logged in but has no profile

        // Stepper
        dashboardContent = (
          <React.Fragment>
          <div>
            <p className="welcome">Welcome {user.name}</p>
            <p className= "welcome-message">You have not yet setup a profile, please add some info</p>
            
          </div>
                     
             <Link to="/create-profile" className="btn btn-lg btn-info button">
                Create Profile
              </Link> 
           
             
            </React.Fragment>
            
        
        );
      }
    }

    return (
    
      <div className="dashboard-container">
        {/* <header className = "dashboard-header">
          
          <form action = "#" className = "search"> 
          <input type = "text" 
            className = "search__input"
            placeholder="search for blood"
            //onChange = {this.handleSearch}
           // value = {searchQuery}
          />
          <button className="search__button">
        
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className = "search__icon"
              >
                <use xlinkHref={`${icons}#icon-search`} />
              </svg>
          
            </button>
          </form>
          <nav className = "user-nav">
            <div className ="user-nav__icon-box">
              <svg 
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               className ="user-nav__icon">

                <use xlinkHref={`${icons}#icon-bookmark`} />
              </svg>
              <span  className = "user-nav__notification">12</span>
            </div>
            <div className ="user-nav__icon-box">
              <svg 
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               className ="user-nav__icon">

                <use xlinkHref={`${icons}#icon-bubble2`} />
              </svg>
              <span className = "user-nav__notification">7</span>
            </div>
            <div className ="user-nav__icon-box">
              <svg 
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               className ="user-nav__icon">

                <use xlinkHref={`${icons}#icon-users`} />
              </svg>
            </div>
            <div className ="user-nav__user">
              <img src={profilePicture} className = "user-nav__user-photo" alt ="profile picture"/>   
              
            </div>
            <div className = "logout_btn">
              <a onClick={logoutUser} href="#">
                <span>Logout</span>
              </a>
            </div>
          
            




          </nav>
            
            
        </header> */}

      {/* Side bar */}
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
                
                <span className="side-nav__text">Home</span>
                <i class="fas fa-desktop"></i>
              </div>
            </Link>
            </li>
            
            <li className ="side-nav__item">
              <Link to="/profile/:name" className="side-nav__link"> 
              <div className ="user-nav__icon-box">
                <span className="side-nav__text">Profile</span>
                
                  <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-user`} />
                  </svg>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                
                <span className="side-nav__text">Donate Blood</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-add-user`} />
                  </svg>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/search" className="side-nav__link" component={Search}> 
                <div className ="user-nav__icon-box">
                  
                <span className="side-nav__text">Search for Blood</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-search`} />
                  </svg>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/donate-blood" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                 
                <span className="side-nav__text">Donor list</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-calendar`} />
                  </svg>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
                  
                <span className="side-nav__text">Contact Info</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className ="side-nav__icon">

                    <use xlinkHref={`${icons}#icon-location2`} />
                  </svg>
              </div>
            </Link>
            </li>
            <li className ="side-nav__item">
              <Link to="/" className="side-nav__link"> 
                <div className ="user-nav__icon-box">
             
                <span className="side-nav__text">Settings</span>
               
                <i class="fas fa-sliders-h" ></i>
                
              </div>
            </Link>
            </li>
          </ul>
            <div class = "legal"> 
              &copy; {year.getFullYear()} by Readydonor. All rights reserved
            </div>
          </nav>
          <main className = "main-content">
           
              {dashboardContent}
          </main>
             
          </div>
        
      </div>
     
    );
  }
}


  


Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount, logoutUser })(
  Dashboard
);
