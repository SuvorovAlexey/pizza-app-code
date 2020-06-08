import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './StartPage.modules.css'

class StartPage extends Component {   //I make this component as class component because in future this component will be more dificult and maybe it will need state
    render() {
        return(
            
            <div className='StartPage'>
                <h1>Welcome to Tasty Pizza!</h1>
                <p>Please, click on the link bellow to go to the menu.</p>
                <NavLink to='/menu'>Go to menu!</NavLink>
            </div>
            
        )
    }
}

export default StartPage