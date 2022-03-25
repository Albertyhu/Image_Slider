import antartica from './images/Antartica.jpg';
import earth from './images/Earth.jpg'; 
import eclipse from './images/eclipse.jpg'; 
import hFalls from './images/Havasu Falls.jpg'; 
import milkyWay from './images/MilkyWay.jpg'; 
import NIceland from './images/NorthernIceland.jpg'; 
import pool from './images/Pool.jpg'; 

export const loadImage = picture => {
    switch (picture) {
        case 'antartica':
            return antartica;
            break; 
        case 'Antartica':
            console.log('fire')
            return antartica;
            break; 
        case 'earth':
            return earth;
            break;
        case 'eclipse':
            return eclipse;
            break; 
        case 'hFalls':
            return hFalls;
            break; 
        case 'milkyWay':
            return milkyWay;
            break; 
        case 'NIceland': 
            return NIceland;
            break; 
        case 'iceland':
            return NIceland;
            break; 
        case 'pool':
            return pool;
            break; 
        default:
            break; 
    }
    
}

export const imageObj = {
    imageArray:[], 
    pushImage(image) {
        this.imageArray.push(image); 
    },
    resetArray() {
        this.imageArray = []; 
        this.imageArray.length = 0; 
    },
    getArray() {
        return this.imageArray; 
    },
    getImage(i) {
        if (i >= 0 && i < this.imageArray.length) {
            return this.imageArray[i];
        }
        else {
            alert('Error: Index is out of bounds of the image array.')
        }
    },
    getLength() {
        return this.imageArray.length; 
    },
}

export const initializeArray = () => {
    imageObj.pushImage(antartica); 
    imageObj.pushImage(earth); 
    imageObj.pushImage(eclipse); 
    imageObj.pushImage(hFalls); 
    imageObj.pushImage(milkyWay); 
    imageObj.pushImage(NIceland); 
    imageObj.pushImage(pool); 
}