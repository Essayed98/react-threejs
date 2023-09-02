import { color } from "framer-motion";
import { proxy } from "valtio";
const state = proxy ({
intro : true ,
color : '#75BD4B' ,
isLogoTexture : true,
isFullTexture: false,
logoDecal :'./threejs.png',
fullDecal :'threejs.png' ,
});
export default state ;