import React, {
Component
} from 'react';
import {
  Button,
  View
} from '@tarojs/components';
import JInput from '@/components/form/JInput/index';
import './index.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // 登录表单
      form: {
        // 账号
        account: '',
        // 密码
        password: ''
      }
    };
  }

  componentDidMount() {
  }

  valChange = ({name, value}) => {
    /*值改变方法，组件受控方法*/
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  }

  render() {
    const {
      form
    } = this.state;
    return (
      <View className='login-main'>
        <View className='login-banner'>
        </View>
        <View className='login-banner-title'>巨商汇账号登陆</View>
        <View className='mt116'>
          <JInput
            name='account'
            value={form.account}
            placeholder='请输入登录账号'
            handChange={this.valChange}
          />
        </View>
        <View className='mt60'>
          <JInput
            name='password'
            value={form.password}
            placeholder='请输入登录密码'
            handChange={this.valChange}
          />
        </View>
        <View className='login-btns-wrap'>
          <Button
            className='login-primary-btn'
          >登录</Button>
          <Button
            className='login-default-btn mt40'
          >短信验证码登陆</Button>
        </View>
      </View>
    );
  }
}

export default Login;

