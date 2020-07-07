import Login  from '@/pages/views/login/index.jsx';

import {
connect
} from 'react-redux';

const props = state => ({
  userInfo: state
});

export default connect(
  props
)(Login);
