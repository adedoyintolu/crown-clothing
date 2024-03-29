import './App.css';
import Homepage from './pages/homepage/homepage.component'
import { Switch, Route, Redirect } from 'react-router-dom'
import ShopPage from '../src/pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from '../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import React from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ?
                (<Redirect to='/' />
                ) :
                (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
