import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import SmurfProfile from "./smurfProfile";

function Smurf(props) {
  const { id } = useParams();
  const history = useHistory();
  const [smurf] = props.smurfs.filter((smurf) => Number(id) === smurf.id);

  return (
    <div>
      <button onClick={() => history.push("/")}>Home</button>
      <SmurfProfile smurf={smurf} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {})(Smurf);
