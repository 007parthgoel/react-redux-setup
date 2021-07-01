import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { buttonClicked } from "./store/actions/dataAction";

const home = (props) => {
  return (
    <div>
      <button onClick={props.buttonClicked}>click</button>
      {'name'+props.data.loading}
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapActionToProps = {
  buttonClicked,
};

home.propTypes = {
  // classes: PropTypes.object.isRequired,
  // loginUser: PropTypes.func.isRequired,
  buttonClicked: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
  // UI: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(home);
