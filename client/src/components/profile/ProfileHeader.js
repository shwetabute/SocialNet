import React, { Component } from 'react';
import isEmpty from '../../validation/is-empty';
import { Link } from 'react-router-dom';

class ProfileHeader extends Component {
  render() {
    const { profile } = this.props;
  console.log("This is from profile header ",JSON.stringify(profile))
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-info text-white mb-3 profileCard">
            <div className="row">
              <div className="col-4 col-md-3 m-auto">
                <img
                  className="rounded-circle"
                  src= {profile.profilePic ? profile.profilePic : profile.user.avatar}
                  height="150px" width="150px"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="display-4 text-center "style={{textTransform: "capitalize"}}>{profile.user.name}</h1>
              <p className="lead text-center" style={{textTransform: "capitalize"}}>
                {profile.gender}{' '}
             
              </p>
              <i class="fas fa-map-marker-alt" style={{color:"white"}}></i> {isEmpty(profile.location) ? null : <p style={{textTransform: "capitalize"}}>{profile.location}</p>}
              
              <div className="col-4 col-md-3 m-auto">
                <div className="float-left" >
                  
                  <p> <h4>{ profile.followers.length }</h4> Followers </p>
                </div>
                <div className="float-right" >
                  
                  <p> <h4>{ profile.following.length }</h4> Following </p>
                </div>
              </div>

              {/* <Link to={`/savedpost`} className="btn btn-info ">
                <i class="far fa-eye" style={{color:"white"}}></i> View Saved Posts
              </Link> */}
              

              {/* <p>
                {isEmpty(profile.website) ? null : (
                  <a
                    className="text-white p-2"
                    href={profile.website}
                    target="_blank"
                  >
                    <i className="fas fa-globe fa-2x" />
                  </a>
                )}

                              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileHeader;