import React from "react";
import PopUp from "./Popup";
import './Popup.css';
export default class Comment extends React.Component {
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
      <div>
        <div className="btn comment-btn-position" onClick={this.togglePop}>
          <img src="comment.png" alt="comment-img" id="comment-img" data-aos="zoom-in"/>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
