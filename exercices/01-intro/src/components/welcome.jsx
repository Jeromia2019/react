import style from './welcome.module.css';
import PropTypes from 'prop-types';

const Welcome = (props) => {
  const { name, age } = props;
  return (
    <>
      <h1>Bonjour</h1>
      <h2 className={style.name}>{name}</h2>
      <p className={style.age}>age : {age}</p>
    </>
  );
};

Welcome.defaultProps = {}

Welcome.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

export default Welcome;
