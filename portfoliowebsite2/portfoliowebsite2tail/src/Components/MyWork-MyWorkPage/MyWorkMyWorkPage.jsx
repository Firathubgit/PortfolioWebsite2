import "./MyWorkMyWorkPage.css";
import terrahuttonLogo from "../../TerrahuttonLogotype_White-BOlboZwc.png";
import startupLogo from "../../Exclusive.png";

const MyWorkMyWorkPage = () => {
    return (
        <section className="work-experience-section">
            <div className="work-experience-item">
                <div className="work-experience-logo-container">
                    <img src="/RealdiniStudiosLogo.png" alt="Realdini Studios Logo" className="work-experience-logo" />
                </div>
                <div className="work-experience-details">
                    <div className="work-experience-header">
                        <h3 className="work-experience-title">Realdini Studios</h3>
                        <p className="work-experience-dates">September 2026 – Present</p>
                    </div>
                    <p className="work-experience-stack">Game Developer Intern | Unreal Engine | AI Storytelling</p>
                    <p className="work-experience-description">
                        Developing gameplay systems and AI-powered storytelling solutions in Unreal Engine, creating interactive and dynamic experiences.
                    </p>
                </div>
            </div>

            <div className="work-experience-item">
                <div className="work-experience-logo-container">
                    <img src="/TornadoMainLogo.png" alt="Volturiano Logo" className="work-experience-logo" style={{ maxWidth: '60%', maxHeight: '60%' }} />
                </div>
                <div className="work-experience-details">
                    <div className="work-experience-header">
                        <h3 className="work-experience-title">Volturiano</h3>
                        <p className="work-experience-dates">August 2025 - Present</p>
                    </div>
                    <p className="work-experience-stack">Founder & Developer | Enskild Firma | React | TypeScript | Supabase | OpenRouter | Vercel</p>
                    <p className="work-experience-description">
                        Pursuing the AI race through my own company. Building Immortal by Volturiano — an AI-powered website builder that lets users generate, customize, and deploy premium websites through natural language. Completed private projects for clients, generating over 20k SEK in revenue. Main priority is scaling the AI website builder into a full SaaS platform.
                    </p>
                </div>
            </div>

            <div className="work-experience-item">
                <div className="work-experience-logo-container">
                    <img src={terrahuttonLogo} alt="Terrahutton Logo" className="work-experience-logo" />
                </div>
                <div className="work-experience-details">
                    <div className="work-experience-header">
                        <h3 className="work-experience-title">Terrahutton</h3>
                        <p className="work-experience-dates">March 2025 - August 2025</p>
                    </div>
                    <p className="work-experience-stack">Fullstack Developer | React | TypeScript | Supabase | Unity</p>
                    <p className="work-experience-description">
                        As a full-stack developer at Terrahutton, I designed and developed web applications, focusing on creating good clean back end systems and responsive front end interfaces connected to supabase. I also worked on Unity. 
                    </p>
                </div>
            </div>

            <div className="work-experience-item">
                <div className="work-experience-logo-container">
                    <img src={startupLogo} alt="Custom Steering Wheel Shop" className="work-experience-logo" />
                </div>
                <div className="work-experience-details">
                    <div className="work-experience-header">
                        <h3 className="work-experience-title">Startup Company</h3>
                        <p className="work-experience-dates">November 2024 - February 2025</p>
                    </div>
                    <p className="work-experience-stack">CEO | E-commerce | React | Tailwind CSS | Figma</p>
                    <p className="work-experience-description">
                        Led a startup focused on e-commerce solutions for custom automotive parts, overseeing product development, business strategy, and user experience design from concept to launch.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyWorkMyWorkPage;
