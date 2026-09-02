import wacky4 from '../Projects-ProjectPage/Wacky4.png';
import wackyWarriors1 from '../Projects-ProjectPage/WackyWarrioirs1.png';
import wackyWarriors2 from '../Projects-ProjectPage/WackyWarrioirs2.png';
import wackyWarriors3 from '../Projects-ProjectPage/WackyWarrioirs3.png';
import wackyWarriors4 from '../Projects-ProjectPage/WackyWarrioirs4.png';
import wackyWarriors5 from '../Projects-ProjectPage/WackyWarrioirs5.png';
import wackyWarriors6 from '../Projects-ProjectPage/WackyWarrioirs6.png';
import wackyWarriorsPlayerSelection from '../Projects-ProjectPage/WackywarrioirsPlayerSelectionImage.png';
import wackyWarriorsMapSelection from '../Projects-ProjectPage/WackyWarrioirsMapSelection.png';
import ProjectShowcase from './ProjectShowcase';

const WackyWarriors = () => (
  <ProjectShowcase
    title="Wacky Warriors"
    images={[
      wacky4,
      wackyWarriors4,
      wackyWarriors1,
      wackyWarriors2,
      wackyWarriors3,
      wackyWarriorsPlayerSelection,
      wackyWarriorsMapSelection,
      wackyWarriors5,
      wackyWarriors6,
    ]}
    description="A 2.5D arena game with multiple maps, playable characters, cross-input support, dynamic combat, custom animations, and local multiplayer. Developed in Unity with C# and Figma over more than a year as a high-school thesis project."
  />
);

export default WackyWarriors;
