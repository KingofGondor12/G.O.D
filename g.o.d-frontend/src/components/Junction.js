import React, {Component} from 'react'
import EditUser from './EditUser'
import CreateUser from './CreateUser'
import {MuiThemeProvider, RaisedButton} from 'material-ui';
import {Route, withRouter, Switch} from 'react-router-dom'

require('dotenv').config()

class Junction extends Component {

  state = {
    manage: false,
    newUser: false,
    newProject: false,
    data: null
  }

  handleManage = (event) => {
    this.props.history.push('/edit')
  }

  handleNewUser = (event) => {
    this.props.history.push('/new')
  }

  render() {
    return (

      <div>
        <MuiThemeProvider>
          <div>
            <RaisedButton className="button" label="Edit User" primary={true}  onClick={(event) => this.handleEditUser(event)}/>

            <RaisedButton className="button" label="Create New User" primary={true} onClick={(event) => this.handleNewUser(event)}/>
          </div>
        </MuiThemeProvider>

        <Switch>
          <Route path="/edit" component={EditUser} />
          <Route path="/new" component={CreateUser} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Junction)
