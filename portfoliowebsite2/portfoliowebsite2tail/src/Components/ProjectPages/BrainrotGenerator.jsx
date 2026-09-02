import brainrotWebsite from '../Projects-ProjectPage/BrainrotVideoGeneratorWebsite.png';
import ProjectShowcase from './ProjectShowcase';

const BrainrotGenerator = () => (
  <ProjectShowcase
    title="Brainrot Video Generator"
    image={brainrotWebsite}
    description="An AI-powered Flask application that automates short-form video creation. ChatGPT writes the script, ElevenLabs produces the voiceover, Whisper handles transcription, and MoviePy assembles everything into a finished social video."
  />
);

export default BrainrotGenerator;
