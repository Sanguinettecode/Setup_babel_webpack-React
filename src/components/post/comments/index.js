import React, {Component} from "react";
import person1 from '../../../assets/person1.png';
import './comment.css'

class Comment extends Component {
  render (){
    return (
      <div className="comment">
       
        <div className="profile">
          <img src={this.props.dataComment.author.avatar} alt=""/>
        </div>
        <div className="content-comment">
          <strong className="name"> {this.props.dataComment.author.name}</strong>
          {this.props.dataComment.content}
        </div>
      </div>
    )
  }
}

export default Comment