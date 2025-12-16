import "./Hero.css"
import Facepic from "./EllipseFacepic.png"
import wave from "./waving-hand_1f44b.png"
import githubIcon from "./github-light.svg";
import instagramicon from "./instagram.svg";
import linkedinIcon from "./linkedin.svg";
const Hero = () => {
    return (
        <section className="hero">
            <div className="rectangle">
                {/* Add social squares in top-right corner */}
                <div className="social-links">
                    <a
                        href="https://www.instagram.com/atal_moretti/"
                        className="square"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={instagramicon} alt="Twitter" className="icon-image" />
                    </a>

                    <a
                        href="https://github.com/Firathubgit"
                        className="square"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <img src={githubIcon} alt="GitHub" className="icon-image" />
                    </a>
                    <a
                        href="https://linkedin.com/in/firat-kaya-baba45267"
                        className="square"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="icon-image" />
                    </a>

                </div>
                <div className="hero-content">
                    <div className="hero-image">
                        <img src={Facepic} />
                    </div>

                    <div className="hero-text">

                        <h1>
                            Firat Kaya
                            <img src={wave} alt="wave" className="waveimg" />
                        </h1>


                        <p className="location">📍 Sweden, Göteborg</p>

                        <p className="bio">
                            I'm a 20 year old Full stack programmer. I have been programing for more than 4 years of experience. Ive created everything from games, websites and apps.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;