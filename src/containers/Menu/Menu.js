import React,{Component} from 'react'
import styles from './Menu.module.css'
import MenuWrapper from '../../components/MenuWrapper/MenuWrapper'
import Cart from '../../components/Cart/Cart'
import {NavLink} from 'react-router-dom'
import fetchPizza from '../../api/fetchPizza'
import PopupDone from '../../components/Popup/PopupDone'




class Menu extends Component {

    state = {
        menu: null,
        cart: 0,   //pizza price
        orderedItems: 0,  //pizza amount
        delivery: 1.2,
        isOrdered: false
    }

    async componentDidMount() {     //componentDidMount calls aster render of component.
        const menu = await fetchPizza();    //emulation server request (from src -> api -> fetchPizza.js)
        this.setState({menu});
    }

    orderHandler = (itemPizza) => {    //function of order pizza
        this.setState(state => ({
            cart: state.cart + itemPizza.price,
            orderedItems: state.orderedItems + 1
        }))       
    }

    ClearCartHandler = () => {  //function of clear cart
        this.setState({
            cart: 0,
            delivery: 1.2,
            orderedItems: 0
        })
    }

    showPopup = () => { //function of showing popup window (after order)
        this.setState({
            isOrdered: !this.state.isOrdered
        })
    }



    render(){
        const { menu } = this.state;
        return(
                <div className={styles.Menu}>

                        {this.state.isOrdered === true? <PopupDone /> : null}
                        
                        <h1>Menu</h1>

                        <NavLink to='../' className={styles.MenuLink}>Back to main</NavLink>

                        <Cart 
                            cart={this.state.cart}
                            delivery={this.state.delivery}
                            total={this.state.total}
                            orderedItems={this.state.orderedItems}
                            ClearCart={this.ClearCartHandler}
                            showPopup={this.showPopup} 
                        />

                        
                         <MenuWrapper 
                            menu={menu}
                            orderHandler = {this.orderHandler}
                        />
                         

                </div>
        )
    }
}

export default Menu