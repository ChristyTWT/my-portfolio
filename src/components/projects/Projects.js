import * as Constants from '../../utilities/Constants'
import '../../styles/projects.scss'

const Projects = () => {
  return (
    <div className="container">
      <div className="container-projects content-margin">
        <div className="content-heading">
          <div className="text-heading">{Constants.PROJECTS_HEADING}</div>
          <div className="text-content">{Constants.PROJECTS_CONTENT}</div>
        </div>
        <div className="projects-content">
          <div className="projects-list">
            <div className="projects-item">1</div>
            <div className="projects-item">1</div>
            <div className="projects-item">1</div>
            <div className="projects-item">1</div>
            <div className="projects-item">1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
