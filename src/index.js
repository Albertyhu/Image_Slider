import _ from 'lodash';

//for watching the html file 
require('./index.html')
import antartica from './images/Antartica.jpg';
import { loadImage, initializeArray } from './loadImage.js'
import './mystyle.css';
import { imageStack, slidePointer } from './stack2.js'; 
import LeftArrow from './asset/left.png';
import RightArrow from './asset/right.png'; 

const mainCont = document.getElementById('mainContainer'); 

mainCont.appendChild(imageStack()); 
