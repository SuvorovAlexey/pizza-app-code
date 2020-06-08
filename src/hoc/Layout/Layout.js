import React,{Component} from 'react'
import './Layout.modules.css'
import Menu from '../../containers/Menu/Menu'

class Layout extends Component { //this is higher order component. This component makes layout.
    render() {
        return(
            <div className='Layout'>

                <main>       {/*in main put all content*/}
                    {this.props.children}
                </main> 
            </div>
        )
    }
}

export default Layout