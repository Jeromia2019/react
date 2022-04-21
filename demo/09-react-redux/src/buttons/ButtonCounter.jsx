import React from 'react';
import propTypes from 'prop-types';

function ButtonCounter({ step, flow }) {
  return (
    <button>
    {flow === 'down' ? <>&#9660; {step}</> : <>&#9650; {step}</>}
    </button>
  )
}

ButtonCounter.propTypes = {
  step: propTypes.number.isRequired,
  flow: propTypes.oneOf(['up', 'down']),
};

ButtonCounter.defaultProps = {
  flow: 'up',
  step: 1,
};

export default ButtonCounter;
