import React, {Component} from 'react';
import Profile from '../images/profile.svg';
import ProfileStatus from './UserStatus';

export default class UserProfile extends Component {

    clickHandler = () => {
        console.log('click');
        $('.user-status').toggle('active');
    };

    blurHandler = () => {
        console.log('blr');
    };

    render() {
        return (
            <div className="user-profile" id="user-menu" onClick={this.clickHandler.bind(this)}
                 onBlur={this.blurHandler}>
                <img src={Profile} alt="profile"/>
                <ProfileStatus/>
            </div>
        );
    }
}
