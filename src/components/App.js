import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { history } from '../config'
import Home from '../containers/Home'
import UserEdit from '../containers/UserEdit'
import CreateUser from '../containers/CreateUser'

const styles = {
  main: {
    height: '100%',
  },
}

class App extends Component {
  render() {
    const { classes } = this.props
    return (
      <Router history={history}>
        <main className={classes.main}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/user/:id" render={(props) => <UserEdit {...props} />} />
            <Route path="/user-new" render={(props) => <CreateUser {...props} />} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default withStyles(styles)(App)
