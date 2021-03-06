import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import Profile from './Profile';

class ProfileHeader extends Component {
  render() {
    
    const { profile } = this.props;
    // console.log(profile);

    if (profile && (profile.gender === "Prefer Not to Say" || profile.gender === "Custom")){
      profile.gender = " ";
    }
  
    return (<div className="row">
    <div className="col-md-12">
      <div className="card card-body bg-info text-white mb-3 profileCard">
        <div className="row">
          <div className="col-6 offset-3">
        {profile &&profile.user &&( <img
              className="rounded-circle profilePic "
              src= {profile?.profilePic? profile.profilePic : profile.user.avatar}
              height="150px" width="150px"
              alt=""
            />)}
          </div>
        </div>
          <div className="col-6 offset-3">
            {profile && profile.user && (<p className="profileName" style={{ textTransform: "capitalize"}}>{profile.user.name}</p>)}
            <p className="lead text-center" style={{textTransform: "capitalize"}}>
              {profile && profile.gender}{' '}
          
            </p>
              <p style={{textTransform: "capitalize"}}>{(profile && profile.location)}</p>
         

          </div>
  
              <div className="col-4 col-md-3 m-auto " >
                <div className="float-left" >
                  
                  <p> <h4>{ profile && profile.followers?.length }</h4> Followers </p>
                </div>
                <div className="float-right" >
                  
                  <p> <h4>{ profile && profile.following?.length }</h4> Following </p>
                </div>
              </div>
        </div>
      </div>
    </div>
    );
  }
}

export default ProfileHeader;