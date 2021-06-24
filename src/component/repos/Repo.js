import React from "react";
import { RepoItem } from "./RepoItem";
import PropTypes from "prop-types";

export const Repo = ({ repos }) => {
  return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};

Repo.propTypes = {
  repos: PropTypes.array.isRequired,
};
