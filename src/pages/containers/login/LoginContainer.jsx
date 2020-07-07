import Login  from 'jsrc/pages/views/login/index.jsx';
import React, {
  Component
} from 'react';
import {
connect
} from 'react-redux';

const props = state => ({
  userInfo: state
});

@connect(props)
class LoginContainer extends Component {
  render() {
    return <Login {...this.props} />;
  }
}
export default LoginContainer;
