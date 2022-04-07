import { Component } from 'react';

class MultiNbClass extends Component {
    static defaultProps = {
        multiplier: 2
    }

    constructor(props){
        super(props);
        this.state = {
            nb: 2
        }
        this.handleMulti = this.handleMulti.bind(this);
    }

    // ↓ Si PAS ↑ "this.handleMulti = this.handleMulti.bind(this);"
    // handleMulti = () => {
    handleMulti(){
        this.setState((state, props) => ({
            nb: state.nb * props.multiplier
        }))
    }

    reset = () => {
        this.setState((state) => ({
            nb: state.nb = 2
        }))
    }

    render(){
        const {multiplier} = this.props;
        const  {nb} = this.state;
        return (
            <>
            <h3>Multpiplication par {multiplier} (class)</h3>
            <p>Valeur : {nb}</p>
            <button onClick={this.handleMulti}>x {multiplier}</button><br />
            <button onClick={this.reset}>reset</button>
            </>
        )
    }
}

export default MultiNbClass;