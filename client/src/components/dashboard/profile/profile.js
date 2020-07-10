import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from  '../../common/Spinner';
import { getProfileByName } from '../../../actions/profileActions'
import Sidebar from '../sidebar'

class MyProfile extends Component {
  componentDidMount() {
    if (this.props.match.params.name) {
      this.props.getProfileByName(this.props.match.params.name);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

    render() {
      const { profile, loading } = this.props.profile;
      let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
          <Sidebar />
          );
    }
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}


MyProfile.propTypes = {
  getProfileByName: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByName })(MyProfile);

