import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  View
} from '@tarojs/components';
import './index.scss';

class JInput extends React.Component {
  constructor(props) {
    super(props);
    const {
      name,
      value
    }=this.props;
    this.state = {
      name,
      value
    };
  }

  valChange = ({target}) => {
    /*值改变方法，组件受控方法*/
    const {
      handChange
    }=this.props;
    this.setState({
      [target.name]: target.value
    });
    // 输入框额外的change事件
    handChange && (handChange({
      name:target.name,
      value:target.value
    }));
  };

  render() {
    const {
      name,
      value
    } = this.state;
    const {
      valChange
    } = this;
    return (
      <View>
        <Input
          className='jInput'
          type='text'
          {...this.props}
          name={name}
          value={value}
          onChange={valChange}
        />
      </View>
    );
  }
}

JInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  handChange: PropTypes.func
};

export default JInput;
