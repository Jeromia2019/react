import React from 'react';
import propTypes from 'prop-types';
import ButtonCounter from '../buttons/ButtonCounter';

function CounterAction({step}) {
  return (
    <div>
        <ButtonCounter step={step} flow={'up'} />
        <ButtonCounter step={step} flow={'down'} />
    </div>
  )
}

CounterAction.propTypes = {
    step: propTypes.number,
  };
  
CounterAction.defaultProps = {
    step: 1,
  };

export default CounterAction