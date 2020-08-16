import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner'

import { logoutUser } from '../../actions/authActions';
import { QuickAction } from './QuickActions';

import DonateBlood from './donateBlood/donate'
import icons from '../../sass/img/icons.svg';
import profilePicture from '../../sass/img/user.png';
import ProfileActions from './ProfileActions';
import Logo from '../../sass/img/logowhite.png';
import DashboardBackground from '../../img/background.svg'

import '../../css/dashboard/main.min.css';
import Sidebar from './sidebar';


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
                 <Link to={`/profile/${profile.handle}`} className="user-name">Hi {user.name}</Link>
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
       <Sidebar />
       {dashboardContent}  
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
