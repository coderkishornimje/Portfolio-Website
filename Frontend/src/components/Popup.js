import React, { Component } from "react";
import './Popup.css';
import Data from "../Data/Data";

export default class PopUp extends Component {


  handleClick = () => {
    this.props.toggle();
  };
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };
  render() {

    return (
      
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <Data/>
        </div>
      </div>
    );
  }
}
