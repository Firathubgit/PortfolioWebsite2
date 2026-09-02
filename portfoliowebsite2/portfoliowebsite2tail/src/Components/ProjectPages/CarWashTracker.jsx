import carWashPolestar from '../Projects-ProjectPage/CarwashAppPolestar.png';
import carWashBmw from '../Projects-ProjectPage/CarWashAppBmw.png';
import carWashMercedes from '../Projects-ProjectPage/Carwashappmercedes.png';
import carWashTesla from '../Projects-ProjectPage/CarWashAppTesla.png';
import carWashPolestarExample from '../Projects-ProjectPage/CarWashAppPolestarExxample.png';
import carWashPolestarSUII from '../Projects-ProjectPage/CarWashExamplePolestarSUII.png';
import ProjectShowcase from './ProjectShowcase';

const CarWashTracker = () => (
  <ProjectShowcase
    title="Car Wash Tracker"
    images={[
      carWashPolestar,
      carWashBmw,
      carWashMercedes,
      carWashTesla,
      carWashPolestarExample,
      carWashPolestarSUII,
    ]}
    description="A modern web application for tracking car-wash history and vehicle maintenance. It features car profiles, wash-entry logging, image uploads, reminders, and a responsive statistics dashboard built around a clean automotive interface."
  />
);

export default CarWashTracker;
