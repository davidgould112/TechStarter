import React from 'react';
import { BrowserRouter as Router, Link, Route, browserHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions.js';
import { fetchProjects } from '../actions/projectActions.js';
import { styles } from '../styles';
import Header from '../components/header.jsx';
import Container from '../components/container.jsx';
import ProjectPage from './projectPage.jsx';
import Footer from '../components/footer.jsx';
import Signup from '../components/signup.jsx';
import Login from '../components/login.jsx';
import ProjectSubmission from './projectSubmission.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('App:', this.props);
    this.props.fetchUser();
    this.props.fetchProjects({ params: { origin: 'home page' } }); 
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div className='container'>
          <Header user={this.props.user}/>
          <Route exact path='/' render={props =>
            <Container {...props} projects={this.props.projects}/>
          }/>
          <Route path='/create' component={props =>
            <ProjectSubmission {...props} user={this.props.user.fetchedUser}/>
          }/>
          <Route path='/project/:id' component={props =>
            <ProjectPage {...props} user={this.props.user.fetchedUser}/>
          }/>
          <Route path='/auth/login' component={props =>
            <div className='col align-self-center login_container'>
              <Login {...props}/>
            </div>
          }/>
          <Route path='/auth/signup' component={Signup} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ user: state.user, projects: state.projects });

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchProjects: (option) => dispatch(fetchProjects(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
