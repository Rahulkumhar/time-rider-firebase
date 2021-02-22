import React, { Component, Suspense, useEffect } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './routers/privateRoute';
import './scss/style.scss';
import { connect, useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { setToken } from './actions/userAuth.action';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));


const App =(props)=> {
  
let dispatch = useDispatch()

  const {token} = useSelector((states) => ({
    token: states.users.token,
  }));

useEffect(() => {
  if(token ==null){
    let Token = localStorage.getItem("token")
    dispatch(setToken(Token))
  }
},[])

console.log(token,'token');

  if (token) {

    return (
      <HashRouter>
      <ToastContainer />
          <Suspense fallback={loading}>
            <Switch>
             
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              <Route render={() => (<Redirect to='/dashboard' />)} />
            </Switch>
          </Suspense>
      </HashRouter>
    );
  }
  else {
    return (
        <HashRouter>

          <ToastContainer />
          <Suspense fallback={loading}>
          <Switch>
          <Route exact path="/login" name="Login Page" component={(props) => <Login {...props} />} />
          <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
            <Route render={() => (<Redirect to='/login' />)} />
              
          </Switch>
          </Suspense>
        </HashRouter>
    );
  }
}


export default App;