import React, {
Component
} from 'react';
import {
  Button,
  View,
  Text
} from '@tarojs/components';
import JInput from 'jsrc/components/form/JInput/index';
import './index.scss';
import {
AtCheckbox
} from 'taro-ui';

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
      },
      hasReadCheckboxOption: [
        {
          value: '1',
          label: '',
      }
      ],
      hasReadCheckedList: ['1']
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

  hasReadHandleChange = (hasReadCheckedList) => {
    /*已读事件*/
    this.setState({
      hasReadCheckedList
    });
  }

  render() {
    const {
      form,
      hasReadCheckboxOption,
      hasReadCheckedList
    } = this.state;
    const {
      hasReadHandleChange
    } = this;
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
        <View className='login-protocol-wrap'>
          <AtCheckbox
            className='login-protocol-checkbox'
            options={hasReadCheckboxOption}
            selectedList={hasReadCheckedList}
            onChange={hasReadHandleChange}
          />
          <Text className='login-protocol-text'>我已阅读并同意《软件许可及服务条款》</Text>
        </View>
        <View className='login-other-wrap'>
          <View className='login-other-line'></View>
          <View className='login-other-text'>其他方式登录</View>
        </View>
        <View className='login-other-btns'>
          <View className='iconfont iconweixin'></View>
        </View>
        <View className='login-btm-wrap'>
          <View className='login-btm-text'>忘记密码</View>
          <View className='login-btm-line'></View>
          <View className='login-btm-text'>客服电话：400-898-6666</View>
        </View>
      </View>
    );
  }
}

export default Login;

