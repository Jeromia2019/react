
// la function lamba fait d'office un return implicite :
export const Goodbye = ({firstname, lastname}) => (<p>Goodbye {firstname} {lastname}</p>);
export const Welcome = (props) => {
            const {firstname, lastname} = props;
            return (
                <p>Bonjour {firstname} {lastname}</p>
            );
        };

export default Welcome;

