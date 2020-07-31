import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar'
import SelectListGroup from '../../common/SelectListGroup';
import TextFieldGroup from '../../common/TextFieldGroup';
import { getDiagnosis } from  '../../../actions/donationActions'

 class DonateBlood extends Component {
  constructor(props) {
    super(props);
    this.state = {
    symptomName: '',
    gender: '',
    year_of_birth: '',
    loading: false,
    latitude: '',
    longitude:'',
    searchText: '',
    errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }


  onSubmit(e) {
    e.preventDefault();

    const diagnosisParameters = {
      symptomName: this.state.symptomName,
      gender: this.state.gender,
      year_of_birth: this.state.year_of_birth,
     
    };

    this.props.getDiagnosis(diagnosisParameters, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    const { errors } = this.state;
    const gender = [
      {label: '* Gender', value: 0},
      {label: 'Male', value : 'Male'},
      {label : 'Female', value : 'Female'}
    ];
   
    return(
      
      
      <div>
        <Sidebar />
        <div className="donate-form-wrapper">   
          <div className="donation-talk">
            <h1 className="donation-talk-title">DONATE BLOOD</h1>
            <p className="donation-talk-subtitle">Is has been Scientifically proven that regular blood donationimproves the immune system and prevent disease occurence. Doctors advise</p> 
            
            <p className="donation-talk-subtitle">to donate Blood atleast Four times in a year. To crown it all, there's nothing more glorious than saving lives.</p>
            <p className="donation-talk-subtitle"></p>
            <p className="donation-talk-subtitle-2">Save a life by Donating Today.</p>
            <h2 className ="donation-talk-subtitle-3">Check your health status by using our health status checker below</h2>
           </div>
           <form onSubmit={this.onSubmit} encType = "multipart/form-data" className = "donate-form">
             
                <div>
                <TextFieldGroup
                  placeholder="Symptoms"
                  name="symptomName"
                  value={this.state.symptomName}
                  onChange={this.onChange}
                  error={errors.symptomName}
                  info="Select any Symptoms to check your health status."
                  
                />
                </div> 
                <div >
            
                <SelectListGroup
                  placeholder="Gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.onChange}
                  options={gender}
                  error={errors.gender}
                  info="Please select Gender"
                  
                />
                </div>
                <div >
                <TextFieldGroup
                  placeholder="year of birth"
                  name="year_of_birth"
                  value={this.state.year_of_birth}
                  onChange={this.onChange}
                  error={errors.year_of_birth}
                  info="Age"
                  
                />
              </div>
              <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
        
        
    </div>
    </div>

    );
  }
}


getDiagnosis.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  symptomName: state.symptomName,
  gender: state.gender,
  year_of_birth: state.year_of_birth,
  errors: state.errors
});

export default connect(mapStateToProps, { getDiagnosis })(
  withRouter(DonateBlood)
);