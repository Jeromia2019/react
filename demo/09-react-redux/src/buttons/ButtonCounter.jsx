import React from 'react';
import propTypes from 'prop-types';

function ButtonCounter({ step, flow, onClick }) {
  return (
    <button onClick={onClick}>
    {flow === 'down' ? <>&#9660; {step}</> : <>&#9650; {step}</>}
    </button>
  )
}

ButtonCounter.propTypes = {
  step: propTypes.number.isRequired,
  flow: propTypes.oneOf(['up', 'down']),
  onClick: propTypes.func
};

ButtonCounter.defaultProps = {
  flow: 'up',
  step: 1,
  onClick: () => { } // NOOP
};

export default ButtonCounter;
