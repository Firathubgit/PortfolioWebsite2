import ProjectShowcase from './ProjectShowcase';

const Volturiano = () => (
  <ProjectShowcase
    title="Volturiano Vector Search Agent"
    images={[
      '/volturiano-f1-builder.png',
      '/Skärmbild 2026-04-19 192051.png',
      '/Skärmbild 2026-05-09 014059.png',
      '/Skärmbild 2026-05-22 015159.png',
      '/Skärmbild 2026-05-27 151826.png',
      '/Skärmbild 2026-05-03 025325.png',
      '/Skärmbild 2026-05-06 232858.png',
    ]}
    liveUrl="https://volturiano.com"
    description="VOLTURIANO is a production-grade AI website builder for generating, customizing, and deploying premium websites through natural-language prompts. It combines multiple AI models with live code editing, real-time preview, a component library, and one-click Vercel deployment."
  />
);

export default Volturiano;
