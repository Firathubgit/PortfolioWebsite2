import shopifyStore1 from '../Projects-ProjectPage/ShopifyStoreProject1.png';
import shopifyStore2 from '../Projects-ProjectPage/ShopifyStoreProject2.png';
import shopifyStore3 from '../Projects-ProjectPage/ShopifyStoreProject3.png';
import ProjectShowcase from './ProjectShowcase';

const SteeringWheelShop = () => (
  <ProjectShowcase
    title="Custom Steering Wheel Shop"
    images={[shopifyStore1, shopifyStore2, shopifyStore3]}
    description="A React-based e-commerce experience for customizable luxury steering wheels. It combines material and color options with immersive Unity-powered 3D camera animations, creating a premium product configurator for automotive enthusiasts."
  />
);

export default SteeringWheelShop;
