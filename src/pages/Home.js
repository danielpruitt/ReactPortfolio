import React from "react";
import Container from "../components/Grid/Container";
import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Parallax from "../components/Parallax/Parallax";
import RevealCard from "../components/RevealCard/RevealCard";
import EmailForm from "..//components/EmailForm/EmailForm";
import Skills from "../components/Skills/Skills";
import "./Home.css"


const Home = () => {
    return (
        <div>
            <Navbar />
            {/* first parallax */}
            <div>
                <Parallax image={require("../images/mountains3.jpg")} />
            </div>

            {/* About me section */}
            <div className="section">
                <Container>
                    <Row>
                        <h4 className="custFont center light-blue-text text-darken-4 scrollspy" id="aboutMe">About Me</h4>
                        <Col size="s4">
                            <div className="hide-on-small-only">
                                <img src={require("../images/headshot.JPG")} alt="Daniel Pruitt" className="circle valign-wrapper responsive-img hoverable" />
                                <div className="left">
                                    <a href="https://www.linkedin.com/in/daniel-pruitt/" target="_blank" rel="noreferrer noopener"> <i className="fab fa-linkedin fa-7x"></i></a>
                                </div>

                                <div className="right">
                                    <a href="https://github.com/danielpruitt/" target="_blank" rel="noreferrer noopener"><i className="fab fa-github fa-7x"></i></a>
                                </div>
                            </div>
                        </Col>

                        <Col size="s12 m8">
                            <p className="custFont center light-blue-text text-darken-4">I'm full stack web developer and perpetual learner. I originally recieved a Bachelor Degree of Arts in Foreign Language and I have considered myself adept at learning languages, whether it is spoken or computer language. The track to be a Spanish teacher was halted when I started building websites and had the desire to learn to code. Since then I have been teaching myself code prior to attending class and receiveing a certificate from the Georgia Institute of Technology. When at Georgia Tech I learned the basic technologies, HTML, CSS, Javascript, and other more powerful technologies. Such technologies include the jQuery, Handlebars, mySQL and Sequelize, MongoDB, Express, React, and Node. Teamwork and collaboration have been a consistent and necessary action to execute the goal of any team I have been on. The world of coding and web development has opened my mind to explore the extensive use of this technology to bring the ultimate experience to the user.</p>
                        </Col>

                    </Row>
                </Container>
            </div>

            {/* second parallax */}

            <div>
                <Parallax image={require("../images/mountains6.jpg")} />
            </div>

            {/* Projects Container */}
            <div>
                <Container>
                    <Row>
                        <h4 className="custFont center light-blue-text text-darken-4 scrollspy" id="portfolio">Projects</h4>

                        <Col size="s12 m4">
                            <RevealCard
                                image={require("../images/controller.jpg")}
                                title="Trial of Anima"
                                description="Trial of Anima is a turn based RPG built with React. This game demonstrates the manipulation of the DOM,use of React State, and CSS animations."
                                url="https://trialofanima.herokuapp.com/"
                                github="https://github.com/danielpruitt/TrialOfAnima"
                            />
                        </Col>

                        <Col size="s12 m4">
                            <RevealCard
                                image={require("../images/newspaper.jpg")}
                                title="NYT React"
                                description="This New York Times React page is a Full Stack MERN application. The web app utilizes the NYT Api to query the search term and a span of years to return articles to the user. Upon articles loading to the page, a user can save individual articles which will store the data in a Mongo Database. These saved articles can also be deleted."
                                url="https://immense-earth-26245.herokuapp.com/"
                                github="https://github.com/danielpruitt/react-nyt"
                            />
                        </Col>

                        <Col size="s12 m4">
                            <RevealCard
                                image={require("../images/beer.jpg")}
                                title="BrewScrape"
                                description="BrewScrape is a web scraper application where the user can pull in news articles from BrewBound. These articles are populated using Handlebars and the comments are stored in a Mongo Database. The comments are populated in the individual cards."
                                url="https://brewscrape.herokuapp.com/"
                                github="https://github.com/danielpruitt/BrewScrape"
                            />
                        </Col>

                        <Col size="s12 m4">
                            <RevealCard
                                image={require("../images/game_resize.jpg")}
                                title="React Click Game"
                                description="The React Click Game is a simple front end click game that shows the use of React as a frontend platform and the use of stateful components."
                                url="https://legendaryclicky.herokuapp.com/"
                                github="https://github.com/danielpruitt/clickygame"
                            />
                        </Col>

                        <Col size="s12 m4">
                            <RevealCard
                                image={require("../images/burger.jpg")}
                                title="Burger Paradise"
                                description="This specific burger creation app is a full stack app that demonstrates the use of Handlebars, Express, Node, and MySql. Burgers can be logged in an input field, which are then appended to a card with a button to 'Devour' the burger, a list of 'Devoured' burgers are then shown in the third and final card."
                                url="https://burgerparadise.herokuapp.com/"
                                github="https://github.com/danielpruitt/BurgerSequel"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Third Parallax */}
            <div>
                <Parallax image={require("../images/mountains7.jpg")} />
            </div>

            {/* skills container */}

            <Container>
                <Row>
                    <h4 className="custFont center light-blue-text text-darken-4 scrollspy" id="skills">Skills and Technologies</h4>
                    <Col size="s12 m4 l4">
                        <ul className="custFont center light-blue-text text-darken-4">
                            <h4>Front End</h4>
                            <li className="">HTML</li>
                            <li className="">CSS</li>
                            <li className="">Javascript</li>
                            <li className="">jQuery</li>
                            <li className="">Bootstrap</li>
                            <li className="">Materialize</li>
                            <li className="">Bulma</li>
                            <li className="">UIKit</li>
                            <li className="">Material UI</li>
                        </ul>
                    </Col>
                    <Col size="s12 m4 l4">
                        <ul className="custFont center light-blue-text text-darken-4">
                            <h4>Back End</h4>
                            <li className="">Mongo</li>
                            <li className="">Express</li>
                            <li className="">React</li>
                            <li className="">Node</li>
                            <li className="">JSX</li>
                            <li className="">Handlebars</li>
                            <li className="">mySql</li>
                            <li className="">Sequelize</li>
                            <li className="">Mongoose</li>
                        </ul>
                    </Col>
                    <Col size="s12 m4 l4">
                        <ul className="custFont center light-blue-text text-darken-4">
                            <h4>Miscelleanous</h4>
                            <li className="">Visual Studio Code</li>
                            <li className="">MVC</li>
                            <li className="">AJAX and API</li>
                            <li className="">JSON</li>
                            <li className="">mySql Workbench</li>
                            <li className="">Robo3T</li>
                            <li className="">Git</li>
                            <li className="">NPM and Yarn</li>
                            <li className="">Heroku</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Fourth Parallax */}
            <div>
                <Parallax image={require("../images/mountains4.jpg")} />
            </div>

            {/* formspree */}
            <div>
                <Container >
                    <Row>
                        <Col size="s12">
                            <EmailForm />
                        </Col>
                    </Row>
                </Container>

            </div>

            {/* fifth Parallax */}
            <div>
                <Parallax image={require("../images/mountains5.jpg")} />
            </div>

            {/* Footer */}

            <Footer />
        </div>

    )

};

export default Home;
