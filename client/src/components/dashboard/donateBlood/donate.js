import React, { Component } from 'react'
import axios from 'axios'
import Dashboard from '../Dashboard'
import SelectListGroup from '../../common/SelectListGroup'


class Donate extends Component {
  state = {
    symptoms: [],
    gender: [],
    year_of_birth: ""
  }
  componentDidMount() {
    axios({
      "method":"GET",
      "url":"https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"priaid-symptom-checker-v1.p.rapidapi.com",
      "x-rapidapi-key":"6290a4e377msh0f36ac86ea0ed07p1409dfjsnd3a7f974ecff",
      "useQueryString":true
      },"params":{
      "format":"json",
      "language":"en-gb"
      }
      })
      .then((response)=> response.json())
      .then((data) => {
        this.setState({ symptoms: data})
        console.log(this.state.symptoms)
      })
      .catch((error)=>{
        console.log(error)
      })

  }
  render() {
    const getSymptoms = () => {
       this.state.symptoms.map((option) =>{
      <option key={option[0]}
       value={option[1]}
      >
       {option[1]}
      </option>
   } )
   }
    
      return(
       <React.Fragment>
          <Dashboard />
          <div>
            <h1>Donate Blood</h1>
            {}
          </div>
        </React.Fragment>
      );
  }
}

export default Donate;