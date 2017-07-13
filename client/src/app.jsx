import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, withRouter, browserHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header.jsx';
import Container from './components/container.jsx';
import Footer from './components/footer.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
import { styles } from './styles';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={browserHistory}>
        <div style={styles.layout}>
          <Header />
          <Route exact path='/' component={() =>
            <Container />}
          />
          <Route path='/signup' component={() => <Signup />} />
          <Route path='/login' component={() => <Login />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
