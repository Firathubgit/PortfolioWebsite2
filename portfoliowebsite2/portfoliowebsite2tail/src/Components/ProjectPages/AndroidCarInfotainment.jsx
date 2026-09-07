import ProjectShowcase from './ProjectShowcase';

const AndroidCarInfotainment = () => (
  <ProjectShowcase
    title="Andriod Car Infotainment"
    images={[
      '/android-car-infotainment-main.png',
      '/android-car-infotainment-modes.png',
      '/android-car-infotainment-comfort.png',
      '/android-car-infotainment-blender.png',
    ]}
    sourceUrl="https://github.com/Firathubgit/android-automotive-ai-copliot-infotainment"
    showBrand={false}
    description="A working Android Automotive cockpit built with Kotlin and Jetpack Compose, combining navigation previews, driving-aware controls, vehicle insights, and a local Qwen3 voice copilot through Ollama. Its deeper software-defined vehicle architecture uses Python and Rust across a separate Linux edge runtime, with COVESA VSS signals, AAOS VHAL integration, KUKSA/gRPC adapters, and deterministic action policy. The interface and vehicle visuals were created with Figma and Blender."
  />
);

export default AndroidCarInfotainment;
