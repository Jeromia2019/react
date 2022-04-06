import style from './person.module.css'
import classNames from 'classnames';

const Person = ({name, hobby}) => {
    // condition de prise en compte de l'élément css
    const styleName = classNames({
        [style.colorName]: name !== Person.defaultProps.name
    })

  return (
    // && : condition d'affichage si {hobby} est renseigné dans App.js
    <>
      <h3>Bonjour <span className={styleName}>{name}</span></h3>
      {hobby && (
      <p>Votre loisir est {hobby}</p>
      )}
    </>
  );
};

Person.defaultProps = {
    name: "Inconnu",
}

export default Person;
