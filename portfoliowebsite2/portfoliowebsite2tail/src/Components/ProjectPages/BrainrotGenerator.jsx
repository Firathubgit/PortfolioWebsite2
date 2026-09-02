import brainrotWebsite from '../Projects-ProjectPage/BrainrotVideoGeneratorWebsite.png';
import brainrotDownloadVideo from '../Projects-ProjectPage/BrainrotVideoGeneratorDonwloadVideo.png';
import brainrotDownloaded from '../Projects-ProjectPage/BrainrotVideoGeneratorDownloaded.png';
import brainrotGenerating from '../Projects-ProjectPage/BrainrotVideoGeneratorGenerating.png';
import ProjectShowcase from './ProjectShowcase';

const BrainrotGenerator = () => (
  <ProjectShowcase
    title="Brainrot Video Generator"
    images={[brainrotWebsite, brainrotDownloadVideo, brainrotDownloaded, brainrotGenerating]}
    description="An AI-powered Flask application that automates short-form video creation. ChatGPT writes the script, ElevenLabs produces the voiceover, Whisper handles transcription, and MoviePy assembles everything into a finished social video."
  />
);

export default BrainrotGenerator;
