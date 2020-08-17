import React, {Component} from 'react'
import Sidebar from  '../sidebar'

class DiagnosisResult extends Component {
  
    render() {
        // const results = this.props.data.map(result => {
        //     const Accuracy1 = result[0].Issue.Accuracy;
        //     const result1 = result[0].Issue.Profname;
            
        // })
    
        return(
            <div className="result-container">
                <Sidebar className="sidebar_result" />
                <div className="result__page">
                    <h1 className="result-page-title">RESULT</h1>
                    <div className="main_result">
                    <div className="result__table">
                        <table className="table_content">
                            <thead className="table_header">
                                <td>Symptoms</td>
                                <td className="entered_symptom">headache</td>
                            </thead>
                            <tr className="result_items">
                                <td>Accuracy</td>
                                <td className="entered_symptom">Diagnosis</td>
                            </tr>
                            <tr className="result_items">
                                 <td>54</td> 
                                <td className="entered_symptom">Cephalgia</td>
                            </tr>
                            <tr className="result_items"> 
                                <td>67%</td>
                                <td className="entered_symptom">stomach</td>
                            </tr>
                            <tr className="result_items">
                                <td>69%</td>
                                <td className="entered_symptom">hunger</td>
                            </tr>
                        </table>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default DiagnosisResult;