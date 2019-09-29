import React, {Component} from 'react';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    sendMessage = () => {
        const message = $('input[name=message]').val();
        this.props.socket.emit('message', message);
    };

    render() {
        return (
            <div className="search-input">
                <input type="text" name="message" autoComplete="off" onKeyUp={this.sendMessage} required/>
                <label className="label-name">
                    <span className="content-name">Buscar usuario</span>
                </label>
            </div>
        );
    }
}