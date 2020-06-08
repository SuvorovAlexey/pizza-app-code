import React from 'react'
import styles from './ItemMenu.module.css'

const ItemMenu = (props) => {

    const cls = [styles.ItemMenu]

    if (props.menu.spicy === true) {
        cls.push(styles.spicy)
    }

    return(
        <div className={cls.join(' ')}> 
            {props.menu.image && <img className={styles.image} src={props.menu.image} />}
            <p>{props.menu.name}</p>
            <p>price: {props.menu.price} $</p>
            <button onClick={ () => {props.orderHandler(props.menu)} }>Order</button>
        </div>
    )
    
}

export const ItemMenuSkeleton = () => {
    return(
        <div className={styles.ItemMenu}> 
            <div className={styles.skeletonImg}>  </div>
            <div className={styles.skeletonDiv}> </div>
            <div className={styles.skeletonDiv}>  </div>
            <button disabled className={styles.skeletonButton}>Order</button>
        </div>
    )
}
export default ItemMenu