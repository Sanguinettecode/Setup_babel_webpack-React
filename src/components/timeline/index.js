import React, {Component} from "react";
import Post from '../post';
import './timeline.css'

class Timeline extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://localhost:8080/66c5420c7751799639070f98ff4aa9b7.png'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://localhost:8080/20b583875cdf8e44398c4f04856b4ddd.png'
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet atque porro quod autem. Adipisci nobis animi quisquam tempore velit iusto quo inventore sunt rem corporis. Delectus voluptas dolorem eius." 
          },
          {
            id: 2,
            author: {
              name: 'Julio Alcantara',
            avatar: 'http://localhost:8080/66c5420c7751799639070f98ff4aa9b7.png'
            },
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, consectetur."
          },
          {
            id: 3,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://localhost:8080/20b583875cdf8e44398c4f04856b4ddd.png'
            },
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, laboriosam hic debitis qui vitae neque consectetur distinctio delectus, saepe nihil, soluta iste eaque quam quod?" 
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Michel Duarte',
          avatar: 'http://localhost:8080/1a9f3bdea656cb9f38f3af7f486f2139.png'
        },
        date: '04 Jun 2019',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, asperiores.',
        comments: [
          { 
            id: 1,
            author: {
              name: 'Julia Fernandes',
              avatar: 'http://localhost:8080/622618477570dec4e01433ccdd9b898b.png'
            },
            content: "Lorem ipsum dolor sit amet." 
          }
        ],
      },
      {
        id: 3,
        author: {
          name: 'Julia Fernandes',
              avatar: 'http://localhost:8080/622618477570dec4e01433ccdd9b898b.png'
        },
        date: '04 Jun 2019',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione consequuntur aliquam assumenda quibusdam voluptas impedit et, sequi inventore!',
        comments: [
          
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://localhost:8080/20b583875cdf8e44398c4f04856b4ddd.png'
            },
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione consequuntur aliquam assumenda quibusdam voluptas impedit et, sequi inventore!"
          },
          { 
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://localhost:8080/20b583875cdf8e44398c4f04856b4ddd.png'
            },
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus?"
          }
        ],
      },
      {
        id: 4,
        author: {
          name: 'Michel Duarte',
          avatar: 'http://localhost:8080/1a9f3bdea656cb9f38f3af7f486f2139.png'
        },
        date: '04 Jun 2019',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, asperiores.',
        comments: [
          { 
            id: 1,
            author: {
              name: 'Julia Fernandes',
              avatar: 'http://localhost:8080/622618477570dec4e01433ccdd9b898b.png'
            },
            content: "Lorem ipsum dolor sit amet." 
          }
        ],
      },
    ]
  }
  render (){
    return (
    <div className="timeline">
      {this.state.posts.map(post => <Post key={post.id} dataPost={post} />)}
    </div>
  )
  }
}

export default Timeline