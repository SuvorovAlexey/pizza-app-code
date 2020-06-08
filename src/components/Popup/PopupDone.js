import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './PopupDone.module.css'
import pizzamaker from '../../data/img/icons/pizzamaker.png'

const PopupDone = () => {
    return(
        <div className={styles.PopupContent}>
            <div className={styles.PopupDone}>
                <p>Thank you for order!</p>
                <p>We started to cook for you.</p>
                <NavLink to='../'>to main</NavLink>
                <img src={pizzamaker}></img>
            </div>
        </div>
        
    )
}

export default PopupDone