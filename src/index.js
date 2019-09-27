import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };

    }

    componentDidMount() {
        this.socket = io('http://localhost:4000');
    }

    setClass = () => {
        return {
            color: this.state.clicked ? 'gray' : 'red'
        };
    };
    onChange = () => {

        console.log('click', this.state.clicked);
        this.setState({clicked: !this.state.clicked});
    };

    render() {
        return (
            <div>
                <h1 style={this.setClass()}>Hola</h1>
                <input onChange={this.onChange} type="checkbox"/>
            </div>
        );
    }
}

ReactDOM.render(<Index/>, document.getElementById('app'));
