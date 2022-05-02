import React from 'react';
import propTypes from 'prop-types';
import ButtonCounter from '../buttons/ButtonCounter';
import { counterIncrement, counterDecrement } from '../../store/actions/CounterAction';
import { useDispatch } from 'react-redux';

function Counter({step}) {

const dispatch = useDispatch();

const handleIncrement = () => {
   const action = counterIncrement(step);
   dispatch(action)
  }
  
  const handleDecrement = () => {
  const action = counterDecrement(step);
  dispatch(action)

}

  return (
    <div>
        <ButtonCounter step={step} flow='up' onClick={handleIncrement}/>
        <ButtonCounter step={step} flow='down' onClick={handleDecrement} />
    </div>
  )
}

Counter.propTypes = {
    step: propTypes.number,
  };
  
Counter.defaultProps = {
    step: 1,
  };

export default Counter