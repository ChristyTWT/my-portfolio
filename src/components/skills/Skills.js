import ProgressBar from 'react-bootstrap/ProgressBar'
import { SKILLS_LIST } from '../../utilities/Constants'
import '../../styles/skills.scss'

const Skills = () => {

  return (
    <div className="container">
      <div className="container-skills content-margin">
        <div className="content-heading">
          <div className="text-heading">My Skills</div>
          <div className="text-content">
            I Love to Craft Beautiful and Scaleable Web Product
          </div>
        </div>
        <div className="skills-content">
          <div className="skills-description content-2col-left">
            <div className="text-subheading">Design + Development</div>
            <div className="text-content">
              Clean, odern design, obtimized for performance, search engine and
              converting user to customers.
            </div>
            <div className="text-subheading">Technology</div>
            <div className="text-content">
              Combined all the latest technology to a progressive website.
            </div>
            <div className="text-subheading">Always Responsive</div>
            <div className="text-content">
              A responsive design makes your website accessible to all user,
              regardless to their device.
            </div>
          </div>
          <div className="skills-list content-2col-right">
            <div className="skills-name-list">
              {SKILLS_LIST.map((item) => (
                <div className="skills-name-item">{item[0]}</div>
              ))}
            </div>
            <div className="skills-list-content">
              {SKILLS_LIST.map((item) => (
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