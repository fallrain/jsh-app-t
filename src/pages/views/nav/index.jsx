import React, {
Component
} from 'react';
import {
  Navigator,
  View
} from '@tarojs/components';
import pages from '@/pages';

import './index.scss';

console.log(pages);

class Nav extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='index'>
        {
          pages.map((v, index) =>
              <View key={index}>
                <Navigator url={`/${v}`} className='nav-a'>{v}</Navigator>
              </View>
          )
        }
      </View>
    );
  }
}

export default Nav;

