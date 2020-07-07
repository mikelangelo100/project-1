import React, { Component } from 'react';
import Rodal from 'rodal';
import DonateImage from '../../img/donate-02.svg'

// include styles
import 'rodal/lib/rodal.css';

export default class QuickActionDonate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {  
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.show.bind(this)} className="donate-button">
        <img src={DonateImage} className="donate-icon" />

          <h2 className="donate-icon-text">Donate</h2></button>

        <Rodal 
        visible={this.state.visible} 
        onClose={this.hide.bind(this)}
        width={500}
        height={800}
        animation="slideRight"
        // className="rodal-dialog"
       
        >
          <div>
            <h2>Donate Blood</h2>
           
          </div>
        </Rodal>
      </div>
    );
  }
}

// import React from "react";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

// export default class QuickActionDonate extends React.Component {
//   state = {
//     open: false
//   };

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {
//     const { open } = this.state;
//     return (
//       <div style={styles}>
//         <h2>react-responsive-modal</h2>
//         <button onClick={this.onOpenModal}>Open modal</button>
//         <Modal open={open} onClose={this.onCloseModal}>
//           <h2>Simple centered modal</h2>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
//             hendrerit risus, sed porttitor quam.
//           </p>
//         </Modal>
//       </div>
//     );
//   }
// }
