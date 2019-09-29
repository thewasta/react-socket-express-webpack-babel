import React, {Component} from 'react';
import {render} from 'react-dom';
import io from 'socket.io-client';
import './style/style.css';

window.$ = window.jQuery = require('jquery');

import ProfilePanel from './component/ProfilePanel';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: io()
        };
    }

    render() {
        return (
            <div className='left-panel'>
                <ProfilePanel socket={this.state.socket}/>
            </div>
        );
    }
}

render(<Index/>, document.getElementById('app'));
