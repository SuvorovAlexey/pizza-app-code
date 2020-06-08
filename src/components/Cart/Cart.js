import React from 'react'
import './Cart.modules.css'

const Cart = (props) => {

    const discount = ['discount']

    if(props.cart > 10){
        discount.push('greenlabel')
    }
    else{
        discount.push('redlabel')
    }
    

    return(
        <div className='Cart'>
            Your order: 
             <p>pizza amount: {props.orderedItems}</p> 
             <p>pizza cost: {(props.cart.toFixed(1))} $</p>
             <p>delivery: {props.cart > 10 ? 0 : props.delivery} $</p>
             <p>total:  { props.cart === 0 ? 0 : (props.cart > 10 ? (props.cart).toFixed(1) : (props.cart + props.delivery).toFixed(1))} $</p>
            <p className={discount.join(' ')}>Free delivery on pizza orders > 10 $</p>
            <button onClick={ ()=> props.ClearCart() }>Clear cart</button>
            {props.cart === 0 ? null : <button onClick={()=> props.showPopup()}>Make order</button>}
            
        </div>
    )
}

export default Cart