import PropTypes from 'prop-types';
import style from './welcome.module.css'

export const Welcome = (props) => {
  const { firstname, lastname, num } = props;
  const res = num + 2;
  return (
    //Fragment <></>
    <>
      <h1>{res} Bonjour 
          <span className={style.name /* + ' ' + style.num */}>
               {firstname} {lastname}
          </span>
      </h1>
    </>
  );
};

// la fonction lamba fait d'office un return implicite :
export const Goodbye = ({ firstname, lastname, age }) => (
  <p className={style.goodbye}>
    Goodbye {firstname} {lastname} {age}
  </p>
);

Goodbye.defaultProps = {
  age: 13,
};

Welcome.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
  num: PropTypes.number,
};

export default Welcome;
