import React from 'react';
import propTypes from 'prop-types';
import ButtonCounter from '../buttons/ButtonCounter';

function Counter({step}) {
  return (
    <div>
        <ButtonCounter step={step} flow={'up'} />
        <ButtonCounter step={step} flow={'down'} />
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