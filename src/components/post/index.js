import React, {Component} from "react";
import Comment from '../post/comments'
import person2 from '../../assets/person2.png'
import './post.css'

class Post extends Component {
  render (){
    return (
      <div className="post">
        <div className="profile">
          <img src={this.props.dataPost.author.avatar} alt=""/>
          <div className="meta">
            <strong>{this.props.dataPost.author.name}</strong><br/>
            <small>{this.props.dataPost.date}</small>
          </div>
        </div>
        <div className="content">
          <p>{this.props.dataPost.content}</p>
        </div>
        <hr/>
        {this.props.dataPost.comments.map(comment => <Comment key={comment.id} dataComment={comment} />)}
      </div>
    )
  }
}

export default Post