import React, {Component} from 'react';
import UserProfile from './UserProfile';
import ProfileSettings from './ProfileSettings';

export default class ProfilePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-panel">
                <UserProfile />
                <ProfileSettings socket={this.props.socket}/>
            </div>
        );
    }
}
