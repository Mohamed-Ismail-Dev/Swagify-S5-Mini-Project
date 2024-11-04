import { proxy } from "valtio";

const state = proxy({
    intro:true,
    color:"#80C670",
    //color:"#EFBD45",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal: './logo.png',
    fullDecal:'./texture3.jpg',
    selectedModel: 'tshirt',
});

export default state;