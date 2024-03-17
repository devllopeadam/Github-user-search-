/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import "./userinfo.scss";

import Octocat from "../../assets/images/octocat.png";
import LocationIcon from "../../assets/images/icon-location.svg";
import WebsiteIcon from "../../assets/images/icon-website.svg";
import TwitterIcon from "../../assets/images/icon-twitter.svg";
import CompanyIcon from "../../assets/images/icon-company.svg";
import { UserContext } from "../../context/UserContext";

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);

  const month = new Date(user.created_at).toLocaleString("default", {
    month: "long",
  });
  const day = new Date(user.created_at).getDate();
  const year = new Date(user.created_at).getFullYear();

  return (
    <div className="user-info">
      <div className="avatar-lg">
        <img src={user.avatar_url} />
      </div>
      <div className="main-info">
        <div className="profile-info">
          <img src={Octocat} />
          <div className="profile-info-user">
            <div className="name-userName">
              <h1>{user.name}</h1>
              <p>{`@${user.login}`}</p>
            </div>
            <div className="joined-date">{`Joined ${day} ${month.slice(
              0,
              3
            )} ${year}`}</div>
          </div>
        </div>
        <div className="bio">
          {user.bio ? user.bio : "This profile has no bio"}
        </div>
        <div className="repos-connections">
          <div className="connection">
            <span>Repos</span>
            <h2>{user.public_repos}</h2>
          </div>
          <div className="connection">
            <span>Followers</span>
            <h2>{user.followers}</h2>
          </div>
          <div className="connection">
            <span>Following</span>
            <h2>{user.following}</h2>
          </div>
        </div>
        <div className="status-socials">
          <div className="col">
            <div className={`row ${user.location ? "" : "not-available"}`}>
              <img src={LocationIcon} />
              <p>{user.location ? user.location : "Not Available"}</p>
            </div>

            <div className={`row ${user.blog ? "" : "not-available"}`}>
              <img src={WebsiteIcon} />
              <a href="#">{user.blog ? user.blog : `Not Available`}</a>
            </div>
          </div>
          <div className="col">
            <div
              className={`row ${user.twitter_username ? "" : "not-available"}`}>
              <img src={TwitterIcon} />
              <a href="#">
                {user.twitter_username
                  ? user.twitter_username
                  : `Not Available`}
              </a>
            </div>
            <div className={`row ${user.company ? "" : "not-available"}`}>
              <img src={CompanyIcon} />
              <a href="#">{user.company ? user.company : "Not Available"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
