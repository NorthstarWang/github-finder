import React, { useEffect, useContext } from "react";
import { Spinner } from "../layout/Spinner";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Repo } from "../repos/Repo";
import githubContext from "../../context/github/GithubContext";

const User = ({ match }) => {
  const GithubContext = useContext(githubContext);

  const { getUser, loading, user, repos, getUserRepos } = GithubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: "130px" }}
          />
          <h1>{name}</h1>
          {location && <p>Location: {location}</p>}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-white'>Pulic Repos: {public_repos}</div>
        <div className='badge badge-dark'>Gists: {public_gists}</div>
      </div>
      <Repo repos={repos} />
    </Fragment>
  );
};

export default User;
