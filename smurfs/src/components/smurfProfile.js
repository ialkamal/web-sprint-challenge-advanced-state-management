import React from "react";

function SmurfProfile({ smurf }) {
  return (
    <div>
      <p>
        <strong>Name: </strong>
        {smurf.name}
      </p>
      <p>
        <strong>Age: </strong>
        {smurf.age}
      </p>
      <p>
        <strong>Height: </strong>
        {smurf.height}
      </p>
    </div>
  );
}

export default SmurfProfile;
