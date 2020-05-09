import React from "react"
import Thumbnail from './thumbnail.jsx';
import './stylesheets/app.scss';

function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
      link=""
      image=""
      project-title="Clarify"
      category=""
      />

      <Thumbnail
      link=""
      image=""
      title="Matchbox"
      category=""
      />

      <Thumbnail
      link=""
      image=""
      title="Amibot"
      category=""
      />
    </div>
  )
}

export default Projects;
