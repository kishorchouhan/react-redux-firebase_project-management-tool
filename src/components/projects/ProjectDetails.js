import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-">Project Title - {id}</span>
          <p>
            Hey gang, in this React, Redux and Firebase tutorial we'll create
            the template for our project details component. We'll also set up a
            route to load the component in.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Kishor</div>
          <div>20th July 2019, 09am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
