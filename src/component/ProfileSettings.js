import React, {Component} from 'react';
import SearchPanel from './SearchPanel';

export default class ProfileSettings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-options">
                <div>

                </div>
                <SearchPanel socket={this.props.socket}/>
            </div>
        );
    }
}
