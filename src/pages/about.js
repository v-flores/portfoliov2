import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
import Img from 'gatsby-image';
import {graphql} from 'gatsby'

export const query = graphql`
query {
    file(relativePath: { eq: "images/about.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = (props) => {
    console.log(query)
    return (
        <Layout>
            <h2>Hello , my name is Victor</h2>

            <div className={aboutStyle.main}>

            <div className={aboutStyle.izquierda}>
                <div className={aboutStyle.imagen}> <Img className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} /></div>
                <div className={aboutStyle.texto}>

                <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>Chicago, IL</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>DePaul University</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>HTML, JS, CSS</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-language fa-sm"></i><p>English, Spanish</p></div>
                </div>

            </div>
            <div className={aboutStyle.derecha}>
            <p>
            I had been working in social media marketing and event promotion for over 5 years before beginning my coding journey centered around the MEAN stack in 2019. I am highly-motivated, result oriented, hard working, and self-taught. I'm a very experienced communicator and listener.
            </p><p>
            I also run a small event marketing company called <a href="https://www.obscureevents.com"
            target="_blank" rel="noopener noreferrer">Obscure Events</a> which throws monthly events in Chicago and Detroit. I also DJ as <a
            href="https://www.facebook.com/cinnamusic" target="_blank" rel="noopener noreferrer">Cinna</a>
</p><p>
Aside from web development, I enjoy travel, brewing speciality coffee, jamming on my saxophone, and working out.
</p>
                <div className={aboutStyle.logoContainer}>
                <p>Some of the tech I like:</p>
                <img alt="javascript" className={aboutStyle.logo} src="./logos/javascript.svg" />
                <img alt="HTML5" className={aboutStyle.logo} src="./logos/html5.svg" />
                <img alt="CSS3" className={aboutStyle.logo} src="./logos/css3.png" />
                <img alt="Angular" className={aboutStyle.logo} src="./logos/angular.svg" />
                <img alt="NodeJs" className={aboutStyle.logo} src="./logos/nodejs-icon.svg" />
                <img alt="Gatsby" className={aboutStyle.logo} src="./logos/gatsby.svg" />
                <img alt="Wordpress" className={aboutStyle.logo} src="./logos/wordpress.svg" />
                </div>

                <div className={aboutStyle.socialContainer}>
                <p>Send me a message!</p>
                <a className={aboutStyle.social} href="hmartin2844ttps://github.com/"><i className="fab fa-github"></i></a>
            <a className={aboutStyle.social} href="https://www.linkedin.com/in/victora88/"><i className="fab fa-linkedin"></i></a>
                </div>


            </div>

            </div>
        </Layout>
    )
}

export default About