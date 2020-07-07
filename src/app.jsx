import React, {
 Component
} from 'react';
import {
 Provider
} from 'react-redux';

import configStore from './store';


// 全局引入一次即可
import 'taro-ui/dist/style/index.scss';
import './assets/font/iconfont.css';
import './app.scss';

const store = configStore();

class App extends Component {
  onLaunch(options){
    /* app 启动函数*/
    console.log(options);
  }

  componentDidMount () {
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
