import React from 'react';
import ImageCarousel from './ImageCarousel';
import brainrotWebsite from '../Projects-ProjectPage/BrainrotVideoGeneratorWebsite.png';
import brainrotDownloadVideo from '../Projects-ProjectPage/BrainrotVideoGeneratorDonwloadVideo.png';
import brainrotDownloaded from '../Projects-ProjectPage/BrainrotVideoGeneratorDownloaded.png';
import brainrotGenerating from '../Projects-ProjectPage/BrainrotVideoGeneratorGenerating.png';
import './ProjectPages.css';

const BrainrotGenerator = () => {
  const images = [
    brainrotWebsite,
    brainrotDownloadVideo,
    brainrotDownloaded,
    brainrotGenerating
  ];

  return (
    <div className="project-page-container">
      <h1 className="project-page-title">Brainrot Video Generator</h1>
      
      <div className="project-page-hero">
        <ImageCarousel images={images} />
      </div>

      <div className="project-page-content">
        <section className="project-section">
          <h2>Overview</h2>
          <p className="project-stack">Python | ElevenLabs | MoviePy | Whisper | HTML</p>
          <p>
            AI-powered Flask app that creates Brainrot TikTok videos by combining ChatGPT, ElevenLabs, Whisper, 
            and MoviePy for Amazing output of scripting, voiceovers, transcription, and video creation all into one video
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul>
            <li>AI-powered script generation using ChatGPT</li>
            <li>Natural voice synthesis with ElevenLabs</li>
            <li>Automatic transcription using Whisper</li>
            <li>Video composition and editing with MoviePy</li>
            <li>Seamless integration of multiple AI services</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technology Stack</h2>
          <ul>
            <li>Python - Primary programming language</li>
            <li>Flask - Web framework</li>
            <li>ElevenLabs API - Voice synthesis</li>
            <li>MoviePy - Video processing</li>
            <li>Whisper - Audio transcription</li>
            <li>HTML/CSS - Frontend interface</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            This project was developed to automate the creation of viral-style social media content. 
            The development focused on seamlessly integrating multiple AI services and ensuring 
            high-quality output while maintaining an easy-to-use interface.
          </p>
        </section>
      </div>
    </div>
  );
};

export default BrainrotGenerator; 