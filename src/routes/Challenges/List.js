import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import { getAll } from "../../store/actions/challenges";

const List = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { list } = useSelector((state) => state.challenges);

  useEffect(() => {
    dispatch(getAll());
  },[dispatch]);

  return (
    <div>
      hello {user.username}, there are {list.length} challenges
    </div>
  );
};

List.propTypes = {};

export default List;
