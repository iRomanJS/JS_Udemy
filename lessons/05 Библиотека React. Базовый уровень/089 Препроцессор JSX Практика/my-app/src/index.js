import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
        // this.nextYear = this.nextYear.bind(this); // we are binding nextYear directly to nextYear
        // this.nextYear = () => {         // we can add our event directly to our class this will works if we use () => {} 
        //     this.setState(state => ({
        //         years: ++state.years
        //     }))
        // }
    }
    nextYear = () => {        
        this.setState(state => ({
            years: ++state.years
        }))
    }

    // nextYear() {
    //     // this.state.years++
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }
    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years = {years}</h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}

const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Ivan" surname="SSwe" link="vk.com" />
            <WhoAmI name="Stepan" surname="Shepard" link="ss.com" />
        </>
    )
}
ReactDOM.render(<All />, document.getElementById('root')
);


