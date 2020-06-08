import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Menu from './containers/Menu/Menu'
import StartPage from './containers/StartPage/StartPage'


function App() {
  return (
      <Layout>
        <Switch>
          
          <Route path='/menu' component={Menu}></Route>
          <Route path='/' component={StartPage}></Route>
          
        </Switch>
      </Layout>
  );
}

export default App;
