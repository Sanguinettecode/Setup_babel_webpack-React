import React, {Component} from "react";
import FacebookLogo from '../../assets/facebook_logo.png'
import avatar_login from '../../assets/person1.png'
import './Header.css'
class Header extends Component {
  render (){
    return (
      <div className="header">
        <img src={FacebookLogo} className="logo" alt=""/> 
        <div className="perfil">
          <p>Meu perfil</p>
          <img src={avatar_login} className="avatar" alt=""/>
        </div>
      </div>
    )
  }
}

export default Header