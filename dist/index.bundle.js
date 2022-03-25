"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_Antartica_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Antartica.jpg */ "./src/images/Antartica.jpg");
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadImage.js */ "./src/loadImage.js");
/* harmony import */ var _mystyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mystyle.css */ "./src/mystyle.css");
/* harmony import */ var _stack2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stack2.js */ "./src/stack2.js");
/* harmony import */ var _asset_left_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/left.png */ "./src/asset/left.png");
/* harmony import */ var _asset_right_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset/right.png */ "./src/asset/right.png");
 //for watching the html file 

__webpack_require__(/*! ./index.html */ "./src/index.html");







const mainCont = document.getElementById('mainContainer');
mainCont.appendChild((0,_stack2_js__WEBPACK_IMPORTED_MODULE_4__.imageStack)());

/***/ }),

/***/ "./src/loadImage.js":
/*!**************************!*\
  !*** ./src/loadImage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadImage": () => (/* binding */ loadImage),
/* harmony export */   "imageObj": () => (/* binding */ imageObj),
/* harmony export */   "initializeArray": () => (/* binding */ initializeArray)
/* harmony export */ });
/* harmony import */ var _images_Antartica_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Antartica.jpg */ "./src/images/Antartica.jpg");
/* harmony import */ var _images_Earth_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Earth.jpg */ "./src/images/Earth.jpg");
/* harmony import */ var _images_eclipse_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/eclipse.jpg */ "./src/images/eclipse.jpg");
/* harmony import */ var _images_Havasu_Falls_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Havasu Falls.jpg */ "./src/images/Havasu Falls.jpg");
/* harmony import */ var _images_MilkyWay_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/MilkyWay.jpg */ "./src/images/MilkyWay.jpg");
/* harmony import */ var _images_NorthernIceland_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/NorthernIceland.jpg */ "./src/images/NorthernIceland.jpg");
/* harmony import */ var _images_Pool_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Pool.jpg */ "./src/images/Pool.jpg");







const loadImage = picture => {
  switch (picture) {
    case 'antartica':
      return _images_Antartica_jpg__WEBPACK_IMPORTED_MODULE_0__;
      break;

    case 'Antartica':
      console.log('fire');
      return _images_Antartica_jpg__WEBPACK_IMPORTED_MODULE_0__;
      break;

    case 'earth':
      return _images_Earth_jpg__WEBPACK_IMPORTED_MODULE_1__;
      break;

    case 'eclipse':
      return _images_eclipse_jpg__WEBPACK_IMPORTED_MODULE_2__;
      break;

    case 'hFalls':
      return _images_Havasu_Falls_jpg__WEBPACK_IMPORTED_MODULE_3__;
      break;

    case 'milkyWay':
      return _images_MilkyWay_jpg__WEBPACK_IMPORTED_MODULE_4__;
      break;

    case 'NIceland':
      return _images_NorthernIceland_jpg__WEBPACK_IMPORTED_MODULE_5__;
      break;

    case 'iceland':
      return _images_NorthernIceland_jpg__WEBPACK_IMPORTED_MODULE_5__;
      break;

    case 'pool':
      return _images_Pool_jpg__WEBPACK_IMPORTED_MODULE_6__;
      break;

    default:
      break;
  }
};
const imageObj = {
  imageArray: [],

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
    } else {
      alert('Error: Index is out of bounds of the image array.');
    }
  },

  getLength() {
    return this.imageArray.length;
  }

};
const initializeArray = () => {
  imageObj.pushImage(_images_Antartica_jpg__WEBPACK_IMPORTED_MODULE_0__);
  imageObj.pushImage(_images_Earth_jpg__WEBPACK_IMPORTED_MODULE_1__);
  imageObj.pushImage(_images_eclipse_jpg__WEBPACK_IMPORTED_MODULE_2__);
  imageObj.pushImage(_images_Havasu_Falls_jpg__WEBPACK_IMPORTED_MODULE_3__);
  imageObj.pushImage(_images_MilkyWay_jpg__WEBPACK_IMPORTED_MODULE_4__);
  imageObj.pushImage(_images_NorthernIceland_jpg__WEBPACK_IMPORTED_MODULE_5__);
  imageObj.pushImage(_images_Pool_jpg__WEBPACK_IMPORTED_MODULE_6__);
};

/***/ }),

/***/ "./src/stack2.js":
/*!***********************!*\
  !*** ./src/stack2.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slidePointer": () => (/* binding */ slidePointer),
/* harmony export */   "imageStack": () => (/* binding */ imageStack),
/* harmony export */   "setActiveDot": () => (/* binding */ setActiveDot)
/* harmony export */ });
/* harmony import */ var _images_Antartica_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/Antartica.jpg */ "./src/images/Antartica.jpg");
/* harmony import */ var _images_Earth_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Earth.jpg */ "./src/images/Earth.jpg");
/* harmony import */ var _images_eclipse_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/eclipse.jpg */ "./src/images/eclipse.jpg");
/* harmony import */ var _images_Havasu_Falls_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/Havasu Falls.jpg */ "./src/images/Havasu Falls.jpg");
/* harmony import */ var _images_MilkyWay_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/MilkyWay.jpg */ "./src/images/MilkyWay.jpg");
/* harmony import */ var _images_NorthernIceland_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/NorthernIceland.jpg */ "./src/images/NorthernIceland.jpg");
/* harmony import */ var _images_Pool_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/Pool.jpg */ "./src/images/Pool.jpg");
/* harmony import */ var _loadImage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loadImage.js */ "./src/loadImage.js");







 //this is alternative way of writing the program
//It uses the method "Promise" in the switch slides statement.

const slidePointer = {
  currentPos: 0,
  oldPos: 0,
  parNode: null,
  nextChildNode: null,
  slideLength: 0,
  slideTimer: null,
  timeOutVar: null,
  //Boolean value to determine if user has clicked on arrow buttons or dot buttons 
  transitionNode: null,

  setTransitionNode(pos) {
    this.transitionNode = this.parNode.childNodes[pos];
  },

  initializeSlide() {
    const firstSlide = this.parNode.childNodes[0];
    firstSlide.style.zIndex = '1';
    firstSlide.style.opacity = '1.0';
    firstSlide.style.display = 'block';
    this.currentPos = 0;
  },

  //get current position of the index 
  getCurrent() {
    return this.currentPos;
  },

  setCurrentPos(i) {
    this.currentPos = i;
  },

  //automatically switches slides every 5 seconds  
  runSlide() {
    this.slideTimer = setInterval(incrementSlide, 5000);
  },

  stopSlide() {
    clearInterval(this.slideTimer);
  },

  stopStart() {
    clearInterval(this.slideTimer); //    clearTimeout(this.timeOutVar);

    this.slideTimer = setInterval(incrementSlide, 5000);
  },

  setNextChildNode(i) {
    this.nextChildNode = i;
  },

  setTimer(i) {
    this.slideTimer = i;
  },

  cancelTimeOut() {
    clearTimeout(this.timeOutVar);
  },

  setTimeOutVar(i) {
    this.timeOutVar = i;
  },

  getTimeOutVar() {
    return this.timeOutVar;
  },

  //stores the parent node of the slides 
  setParNode(element) {
    this.parNode = element;
    this.slideLength = this.parNode.childNodes.length;
    this.initializeSlide();
    document.getElementById('dot-navigationContainer').appendChild(generateDots());
    setActiveDot(this.currentPos);
    addArrowFunctions();
    this.runSlide();
  }

}; //Object that gives functionality to the dots representting each slide 

const dotPointer = {
  activeDot: 0,
  containerNode: null,
  dotArray: [],
  numDots: 0,

  setDotContainerNode(node) {
    this.containerNode = node;
    this.dotArray = node.childNodes;
    this.numDots = node.childNodes.length;
  },

  getContainerNode() {
    return this.containerNode;
  },

  getDotArray() {
    return this.dotArray;
  },

  getNumDots() {
    return this.numDots;
  },

  getActiveDot() {
    return this.activeDot;
  },

  setActiveDot(i) {
    this.activeDot = i;
  }

}; //This function helps the user choose the slide they want to go to. 

function setCurrent(i) {
  slidePointer.stopSlide(); //  if (slidePointer.getTimeOutVar())
  //     slidePointer.cancelTimeOut();

  setOnlyOneTop(i);
  slidePointer.setTransitionNode(i);
  switchSlides(i);
  slidePointer.currentPos = i;
  setActiveDot(i);
  slidePointer.runSlide();
} //Function responsible for switching slides 


function switchSlides(i) {
  const oldNode = slidePointer.parNode.childNodes[slidePointer.currentPos];
  const newNode = slidePointer.parNode.childNodes[i]; //old node
  //This is to help keep track of the next slide for the function reverseTransit

  slidePointer.setNextChildNode(slidePointer.parNode.childNodes[i]); //The following code presents the fade-in effect so that the current and next slide gets the immediate update to their properties

  oldNode.style.transition = 'none !important';
  newNode.style.transition = 'none !important'; //The following series of if statements are necessary for resetting the properties of the current and next slides to their intitial values
  //When the user clicks on either left or right arrows, the setTimeout function gets cleared and the block of code that updates 
  //the properties of the current and next slide doesn't get executed.
  //Thus, the following code is necessary. 

  if (oldNode.style.opacity != '1') {
    oldNode.style.opacity = '1';
  }

  if (oldNode.style.display !== 'block') {
    oldNode.style.display = 'block';
  }

  if (oldNode.style.zIndex !== '1') {
    oldNode.style.zIndex = '1';
  }

  if (newNode.style.opacity !== '1') {
    newNode.style.opacity = '1';
  }

  if (newNode.style.display !== 'none') {
    newNode.style.display = 'none';
  }

  if (newNode.style.zIndex !== '0') {
    newNode.style.zIndex = '0';
  } //set the acitve dot 


  setActiveDot(i); //The following block of code including the setTimeout block are responsible for the fade-in effects when switching slides
  //It's important that the transition property only focuses on changes to opacity only.
  //Initially, I made the mistake of setting the transition property to focus on 'all' changes. 

  oldNode.style.transition = 'opacity 2s ease-out';
  oldNode.style.opacity = '0.0';
  newNode.style.transition = 'opacity 2s ease-in';
  newNode.style.display = 'block';
  newNode.style.opacity = '1.0'; //As the current slide fades, the new slide should be visible, but it is still stacked under the current slide.
  //The object transitionNode keeps track of the next slide. 
  //The following code checks to see whether or not the current next slide is still equal to the transitionNode
  //If the user clicks on one of the arrow buttons or dots, the transitionNode points to a different slide
  //Thus, the code in the resolve case does not get executed. 

  const myPromise = new Promise((resolve, reject) => {
    slidePointer.setTimeOutVar(setTimeout(() => {
      if (slidePointer.transitionNode === newNode) resolve();else reject();
    }, 2000));
  });
  myPromise.then(function () {
    console.log('resolve');
    newNode.style.zIndex = '1';
    oldNode.style.display = 'none';
    oldNode.style.zIndex = '0'; //setting the opactiy of the current slide, which is the now the old slide, to 1.0 makes sure that next time the pointer iterates 
    //through this slide, it is visible. Otherwise, it won't appear immediately. 

    oldNode.style.opacity = '1.0';
    setOnlyOneTop(i);
  }, function () {
    console.log('reject');
  });
}

function incrementSlide() {
  if (slidePointer.currentPos === slidePointer.slideLength - 1) {
    slidePointer.setTransitionNode(0);
    switchSlides(0);
    slidePointer.currentPos = 0;
  } else {
    slidePointer.setTransitionNode(slidePointer.currentPos + 1);
    switchSlides(slidePointer.currentPos + 1);
    slidePointer.currentPos++;
  }
} //creates the DOM elements of the slide for each image that exists 


const imageStack = () => {
  (0,_loadImage_js__WEBPACK_IMPORTED_MODULE_7__.initializeArray)();
  const element = document.createElement('div');
  element.setAttribute('id', 'slides');
  var count = 0;
  _loadImage_js__WEBPACK_IMPORTED_MODULE_7__.imageObj.imageArray.forEach(item => {
    const imageEle = document.createElement('IMG');
    imageEle.src = item;
    imageEle.setAttribute('class', 'slide');
    imageEle.setAttribute('id', `image-${count}`);
    imageEle.style.opacity = '1.0';
    imageEle.style.display = 'none';
    imageEle.style.zIndex = '0';
    count++;
    element.appendChild(imageEle);
  });
  slidePointer.setParNode(element);
  return element;
}; //Render each dot for each image that exists 

const generateDots = () => {
  const element = document.createElement('div');
  element.setAttribute('id', 'dot-container');
  dotPointer.setDotContainerNode(element);
  const numDots = _loadImage_js__WEBPACK_IMPORTED_MODULE_7__.imageObj.getLength();
  var count = 0;
  _loadImage_js__WEBPACK_IMPORTED_MODULE_7__.imageObj.imageArray.forEach(item => {
    const dot = document.createElement('div');
    dot.setAttribute('class', 'dot');
    dot.setAttribute('id', `dot-${count}`);
    element.appendChild(dot);
    const dotID = count;
    dot.addEventListener('click', () => {
      setCurrent(dotID);
    });
    count++;
  });
  return element;
}; //sets selected dot as active 


const setActiveDot = i => {
  const dotArray = dotPointer.getDotArray();
  const oldDot = dotArray[dotPointer.getActiveDot()];
  const newDot = dotArray[i];
  oldDot.classList.remove('active-dot');
  oldDot.classList.add('dot');
  newDot.classList.remove('dot');
  newDot.classList.add('active-dot');
  dotPointer.setActiveDot(i);
}; //adds the necessary functionality of the arrows 

const addArrowFunctions = () => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  left.addEventListener('click', event => {
    event.preventDefault();
    manualDecrement();
  });
  right.addEventListener('click', event => {
    event.preventDefault();
    manualIncrement();
  });
}; //Gives the user the ability to click on the right arrow button and move forward one slide 


const manualIncrement = () => {
  //stops the automatics iteration of the slide 
  slidePointer.stopSlide();
  const curNode = slidePointer.parNode.childNodes[slidePointer.getCurrent()]; //When the user clicks on the arrow button, it stops any current transition that happens and clears any setTimeout block of code from being executed
  // if (slidePointer.getTimeOutVar())
  //   slidePointer.cancelTimeOut();

  if (slidePointer.currentPos === slidePointer.slideLength - 1) {
    slidePointer.setTransitionNode(0);
    switchSlides(0);
    slidePointer.currentPos = 0;
  } else {
    slidePointer.setTransitionNode(slidePointer.currentPos + 1);
    switchSlides(slidePointer.currentPos + 1);
    slidePointer.currentPos += 1;
  } //restart the automatic iteration of the slide 


  slidePointer.runSlide();
}; //Gives the user the ability to click on the left arrow button and move back one slide 


const manualDecrement = () => {
  console.log('fire');
  slidePointer.stopSlide();
  const curNode = slidePointer.parNode.childNodes[slidePointer.getCurrent()];
  const reversedNode = slidePointer.nextChildNode; //if (slidePointer.getTimeOutVar())
  //   slidePointer.cancelTimeOut();

  if (slidePointer.currentPos === 0) {
    slidePointer.setTransitionNode(slidePointer.slideLength - 1);
    switchSlides(slidePointer.slideLength - 1);
    slidePointer.currentPos = slidePointer.slideLength - 1;
  } else {
    slidePointer.setTransitionNode(slidePointer.currentPos - 1);
    switchSlides(slidePointer.currentPos - 1);
    slidePointer.currentPos -= 1;
  }

  slidePointer.runSlide();
}; //Used to set the properties of a slide back to its default state. 


const setAsRegularSlide = node => {
  node.style.transition = 'none !important';
  node.style.opacity = '1';
  node.style.display = 'none';
  node.style.zIndex = '0';
}; //This makes sure the current slide is the only one on top of the stack of slides. 
//Whenever the user clicks on one of  the arrow buttons or dots to switch slides,
//the setTimeout block of code will get cleared in the function 'switchSlides'. This function is neccessary to 
//update the properties of all slides to be back to their default state while the current slide remains on top of the stack. 


const setOnlyOneTop = nodePos => {
  slidePointer.parNode.childNodes.forEach(slide => {
    if (slide !== slidePointer.parNode.childNodes[nodePos]) {
      setAsRegularSlide(slide);
    }
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mystyle.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/left.png */ "./src/asset/left.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/right.png */ "./src/asset/right.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#mainContainer {\r\nwidth: 100%;\r\nheight: 100%;\r\n\r\n}\r\n\r\n#mainImage {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.slide {\r\n    position: absolute;\r\n    display: none;\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#left, #right {\r\n    width: 100px;\r\n    height: 100px;\r\n    z-index: 2;\r\n    display: block;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    border: none 0px;\r\n    top: 40%;\r\n    border-style: none;\r\n    outline: none;\r\n}\r\n#left:focus, #right:focus {\r\n    outline: none;\r\n}\r\n\r\n#left {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    left: 0;\r\n}\r\n\r\n#right {\r\nbackground-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\nright: 0;\r\n}\r\n\r\n/*dot container*/\r\n#dot-navigationContainer {\r\n    display: flex;\r\n    bottom: 10px;\r\n    width: 100%;\r\n    min-height: 200px;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    background-color: none;\r\n    z-index: 2;\r\n}\r\n\r\n#dot-container {\r\n    display: inline-block; \r\n    justify-content: space-between; \r\n    margin: auto; \r\n    vertical-align: middle; \r\n}\r\n\r\n.dot, .active-dot {\r\n    border: 5px solid #d0d0d0;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    z-index: 3;\r\n    opacity: 1;\r\n    display: inline-block;\r\n}\r\n\r\n.dot {\r\n    background-color: none;\r\n}\r\n\r\n.active-dot {\r\n    background-color: #fff; \r\n}", "",{"version":3,"sources":["webpack://./src/mystyle.css"],"names":[],"mappings":"AAAA;AACA,WAAW;AACX,YAAY;;AAEZ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,UAAU;IACV,cAAc;IACd,kBAAkB;IAClB,4BAA4B;IAC5B,gBAAgB;IAChB,QAAQ;IACR,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,aAAa;AACjB;;AAEA;IACI,yDAAyC;IACzC,OAAO;AACX;;AAEA;AACA,yDAA0C;AAC1C,QAAQ;AACR;;AAEA,gBAAgB;AAChB;IACI,aAAa;IACb,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,cAAc;IACd,kBAAkB;IAClB,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,8BAA8B;IAC9B,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["#mainContainer {\r\nwidth: 100%;\r\nheight: 100%;\r\n\r\n}\r\n\r\n#mainImage {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.slide {\r\n    position: absolute;\r\n    display: none;\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n#left, #right {\r\n    width: 100px;\r\n    height: 100px;\r\n    z-index: 2;\r\n    display: block;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    border: none 0px;\r\n    top: 40%;\r\n    border-style: none;\r\n    outline: none;\r\n}\r\n#left:focus, #right:focus {\r\n    outline: none;\r\n}\r\n\r\n#left {\r\n    background-image: url('./asset/left.png');\r\n    left: 0;\r\n}\r\n\r\n#right {\r\nbackground-image: url('./asset/right.png');\r\nright: 0;\r\n}\r\n\r\n/*dot container*/\r\n#dot-navigationContainer {\r\n    display: flex;\r\n    bottom: 10px;\r\n    width: 100%;\r\n    min-height: 200px;\r\n    margin: 0 auto;\r\n    position: absolute;\r\n    background-color: none;\r\n    z-index: 2;\r\n}\r\n\r\n#dot-container {\r\n    display: inline-block; \r\n    justify-content: space-between; \r\n    margin: auto; \r\n    vertical-align: middle; \r\n}\r\n\r\n.dot, .active-dot {\r\n    border: 5px solid #d0d0d0;\r\n    width: 15px;\r\n    height: 15px;\r\n    border-radius: 15px;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    z-index: 3;\r\n    opacity: 1;\r\n    display: inline-block;\r\n}\r\n\r\n.dot {\r\n    background-color: none;\r\n}\r\n\r\n.active-dot {\r\n    background-color: #fff; \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>New Project</title>\r\n</head>\r\n<body>\r\n    <div id=\"mainContainer\">\r\n        <div id=\"arrow-navigationContainer\">\r\n            <div id=\"left\" class=\"navigation-icon\" ></div>\r\n            <div id=\"right\" class=\"navigation-icon\"></div>\r\n        </div>\r\n        <div id=\"dot-navigationContainer\"></div>\r\n    </div>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/mystyle.css":
/*!*************************!*\
  !*** ./src/mystyle.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mystyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/asset/left.png":
/*!****************************!*\
  !*** ./src/asset/left.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41589173a40023092e38.png";

/***/ }),

/***/ "./src/asset/right.png":
/*!*****************************!*\
  !*** ./src/asset/right.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "41c560d6d164c9943b68.png";

/***/ }),

/***/ "./src/images/Antartica.jpg":
/*!**********************************!*\
  !*** ./src/images/Antartica.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "609c39eb404f136321e7.jpg";

/***/ }),

/***/ "./src/images/Earth.jpg":
/*!******************************!*\
  !*** ./src/images/Earth.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f45bc6df51c949dea42a.jpg";

/***/ }),

/***/ "./src/images/Havasu Falls.jpg":
/*!*************************************!*\
  !*** ./src/images/Havasu Falls.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06be5bba6e7c8e8d6c9e.jpg";

/***/ }),

/***/ "./src/images/MilkyWay.jpg":
/*!*********************************!*\
  !*** ./src/images/MilkyWay.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39c2aedd76c25f5e5dcd.jpg";

/***/ }),

/***/ "./src/images/NorthernIceland.jpg":
/*!****************************************!*\
  !*** ./src/images/NorthernIceland.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16133b3bcffec45f5e2c.jpg";

/***/ }),

/***/ "./src/images/Pool.jpg":
/*!*****************************!*\
  !*** ./src/images/Pool.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4999c9bb5486c2327af0.jpg";

/***/ }),

/***/ "./src/images/eclipse.jpg":
/*!********************************!*\
  !*** ./src/images/eclipse.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4fafb2b2d78afc094be4.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckVhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbG9hZEltYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvc3RhY2syLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvbXlzdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL215c3R5bGUuY3NzP2RkNTAiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLy9mb3Igd2F0Y2hpbmcgdGhlIGh0bWwgZmlsZSBcclxucmVxdWlyZSgnLi9pbmRleC5odG1sJylcclxuaW1wb3J0IGFudGFydGljYSBmcm9tICcuL2ltYWdlcy9BbnRhcnRpY2EuanBnJztcclxuaW1wb3J0IHsgbG9hZEltYWdlLCBpbml0aWFsaXplQXJyYXkgfSBmcm9tICcuL2xvYWRJbWFnZS5qcydcclxuaW1wb3J0ICcuL215c3R5bGUuY3NzJztcclxuaW1wb3J0IHsgaW1hZ2VTdGFjaywgc2xpZGVQb2ludGVyIH0gZnJvbSAnLi9zdGFjazIuanMnOyBcclxuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuL2Fzc2V0L2xlZnQucG5nJztcclxuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi9hc3NldC9yaWdodC5wbmcnOyBcclxuXHJcbmNvbnN0IG1haW5Db250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTsgXHJcblxyXG5tYWluQ29udC5hcHBlbmRDaGlsZChpbWFnZVN0YWNrKCkpOyBcclxuIiwiaW1wb3J0IGFudGFydGljYSBmcm9tICcuL2ltYWdlcy9BbnRhcnRpY2EuanBnJztcclxuaW1wb3J0IGVhcnRoIGZyb20gJy4vaW1hZ2VzL0VhcnRoLmpwZyc7IFxyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICcuL2ltYWdlcy9lY2xpcHNlLmpwZyc7IFxyXG5pbXBvcnQgaEZhbGxzIGZyb20gJy4vaW1hZ2VzL0hhdmFzdSBGYWxscy5qcGcnOyBcclxuaW1wb3J0IG1pbGt5V2F5IGZyb20gJy4vaW1hZ2VzL01pbGt5V2F5LmpwZyc7IFxyXG5pbXBvcnQgTkljZWxhbmQgZnJvbSAnLi9pbWFnZXMvTm9ydGhlcm5JY2VsYW5kLmpwZyc7IFxyXG5pbXBvcnQgcG9vbCBmcm9tICcuL2ltYWdlcy9Qb29sLmpwZyc7IFxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRJbWFnZSA9IHBpY3R1cmUgPT4ge1xyXG4gICAgc3dpdGNoIChwaWN0dXJlKSB7XHJcbiAgICAgICAgY2FzZSAnYW50YXJ0aWNhJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFudGFydGljYTtcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIGNhc2UgJ0FudGFydGljYSc6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJlJylcclxuICAgICAgICAgICAgcmV0dXJuIGFudGFydGljYTtcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgICAgIGNhc2UgJ2VhcnRoJzpcclxuICAgICAgICAgICAgcmV0dXJuIGVhcnRoO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdlY2xpcHNlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGVjbGlwc2U7XHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICBjYXNlICdoRmFsbHMnOlxyXG4gICAgICAgICAgICByZXR1cm4gaEZhbGxzO1xyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgY2FzZSAnbWlsa3lXYXknOlxyXG4gICAgICAgICAgICByZXR1cm4gbWlsa3lXYXk7XHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICBjYXNlICdOSWNlbGFuZCc6IFxyXG4gICAgICAgICAgICByZXR1cm4gTkljZWxhbmQ7XHJcbiAgICAgICAgICAgIGJyZWFrOyBcclxuICAgICAgICBjYXNlICdpY2VsYW5kJzpcclxuICAgICAgICAgICAgcmV0dXJuIE5JY2VsYW5kO1xyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgY2FzZSAncG9vbCc6XHJcbiAgICAgICAgICAgIHJldHVybiBwb29sO1xyXG4gICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbWFnZU9iaiA9IHtcclxuICAgIGltYWdlQXJyYXk6W10sIFxyXG4gICAgcHVzaEltYWdlKGltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUFycmF5LnB1c2goaW1hZ2UpOyBcclxuICAgIH0sXHJcbiAgICByZXNldEFycmF5KCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VBcnJheSA9IFtdOyBcclxuICAgICAgICB0aGlzLmltYWdlQXJyYXkubGVuZ3RoID0gMDsgXHJcbiAgICB9LFxyXG4gICAgZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VBcnJheTsgXHJcbiAgICB9LFxyXG4gICAgZ2V0SW1hZ2UoaSkge1xyXG4gICAgICAgIGlmIChpID49IDAgJiYgaSA8IHRoaXMuaW1hZ2VBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VBcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvcjogSW5kZXggaXMgb3V0IG9mIGJvdW5kcyBvZiB0aGUgaW1hZ2UgYXJyYXkuJylcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlQXJyYXkubGVuZ3RoOyBcclxuICAgIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXJyYXkgPSAoKSA9PiB7XHJcbiAgICBpbWFnZU9iai5wdXNoSW1hZ2UoYW50YXJ0aWNhKTsgXHJcbiAgICBpbWFnZU9iai5wdXNoSW1hZ2UoZWFydGgpOyBcclxuICAgIGltYWdlT2JqLnB1c2hJbWFnZShlY2xpcHNlKTsgXHJcbiAgICBpbWFnZU9iai5wdXNoSW1hZ2UoaEZhbGxzKTsgXHJcbiAgICBpbWFnZU9iai5wdXNoSW1hZ2UobWlsa3lXYXkpOyBcclxuICAgIGltYWdlT2JqLnB1c2hJbWFnZShOSWNlbGFuZCk7IFxyXG4gICAgaW1hZ2VPYmoucHVzaEltYWdlKHBvb2wpOyBcclxufSIsImltcG9ydCBhbnRhcnRpY2EgZnJvbSAnLi9pbWFnZXMvQW50YXJ0aWNhLmpwZyc7XHJcbmltcG9ydCBlYXJ0aCBmcm9tICcuL2ltYWdlcy9FYXJ0aC5qcGcnO1xyXG5pbXBvcnQgZWNsaXBzZSBmcm9tICcuL2ltYWdlcy9lY2xpcHNlLmpwZyc7XHJcbmltcG9ydCBoRmFsbHMgZnJvbSAnLi9pbWFnZXMvSGF2YXN1IEZhbGxzLmpwZyc7XHJcbmltcG9ydCBtaWxreVdheSBmcm9tICcuL2ltYWdlcy9NaWxreVdheS5qcGcnO1xyXG5pbXBvcnQgTkljZWxhbmQgZnJvbSAnLi9pbWFnZXMvTm9ydGhlcm5JY2VsYW5kLmpwZyc7XHJcbmltcG9ydCBwb29sIGZyb20gJy4vaW1hZ2VzL1Bvb2wuanBnJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFycmF5LCBpbWFnZU9iaiB9IGZyb20gJy4vbG9hZEltYWdlLmpzJztcclxuXHJcbi8vdGhpcyBpcyBhbHRlcm5hdGl2ZSB3YXkgb2Ygd3JpdGluZyB0aGUgcHJvZ3JhbVxyXG4vL0l0IHVzZXMgdGhlIG1ldGhvZCBcIlByb21pc2VcIiBpbiB0aGUgc3dpdGNoIHNsaWRlcyBzdGF0ZW1lbnQuXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVQb2ludGVyID0ge1xyXG4gICAgY3VycmVudFBvczogMCxcclxuICAgIG9sZFBvczogMCxcclxuICAgIHBhck5vZGU6IG51bGwsXHJcbiAgICBuZXh0Q2hpbGROb2RlOiBudWxsLFxyXG4gICAgc2xpZGVMZW5ndGg6IDAsXHJcbiAgICBzbGlkZVRpbWVyOiBudWxsLFxyXG4gICAgdGltZU91dFZhcjogbnVsbCxcclxuICAgIC8vQm9vbGVhbiB2YWx1ZSB0byBkZXRlcm1pbmUgaWYgdXNlciBoYXMgY2xpY2tlZCBvbiBhcnJvdyBidXR0b25zIG9yIGRvdCBidXR0b25zIFxyXG4gICAgdHJhbnNpdGlvbk5vZGU6IG51bGwsXHJcbiAgICBzZXRUcmFuc2l0aW9uTm9kZShwb3MpIHtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Ob2RlID0gdGhpcy5wYXJOb2RlLmNoaWxkTm9kZXNbcG9zXVxyXG4gICAgfSxcclxuICAgIGluaXRpYWxpemVTbGlkZSgpIHtcclxuICAgICAgICBjb25zdCBmaXJzdFNsaWRlID0gdGhpcy5wYXJOb2RlLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgZmlyc3RTbGlkZS5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgZmlyc3RTbGlkZS5zdHlsZS5vcGFjaXR5ID0gJzEuMCc7XHJcbiAgICAgICAgZmlyc3RTbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3MgPSAwO1xyXG4gICAgfSxcclxuICAgIC8vZ2V0IGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGluZGV4IFxyXG4gICAgZ2V0Q3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UG9zO1xyXG4gICAgfSxcclxuICAgIHNldEN1cnJlbnRQb3MoaSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBvcyA9IGk7XHJcbiAgICB9LFxyXG4gICAgLy9hdXRvbWF0aWNhbGx5IHN3aXRjaGVzIHNsaWRlcyBldmVyeSA1IHNlY29uZHMgIFxyXG4gICAgcnVuU2xpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZVRpbWVyID0gc2V0SW50ZXJ2YWwoaW5jcmVtZW50U2xpZGUsIDUwMDApXHJcbiAgICB9LFxyXG4gICAgc3RvcFNsaWRlKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zbGlkZVRpbWVyKTtcclxuICAgIH0sXHJcbiAgICBzdG9wU3RhcnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnNsaWRlVGltZXIpO1xyXG4gICAgICAgIC8vICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXRWYXIpO1xyXG4gICAgICAgIHRoaXMuc2xpZGVUaW1lciA9IHNldEludGVydmFsKGluY3JlbWVudFNsaWRlLCA1MDAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0TmV4dENoaWxkTm9kZShpKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0Q2hpbGROb2RlID0gaTtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lcihpKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZVRpbWVyID0gaTtcclxuICAgIH0sXHJcbiAgICBjYW5jZWxUaW1lT3V0KCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXRWYXIpO1xyXG4gICAgfSxcclxuICAgIHNldFRpbWVPdXRWYXIoaSkge1xyXG4gICAgICAgIHRoaXMudGltZU91dFZhciA9IGk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VGltZU91dFZhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lT3V0VmFyO1xyXG4gICAgfSxcclxuICAgIC8vc3RvcmVzIHRoZSBwYXJlbnQgbm9kZSBvZiB0aGUgc2xpZGVzIFxyXG4gICAgc2V0UGFyTm9kZShlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5wYXJOb2RlID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnNsaWRlTGVuZ3RoID0gdGhpcy5wYXJOb2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNsaWRlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvdC1uYXZpZ2F0aW9uQ29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVEb3RzKCkpO1xyXG4gICAgICAgIHNldEFjdGl2ZURvdCh0aGlzLmN1cnJlbnRQb3MpXHJcbiAgICAgICAgYWRkQXJyb3dGdW5jdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnJ1blNsaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vT2JqZWN0IHRoYXQgZ2l2ZXMgZnVuY3Rpb25hbGl0eSB0byB0aGUgZG90cyByZXByZXNlbnR0aW5nIGVhY2ggc2xpZGUgXHJcbmNvbnN0IGRvdFBvaW50ZXIgPSB7XHJcbiAgICBhY3RpdmVEb3Q6IDAsXHJcbiAgICBjb250YWluZXJOb2RlOiBudWxsLFxyXG4gICAgZG90QXJyYXk6IFtdLFxyXG4gICAgbnVtRG90czogMCxcclxuICAgIHNldERvdENvbnRhaW5lck5vZGUobm9kZSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTm9kZSA9IG5vZGU7XHJcbiAgICAgICAgdGhpcy5kb3RBcnJheSA9IG5vZGUuY2hpbGROb2RlcztcclxuICAgICAgICB0aGlzLm51bURvdHMgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGdldENvbnRhaW5lck5vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyTm9kZTtcclxuICAgIH0sXHJcbiAgICBnZXREb3RBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb3RBcnJheTtcclxuICAgIH0sXHJcbiAgICBnZXROdW1Eb3RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bURvdHM7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWN0aXZlRG90KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZURvdDtcclxuICAgIH0sXHJcbiAgICBzZXRBY3RpdmVEb3QoaSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRG90ID0gaTtcclxuICAgIH1cclxufVxyXG5cclxuLy9UaGlzIGZ1bmN0aW9uIGhlbHBzIHRoZSB1c2VyIGNob29zZSB0aGUgc2xpZGUgdGhleSB3YW50IHRvIGdvIHRvLiBcclxuZnVuY3Rpb24gc2V0Q3VycmVudChpKSB7XHJcbiAgICBzbGlkZVBvaW50ZXIuc3RvcFNsaWRlKCk7XHJcbiAgLy8gIGlmIChzbGlkZVBvaW50ZXIuZ2V0VGltZU91dFZhcigpKVxyXG4gICAvLyAgICAgc2xpZGVQb2ludGVyLmNhbmNlbFRpbWVPdXQoKTtcclxuICAgIHNldE9ubHlPbmVUb3AoaSk7XHJcbiAgICBzbGlkZVBvaW50ZXIuc2V0VHJhbnNpdGlvbk5vZGUoaSlcclxuICAgIHN3aXRjaFNsaWRlcyhpKTtcclxuICAgIHNsaWRlUG9pbnRlci5jdXJyZW50UG9zID0gaTtcclxuICAgIHNldEFjdGl2ZURvdChpKTtcclxuICAgIHNsaWRlUG9pbnRlci5ydW5TbGlkZSgpO1xyXG59XHJcblxyXG4vL0Z1bmN0aW9uIHJlc3BvbnNpYmxlIGZvciBzd2l0Y2hpbmcgc2xpZGVzIFxyXG5mdW5jdGlvbiBzd2l0Y2hTbGlkZXMoaSkge1xyXG4gICAgY29uc3Qgb2xkTm9kZSA9IHNsaWRlUG9pbnRlci5wYXJOb2RlLmNoaWxkTm9kZXNbc2xpZGVQb2ludGVyLmN1cnJlbnRQb3NdO1xyXG4gICAgY29uc3QgbmV3Tm9kZSA9IHNsaWRlUG9pbnRlci5wYXJOb2RlLmNoaWxkTm9kZXNbaV07XHJcbiAgICAvL29sZCBub2RlXHJcbiAgICAvL1RoaXMgaXMgdG8gaGVscCBrZWVwIHRyYWNrIG9mIHRoZSBuZXh0IHNsaWRlIGZvciB0aGUgZnVuY3Rpb24gcmV2ZXJzZVRyYW5zaXRcclxuICAgIHNsaWRlUG9pbnRlci5zZXROZXh0Q2hpbGROb2RlKHNsaWRlUG9pbnRlci5wYXJOb2RlLmNoaWxkTm9kZXNbaV0pO1xyXG4gICAgLy9UaGUgZm9sbG93aW5nIGNvZGUgcHJlc2VudHMgdGhlIGZhZGUtaW4gZWZmZWN0IHNvIHRoYXQgdGhlIGN1cnJlbnQgYW5kIG5leHQgc2xpZGUgZ2V0cyB0aGUgaW1tZWRpYXRlIHVwZGF0ZSB0byB0aGVpciBwcm9wZXJ0aWVzXHJcbiAgICBvbGROb2RlLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSAhaW1wb3J0YW50JztcclxuICAgIG5ld05vZGUuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lICFpbXBvcnRhbnQnO1xyXG5cclxuICAgIC8vVGhlIGZvbGxvd2luZyBzZXJpZXMgb2YgaWYgc3RhdGVtZW50cyBhcmUgbmVjZXNzYXJ5IGZvciByZXNldHRpbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGN1cnJlbnQgYW5kIG5leHQgc2xpZGVzIHRvIHRoZWlyIGludGl0aWFsIHZhbHVlc1xyXG4gICAgLy9XaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBlaXRoZXIgbGVmdCBvciByaWdodCBhcnJvd3MsIHRoZSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGdldHMgY2xlYXJlZCBhbmQgdGhlIGJsb2NrIG9mIGNvZGUgdGhhdCB1cGRhdGVzIFxyXG4gICAgLy90aGUgcHJvcGVydGllcyBvZiB0aGUgY3VycmVudCBhbmQgbmV4dCBzbGlkZSBkb2Vzbid0IGdldCBleGVjdXRlZC5cclxuICAgIC8vVGh1cywgdGhlIGZvbGxvd2luZyBjb2RlIGlzIG5lY2Vzc2FyeS4gXHJcbiAgICBpZiAob2xkTm9kZS5zdHlsZS5vcGFjaXR5ICE9ICcxJykge1xyXG4gICAgICAgIG9sZE5vZGUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH1cclxuICAgIGlmIChvbGROb2RlLnN0eWxlLmRpc3BsYXkgIT09ICdibG9jaycpIHtcclxuICAgICAgICBvbGROb2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfVxyXG4gICAgaWYgKG9sZE5vZGUuc3R5bGUuekluZGV4ICE9PSAnMScpIHtcclxuICAgICAgICBvbGROb2RlLnN0eWxlLnpJbmRleCA9ICcxJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAobmV3Tm9kZS5zdHlsZS5vcGFjaXR5ICE9PSAnMScpIHtcclxuICAgICAgICBuZXdOb2RlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3Tm9kZS5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcclxuICAgICAgICBuZXdOb2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3Tm9kZS5zdHlsZS56SW5kZXggIT09ICcwJykge1xyXG4gICAgICAgIG5ld05vZGUuc3R5bGUuekluZGV4ID0gJzAnO1xyXG4gICAgfVxyXG4gICAgLy9zZXQgdGhlIGFjaXR2ZSBkb3QgXHJcbiAgICBzZXRBY3RpdmVEb3QoaSlcclxuXHJcbiAgICAvL1RoZSBmb2xsb3dpbmcgYmxvY2sgb2YgY29kZSBpbmNsdWRpbmcgdGhlIHNldFRpbWVvdXQgYmxvY2sgYXJlIHJlc3BvbnNpYmxlIGZvciB0aGUgZmFkZS1pbiBlZmZlY3RzIHdoZW4gc3dpdGNoaW5nIHNsaWRlc1xyXG4gICAgLy9JdCdzIGltcG9ydGFudCB0aGF0IHRoZSB0cmFuc2l0aW9uIHByb3BlcnR5IG9ubHkgZm9jdXNlcyBvbiBjaGFuZ2VzIHRvIG9wYWNpdHkgb25seS5cclxuICAgIC8vSW5pdGlhbGx5LCBJIG1hZGUgdGhlIG1pc3Rha2Ugb2Ygc2V0dGluZyB0aGUgdHJhbnNpdGlvbiBwcm9wZXJ0eSB0byBmb2N1cyBvbiAnYWxsJyBjaGFuZ2VzLiBcclxuICAgIG9sZE5vZGUuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDJzIGVhc2Utb3V0JztcclxuICAgIG9sZE5vZGUuc3R5bGUub3BhY2l0eSA9ICcwLjAnO1xyXG5cclxuICAgIG5ld05vZGUuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDJzIGVhc2UtaW4nO1xyXG4gICAgbmV3Tm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIG5ld05vZGUuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xyXG5cclxuICAgIC8vQXMgdGhlIGN1cnJlbnQgc2xpZGUgZmFkZXMsIHRoZSBuZXcgc2xpZGUgc2hvdWxkIGJlIHZpc2libGUsIGJ1dCBpdCBpcyBzdGlsbCBzdGFja2VkIHVuZGVyIHRoZSBjdXJyZW50IHNsaWRlLlxyXG4gICAgLy9UaGUgb2JqZWN0IHRyYW5zaXRpb25Ob2RlIGtlZXBzIHRyYWNrIG9mIHRoZSBuZXh0IHNsaWRlLiBcclxuICAgIC8vVGhlIGZvbGxvd2luZyBjb2RlIGNoZWNrcyB0byBzZWUgd2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgbmV4dCBzbGlkZSBpcyBzdGlsbCBlcXVhbCB0byB0aGUgdHJhbnNpdGlvbk5vZGVcclxuICAgIC8vSWYgdGhlIHVzZXIgY2xpY2tzIG9uIG9uZSBvZiB0aGUgYXJyb3cgYnV0dG9ucyBvciBkb3RzLCB0aGUgdHJhbnNpdGlvbk5vZGUgcG9pbnRzIHRvIGEgZGlmZmVyZW50IHNsaWRlXHJcbiAgICAvL1RodXMsIHRoZSBjb2RlIGluIHRoZSByZXNvbHZlIGNhc2UgZG9lcyBub3QgZ2V0IGV4ZWN1dGVkLiBcclxuICAgIGNvbnN0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzbGlkZVBvaW50ZXIuc2V0VGltZU91dFZhcihzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYoc2xpZGVQb2ludGVyLnRyYW5zaXRpb25Ob2RlID09PSBuZXdOb2RlKSAgICBcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTsgXHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCkpO1xyXG4gICAgICAgIH0pXHJcbiAgXHJcbiAgICBteVByb21pc2UudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZlJylcclxuICAgICAgICAgICAgbmV3Tm9kZS5zdHlsZS56SW5kZXggPSAnMSc7XHJcbiAgICAgICAgICAgIG9sZE5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgb2xkTm9kZS5zdHlsZS56SW5kZXggPSAnMCc7XHJcblxyXG4gICAgICAgICAgICAvL3NldHRpbmcgdGhlIG9wYWN0aXkgb2YgdGhlIGN1cnJlbnQgc2xpZGUsIHdoaWNoIGlzIHRoZSBub3cgdGhlIG9sZCBzbGlkZSwgdG8gMS4wIG1ha2VzIHN1cmUgdGhhdCBuZXh0IHRpbWUgdGhlIHBvaW50ZXIgaXRlcmF0ZXMgXHJcbiAgICAgICAgICAgIC8vdGhyb3VnaCB0aGlzIHNsaWRlLCBpdCBpcyB2aXNpYmxlLiBPdGhlcndpc2UsIGl0IHdvbid0IGFwcGVhciBpbW1lZGlhdGVseS4gXHJcbiAgICAgICAgICAgIG9sZE5vZGUuc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xyXG4gICAgICAgICAgICBzZXRPbmx5T25lVG9wKGkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWplY3QnKVxyXG4gICAgICAgIH1cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gaW5jcmVtZW50U2xpZGUoKSB7XHJcbiAgICBpZiAoc2xpZGVQb2ludGVyLmN1cnJlbnRQb3MgPT09IHNsaWRlUG9pbnRlci5zbGlkZUxlbmd0aCAtIDEpIHtcclxuICAgICAgICBzbGlkZVBvaW50ZXIuc2V0VHJhbnNpdGlvbk5vZGUoMClcclxuICAgICAgICBzd2l0Y2hTbGlkZXMoMClcclxuICAgICAgICBzbGlkZVBvaW50ZXIuY3VycmVudFBvcyA9IDA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzbGlkZVBvaW50ZXIuc2V0VHJhbnNpdGlvbk5vZGUoc2xpZGVQb2ludGVyLmN1cnJlbnRQb3MgKyAxKVxyXG4gICAgICAgIHN3aXRjaFNsaWRlcyhzbGlkZVBvaW50ZXIuY3VycmVudFBvcyArIDEpO1xyXG4gICAgICAgIHNsaWRlUG9pbnRlci5jdXJyZW50UG9zKys7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRlcyB0aGUgRE9NIGVsZW1lbnRzIG9mIHRoZSBzbGlkZSBmb3IgZWFjaCBpbWFnZSB0aGF0IGV4aXN0cyBcclxuZXhwb3J0IGNvbnN0IGltYWdlU3RhY2sgPSAoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplQXJyYXkoKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdzbGlkZXMnKTtcclxuICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICBpbWFnZU9iai5pbWFnZUFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2VFbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcclxuICAgICAgICBpbWFnZUVsZS5zcmMgPSBpdGVtO1xyXG4gICAgICAgIGltYWdlRWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xpZGUnKVxyXG4gICAgICAgIGltYWdlRWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgaW1hZ2UtJHtjb3VudH1gKVxyXG4gICAgICAgIGltYWdlRWxlLnN0eWxlLm9wYWNpdHkgPSAnMS4wJztcclxuICAgICAgICBpbWFnZUVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGltYWdlRWxlLnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaW1hZ2VFbGUpO1xyXG4gICAgfSlcclxuICAgIHNsaWRlUG9pbnRlci5zZXRQYXJOb2RlKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8vUmVuZGVyIGVhY2ggZG90IGZvciBlYWNoIGltYWdlIHRoYXQgZXhpc3RzIFxyXG5jb25zdCBnZW5lcmF0ZURvdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdkb3QtY29udGFpbmVyJyk7XHJcbiAgICBkb3RQb2ludGVyLnNldERvdENvbnRhaW5lck5vZGUoZWxlbWVudCk7XHJcbiAgICBjb25zdCBudW1Eb3RzID0gaW1hZ2VPYmouZ2V0TGVuZ3RoKCk7XHJcbiAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgaW1hZ2VPYmouaW1hZ2VBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RvdCcpO1xyXG4gICAgICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRvdC0ke2NvdW50fWApXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb3QpXHJcbiAgICAgICAgY29uc3QgZG90SUQgPSBjb3VudDtcclxuICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEN1cnJlbnQoZG90SUQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY291bnQrKztcclxuICAgIH0pXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuLy9zZXRzIHNlbGVjdGVkIGRvdCBhcyBhY3RpdmUgXHJcbmV4cG9ydCBjb25zdCBzZXRBY3RpdmVEb3QgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgZG90QXJyYXkgPSBkb3RQb2ludGVyLmdldERvdEFycmF5KCk7XHJcbiAgICBjb25zdCBvbGREb3QgPSBkb3RBcnJheVtkb3RQb2ludGVyLmdldEFjdGl2ZURvdCgpXTtcclxuICAgIGNvbnN0IG5ld0RvdCA9IGRvdEFycmF5W2ldO1xyXG4gICAgb2xkRG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1kb3QnKTtcclxuICAgIG9sZERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcclxuICAgIG5ld0RvdC5jbGFzc0xpc3QucmVtb3ZlKCdkb3QnKTtcclxuICAgIG5ld0RvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZG90Jyk7XHJcbiAgICBkb3RQb2ludGVyLnNldEFjdGl2ZURvdChpKVxyXG59XHJcblxyXG4vL2FkZHMgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbmFsaXR5IG9mIHRoZSBhcnJvd3MgXHJcbmNvbnN0IGFkZEFycm93RnVuY3Rpb25zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jyk7XHJcbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWdodCcpO1xyXG4gICAgbGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbWFudWFsRGVjcmVtZW50KCk7XHJcbiAgICB9KTtcclxuICAgIHJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBtYW51YWxJbmNyZW1lbnQoKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy9HaXZlcyB0aGUgdXNlciB0aGUgYWJpbGl0eSB0byBjbGljayBvbiB0aGUgcmlnaHQgYXJyb3cgYnV0dG9uIGFuZCBtb3ZlIGZvcndhcmQgb25lIHNsaWRlIFxyXG5jb25zdCBtYW51YWxJbmNyZW1lbnQgPSAoKSA9PiB7XHJcbiAgICAvL3N0b3BzIHRoZSBhdXRvbWF0aWNzIGl0ZXJhdGlvbiBvZiB0aGUgc2xpZGUgXHJcbiAgICBzbGlkZVBvaW50ZXIuc3RvcFNsaWRlKCk7XHJcblxyXG4gICAgY29uc3QgY3VyTm9kZSA9IHNsaWRlUG9pbnRlci5wYXJOb2RlLmNoaWxkTm9kZXNbc2xpZGVQb2ludGVyLmdldEN1cnJlbnQoKV07XHJcblxyXG4gICAgLy9XaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYXJyb3cgYnV0dG9uLCBpdCBzdG9wcyBhbnkgY3VycmVudCB0cmFuc2l0aW9uIHRoYXQgaGFwcGVucyBhbmQgY2xlYXJzIGFueSBzZXRUaW1lb3V0IGJsb2NrIG9mIGNvZGUgZnJvbSBiZWluZyBleGVjdXRlZFxyXG4gICAvLyBpZiAoc2xpZGVQb2ludGVyLmdldFRpbWVPdXRWYXIoKSlcclxuICAgICAvLyAgIHNsaWRlUG9pbnRlci5jYW5jZWxUaW1lT3V0KCk7XHJcblxyXG4gICAgaWYgKHNsaWRlUG9pbnRlci5jdXJyZW50UG9zID09PSBzbGlkZVBvaW50ZXIuc2xpZGVMZW5ndGggLSAxKSB7XHJcbiAgICAgICAgc2xpZGVQb2ludGVyLnNldFRyYW5zaXRpb25Ob2RlKDApXHJcbiAgICAgICAgc3dpdGNoU2xpZGVzKDApXHJcbiAgICAgICAgc2xpZGVQb2ludGVyLmN1cnJlbnRQb3MgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2xpZGVQb2ludGVyLnNldFRyYW5zaXRpb25Ob2RlKHNsaWRlUG9pbnRlci5jdXJyZW50UG9zICsgMSlcclxuICAgICAgICBzd2l0Y2hTbGlkZXMoc2xpZGVQb2ludGVyLmN1cnJlbnRQb3MgKyAxKVxyXG4gICAgICAgIHNsaWRlUG9pbnRlci5jdXJyZW50UG9zICs9IDE7XHJcbiAgICB9XHJcbiAgICAvL3Jlc3RhcnQgdGhlIGF1dG9tYXRpYyBpdGVyYXRpb24gb2YgdGhlIHNsaWRlIFxyXG4gICAgc2xpZGVQb2ludGVyLnJ1blNsaWRlKCk7XHJcbn1cclxuXHJcbi8vR2l2ZXMgdGhlIHVzZXIgdGhlIGFiaWxpdHkgdG8gY2xpY2sgb24gdGhlIGxlZnQgYXJyb3cgYnV0dG9uIGFuZCBtb3ZlIGJhY2sgb25lIHNsaWRlIFxyXG5jb25zdCBtYW51YWxEZWNyZW1lbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZmlyZScpXHJcbiAgICBzbGlkZVBvaW50ZXIuc3RvcFNsaWRlKCk7XHJcbiAgICBjb25zdCBjdXJOb2RlID0gc2xpZGVQb2ludGVyLnBhck5vZGUuY2hpbGROb2Rlc1tzbGlkZVBvaW50ZXIuZ2V0Q3VycmVudCgpXTtcclxuICAgIGNvbnN0IHJldmVyc2VkTm9kZSA9IHNsaWRlUG9pbnRlci5uZXh0Q2hpbGROb2RlO1xyXG4gICAgLy9pZiAoc2xpZGVQb2ludGVyLmdldFRpbWVPdXRWYXIoKSlcclxuICAgICAvLyAgIHNsaWRlUG9pbnRlci5jYW5jZWxUaW1lT3V0KCk7XHJcblxyXG4gICAgaWYgKHNsaWRlUG9pbnRlci5jdXJyZW50UG9zID09PSAwKSB7XHJcbiAgICAgICAgc2xpZGVQb2ludGVyLnNldFRyYW5zaXRpb25Ob2RlKHNsaWRlUG9pbnRlci5zbGlkZUxlbmd0aCAtIDEpOyBcclxuICAgICAgICBzd2l0Y2hTbGlkZXMoc2xpZGVQb2ludGVyLnNsaWRlTGVuZ3RoIC0gMSlcclxuICAgICAgICBzbGlkZVBvaW50ZXIuY3VycmVudFBvcyA9IHNsaWRlUG9pbnRlci5zbGlkZUxlbmd0aCAtIDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzbGlkZVBvaW50ZXIuc2V0VHJhbnNpdGlvbk5vZGUoc2xpZGVQb2ludGVyLmN1cnJlbnRQb3MgLSAxKTsgXHJcbiAgICAgICAgc3dpdGNoU2xpZGVzKHNsaWRlUG9pbnRlci5jdXJyZW50UG9zIC0gMSlcclxuICAgICAgICBzbGlkZVBvaW50ZXIuY3VycmVudFBvcyAtPSAxO1xyXG4gICAgfVxyXG4gICAgc2xpZGVQb2ludGVyLnJ1blNsaWRlKCk7XHJcbn1cclxuXHJcbi8vVXNlZCB0byBzZXQgdGhlIHByb3BlcnRpZXMgb2YgYSBzbGlkZSBiYWNrIHRvIGl0cyBkZWZhdWx0IHN0YXRlLiBcclxuY29uc3Qgc2V0QXNSZWd1bGFyU2xpZGUgPSAobm9kZSkgPT4ge1xyXG4gICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUgIWltcG9ydGFudCc7XHJcbiAgICBub2RlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBub2RlLnN0eWxlLnpJbmRleCA9ICcwJztcclxufVxyXG5cclxuLy9UaGlzIG1ha2VzIHN1cmUgdGhlIGN1cnJlbnQgc2xpZGUgaXMgdGhlIG9ubHkgb25lIG9uIHRvcCBvZiB0aGUgc3RhY2sgb2Ygc2xpZGVzLiBcclxuLy9XaGVuZXZlciB0aGUgdXNlciBjbGlja3Mgb24gb25lIG9mICB0aGUgYXJyb3cgYnV0dG9ucyBvciBkb3RzIHRvIHN3aXRjaCBzbGlkZXMsXHJcbi8vdGhlIHNldFRpbWVvdXQgYmxvY2sgb2YgY29kZSB3aWxsIGdldCBjbGVhcmVkIGluIHRoZSBmdW5jdGlvbiAnc3dpdGNoU2xpZGVzJy4gVGhpcyBmdW5jdGlvbiBpcyBuZWNjZXNzYXJ5IHRvIFxyXG4vL3VwZGF0ZSB0aGUgcHJvcGVydGllcyBvZiBhbGwgc2xpZGVzIHRvIGJlIGJhY2sgdG8gdGhlaXIgZGVmYXVsdCBzdGF0ZSB3aGlsZSB0aGUgY3VycmVudCBzbGlkZSByZW1haW5zIG9uIHRvcCBvZiB0aGUgc3RhY2suIFxyXG5jb25zdCBzZXRPbmx5T25lVG9wID0gKG5vZGVQb3MpID0+IHtcclxuICAgIHNsaWRlUG9pbnRlci5wYXJOb2RlLmNoaWxkTm9kZXMuZm9yRWFjaChzbGlkZSA9PiB7XHJcbiAgICAgICAgaWYgKHNsaWRlICE9PSBzbGlkZVBvaW50ZXIucGFyTm9kZS5jaGlsZE5vZGVzW25vZGVQb3NdKSB7XHJcbiAgICAgICAgICAgIHNldEFzUmVndWxhclNsaWRlKHNsaWRlKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0L2xlZnQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9yaWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI21haW5Db250YWluZXIge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbmhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21haW5JbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQsICNyaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYm9yZGVyOiBub25lIDBweDtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuI2xlZnQ6Zm9jdXMsICNyaWdodDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0IHtcXHJcXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbnJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKmRvdCBjb250YWluZXIqL1xcclxcbiNkb3QtbmF2aWdhdGlvbkNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jZG90LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxcclxcbn1cXHJcXG5cXHJcXG4uZG90LCAuYWN0aXZlLWRvdCB7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNkMGQwZDA7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRvdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtZG90IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9teXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLFdBQVc7QUFDWCxZQUFZOztBQUVaOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5REFBeUM7SUFDekMsT0FBTztBQUNYOztBQUVBO0FBQ0EseURBQTBDO0FBQzFDLFFBQVE7QUFDUjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21haW5Db250YWluZXIge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbmhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI21haW5JbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2xlZnQsICNyaWdodCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYm9yZGVyOiBub25lIDBweDtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuI2xlZnQ6Zm9jdXMsICNyaWdodDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNsZWZ0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0L2xlZnQucG5nJyk7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNyaWdodCB7XFxyXFxuYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0L3JpZ2h0LnBuZycpO1xcclxcbnJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKmRvdCBjb250YWluZXIqL1xcclxcbiNkb3QtbmF2aWdhdGlvbkNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jZG90LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxyXFxuICAgIG1hcmdpbjogYXV0bzsgXFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IFxcclxcbn1cXHJcXG5cXHJcXG4uZG90LCAuYWN0aXZlLWRvdCB7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNkMGQwZDA7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRvdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtZG90IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblxyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuXHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblxyXG5cclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblxyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG5cclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcblxyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIHVybDtcclxuICB9XHJcblxyXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXHJcblxyXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xyXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcclxuICB9XHJcblxyXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcclxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XHJcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XHJcbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcclxuXHJcblxyXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcclxuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHVybDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG5cclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcclxuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sPlxcclxcbjxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPk5ldyBQcm9qZWN0PC90aXRsZT5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICAgIDxkaXYgaWQ9XFxcIm1haW5Db250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiYXJyb3ctbmF2aWdhdGlvbkNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibGVmdFxcXCIgY2xhc3M9XFxcIm5hdmlnYXRpb24taWNvblxcXCIgPjwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInJpZ2h0XFxcIiBjbGFzcz1cXFwibmF2aWdhdGlvbi1pY29uXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiZG90LW5hdmlnYXRpb25Db250YWluZXJcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXlzdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215c3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcblxyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG5cclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcblxyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG5cclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG5cclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuXHJcblxyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcblxyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuXHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuXHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcblxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG5cclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG5cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuXHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfSAvLyBGb3Igb2xkIElFXHJcblxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuXHJcblxyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcblxyXG5cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJfIiwicmVxdWlyZSIsImFudGFydGljYSIsImxvYWRJbWFnZSIsImluaXRpYWxpemVBcnJheSIsImltYWdlU3RhY2siLCJzbGlkZVBvaW50ZXIiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwibWFpbkNvbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJlYXJ0aCIsImVjbGlwc2UiLCJoRmFsbHMiLCJtaWxreVdheSIsIk5JY2VsYW5kIiwicG9vbCIsInBpY3R1cmUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2VPYmoiLCJpbWFnZUFycmF5IiwicHVzaEltYWdlIiwiaW1hZ2UiLCJwdXNoIiwicmVzZXRBcnJheSIsImxlbmd0aCIsImdldEFycmF5IiwiZ2V0SW1hZ2UiLCJpIiwiYWxlcnQiLCJnZXRMZW5ndGgiLCJjdXJyZW50UG9zIiwib2xkUG9zIiwicGFyTm9kZSIsIm5leHRDaGlsZE5vZGUiLCJzbGlkZUxlbmd0aCIsInNsaWRlVGltZXIiLCJ0aW1lT3V0VmFyIiwidHJhbnNpdGlvbk5vZGUiLCJzZXRUcmFuc2l0aW9uTm9kZSIsInBvcyIsImNoaWxkTm9kZXMiLCJpbml0aWFsaXplU2xpZGUiLCJmaXJzdFNsaWRlIiwic3R5bGUiLCJ6SW5kZXgiLCJvcGFjaXR5IiwiZGlzcGxheSIsImdldEN1cnJlbnQiLCJzZXRDdXJyZW50UG9zIiwicnVuU2xpZGUiLCJzZXRJbnRlcnZhbCIsImluY3JlbWVudFNsaWRlIiwic3RvcFNsaWRlIiwiY2xlYXJJbnRlcnZhbCIsInN0b3BTdGFydCIsInNldE5leHRDaGlsZE5vZGUiLCJzZXRUaW1lciIsImNhbmNlbFRpbWVPdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lT3V0VmFyIiwiZ2V0VGltZU91dFZhciIsInNldFBhck5vZGUiLCJlbGVtZW50IiwiZ2VuZXJhdGVEb3RzIiwic2V0QWN0aXZlRG90IiwiYWRkQXJyb3dGdW5jdGlvbnMiLCJkb3RQb2ludGVyIiwiYWN0aXZlRG90IiwiY29udGFpbmVyTm9kZSIsImRvdEFycmF5IiwibnVtRG90cyIsInNldERvdENvbnRhaW5lck5vZGUiLCJub2RlIiwiZ2V0Q29udGFpbmVyTm9kZSIsImdldERvdEFycmF5IiwiZ2V0TnVtRG90cyIsImdldEFjdGl2ZURvdCIsInNldEN1cnJlbnQiLCJzZXRPbmx5T25lVG9wIiwic3dpdGNoU2xpZGVzIiwib2xkTm9kZSIsIm5ld05vZGUiLCJ0cmFuc2l0aW9uIiwibXlQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwidGhlbiIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb3VudCIsImZvckVhY2giLCJpdGVtIiwiaW1hZ2VFbGUiLCJzcmMiLCJkb3QiLCJkb3RJRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbGREb3QiLCJuZXdEb3QiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJsZWZ0IiwicmlnaHQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibWFudWFsRGVjcmVtZW50IiwibWFudWFsSW5jcmVtZW50IiwiY3VyTm9kZSIsInJldmVyc2VkTm9kZSIsInNldEFzUmVndWxhclNsaWRlIiwibm9kZVBvcyIsInNsaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==