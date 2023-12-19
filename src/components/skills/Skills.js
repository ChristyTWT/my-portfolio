import ProgressBar from 'react-bootstrap/ProgressBar'
import * as Constants from '../../utilities/Constants'
import '../../styles/skills.scss'

const Skills = () => {

  return (
    <div className="container">
      <div className="container-skills content-margin">
        <div className="content-heading">
          <div className="text-heading">{Constants.SKILLS_HEADING}</div>
          <div className="text-content">{Constants.SKILLS_CONTENT}</div>
        </div>
        <div className="skills-content">
          <div className="skills-description content-2col-left">
            <div className="text-subheading">{Constants.SKILLS_A_HEADING}</div>
            <div className="text-content">{Constants.SKILLS_A_CONTENT}</div>
            <div className="text-subheading">{Constants.SKILLS_B_HEADING}</div>
            <div className="text-content">{Constants.SKILLS_B_CONTENT}</div>
            <div className="text-subheading">{Constants.SKILLS_C_HEADING}</div>
            <div className="text-content">{Constants.SKILLS_C_CONTENT}</div>
          </div>
          <div className="skills-list content-2col-right">
            <div className="skills-name-list">
              {Constants.SKILLS_LIST.map((item) => (
                <div className="skills-name-item">{item[0]}</div>
              ))}
            </div>
            <div className="skills-list-content">
              {Constants.SKILLS_LIST.map((item) => (
                <ProgressBar
                  variant="html"
                  now={item[1]}
                  label={`${item[1]}%`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Skills;