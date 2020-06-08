import React from 'react'
import styles from './MenuWrapper.module.css'
import ItemMenu, {ItemMenuSkeleton} from '../ItemMenu/ItemMenu'

const MenuWrapper = (props) => {
    return(
        <div className={styles.MenuWrapper}> 
            <div className={styles.test}></div>

            {props.menu ?   //if menu has loaded

                props.menu.map( (item, index) => {  //show menu
                    return(
                        <ItemMenu 
                            key={item.id}
                            menu = {item}
                            orderHandler = {props.orderHandler}
                        />
                    )
                } )


                : Array(9).fill(1).map((_, i) => (  //else show skeletons
                    <ItemMenuSkeleton key={i} />
                ))

            }
            
        </div>
    )
}

export default MenuWrapper