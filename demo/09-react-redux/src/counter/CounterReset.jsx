import React from 'react'
import ButtonReset from '../buttons/ButtonReset';
import { counterReset  } from '../store/actions/CounterAction';
import { useDispatch, useSelector } from 'react-redux';

function CounterReset() {
    
  const dispatch = useDispatch();

  const count = useSelector(s => s.counter.count)
  
  const handleReset = () => {
    const action = counterReset();
    dispatch(action)
  }

  return (
    <div>
        <ButtonReset onClick={handleReset} disabled={count === 0}/>
    </div>
  )
}

export default CounterReset