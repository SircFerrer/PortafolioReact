import React, { Component } from "react";
import "../stylesheets/landingpage.scss"
import { Grid, Cell } from "react-mdl";
import photo from "../images/cris_memoji.jpg"
class LandingPage extends Component {
    render() {
        return (
            <div className="Landing" >
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={photo} alt="mimoji" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Front End Developer</h1>
                            <hr />
                            <p>HTML/CSS | SASS | Bootstrap | JavaScript | React | Agile | Scrum</p>
                            <div className="social-links">

                                <a href="https://www.linkedin.com/in/cristinaferrercarballo/" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://github.com/SircFerrer" target="_blank">
                                    <i class="fab fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://twitter.com/sircferrer" target="_blank">
                                    <i class="fab fa-twitter-square" aria-hidden="true"></i>
                                </a>

                            </div>

                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}
export default LandingPage;