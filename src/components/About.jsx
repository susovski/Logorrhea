import { Link } from "react-router-dom";

function About() {

  return (
    <div className="About">
      <div className="About-headline">About</div>
      <p className="About-description">
        <b>Project: </b> Final Certification Exam, Front-End Developer, Algebra University Zagreb
        <br />
        <b>Group:</b> 17.10. ZG-FE_DEV_H-03 22.
        <br />
        <b>Developed by:</b> Bojan Susovski
      </p>
      <br />
      <button className="Enter-button" type="submit">  <Link to="/">Back</Link> </button>
    </div>

  )
}

export default About;