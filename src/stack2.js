import antartica from './images/Antartica.jpg';
import earth from './images/Earth.jpg';
import eclipse from './images/eclipse.jpg';
import hFalls from './images/Havasu Falls.jpg';
import milkyWay from './images/MilkyWay.jpg';
import NIceland from './images/NorthernIceland.jpg';
import pool from './images/Pool.jpg';
import { initializeArray, imageObj } from './loadImage.js';

//this is alternative way of writing the program
//It uses the method "Promise" in the switch slides statement.

export const slidePointer = {
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
        this.transitionNode = this.parNode.childNodes[pos]
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
        this.slideTimer = setInterval(incrementSlide, 5000)
    },
    stopSlide() {
        clearInterval(this.slideTimer);
    },
    stopStart() {
        clearInterval(this.slideTimer);
        //    clearTimeout(this.timeOutVar);
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
        setActiveDot(this.currentPos)
        addArrowFunctions();
        this.runSlide();
    }
}

//Object that gives functionality to the dots representting each slide 
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
}

//This function helps the user choose the slide they want to go to. 
function setCurrent(i) {
    slidePointer.stopSlide();
  //  if (slidePointer.getTimeOutVar())
   //     slidePointer.cancelTimeOut();
    setOnlyOneTop(i);
    slidePointer.setTransitionNode(i)
    switchSlides(i);
    slidePointer.currentPos = i;
    setActiveDot(i);
    slidePointer.runSlide();
}

//Function responsible for switching slides 
function switchSlides(i) {
    const oldNode = slidePointer.parNode.childNodes[slidePointer.currentPos];
    const newNode = slidePointer.parNode.childNodes[i];
    //old node
    //This is to help keep track of the next slide for the function reverseTransit
    slidePointer.setNextChildNode(slidePointer.parNode.childNodes[i]);
    //The following code presents the fade-in effect so that the current and next slide gets the immediate update to their properties
    oldNode.style.transition = 'none !important';
    newNode.style.transition = 'none !important';

    //The following series of if statements are necessary for resetting the properties of the current and next slides to their intitial values
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
    }
    //set the acitve dot 
    setActiveDot(i)

    //The following block of code including the setTimeout block are responsible for the fade-in effects when switching slides
    //It's important that the transition property only focuses on changes to opacity only.
    //Initially, I made the mistake of setting the transition property to focus on 'all' changes. 
    oldNode.style.transition = 'opacity 2s ease-out';
    oldNode.style.opacity = '0.0';

    newNode.style.transition = 'opacity 2s ease-in';
    newNode.style.display = 'block';
    newNode.style.opacity = '1.0';

    //As the current slide fades, the new slide should be visible, but it is still stacked under the current slide.
    //The object transitionNode keeps track of the next slide. 
    //The following code checks to see whether or not the current next slide is still equal to the transitionNode
    //If the user clicks on one of the arrow buttons or dots, the transitionNode points to a different slide
    //Thus, the code in the resolve case does not get executed. 
    const myPromise = new Promise((resolve, reject) => {
        slidePointer.setTimeOutVar(setTimeout(() => {
            if(slidePointer.transitionNode === newNode)    
                resolve(); 
            else 
                reject();
            }, 2000));
        })
  
    myPromise.then(
        function () {
            console.log('resolve')
            newNode.style.zIndex = '1';
            oldNode.style.display = 'none';
            oldNode.style.zIndex = '0';

            //setting the opactiy of the current slide, which is the now the old slide, to 1.0 makes sure that next time the pointer iterates 
            //through this slide, it is visible. Otherwise, it won't appear immediately. 
            oldNode.style.opacity = '1.0';
            setOnlyOneTop(i)
        },
        function () {
            console.log('reject')
        }
    )
}

function incrementSlide() {
    if (slidePointer.currentPos === slidePointer.slideLength - 1) {
        slidePointer.setTransitionNode(0)
        switchSlides(0)
        slidePointer.currentPos = 0;
    }
    else {
        slidePointer.setTransitionNode(slidePointer.currentPos + 1)
        switchSlides(slidePointer.currentPos + 1);
        slidePointer.currentPos++;
    }
}

//creates the DOM elements of the slide for each image that exists 
export const imageStack = () => {
    initializeArray();
    const element = document.createElement('div');
    element.setAttribute('id', 'slides');
    var count = 0;
    imageObj.imageArray.forEach(item => {
        const imageEle = document.createElement('IMG');
        imageEle.src = item;
        imageEle.setAttribute('class', 'slide')
        imageEle.setAttribute('id', `image-${count}`)
        imageEle.style.opacity = '1.0';
        imageEle.style.display = 'none';
        imageEle.style.zIndex = '0';
        count++;
        element.appendChild(imageEle);
    })
    slidePointer.setParNode(element);
    return element;
}

//Render each dot for each image that exists 
const generateDots = () => {
    const element = document.createElement('div')
    element.setAttribute('id', 'dot-container');
    dotPointer.setDotContainerNode(element);
    const numDots = imageObj.getLength();
    var count = 0;
    imageObj.imageArray.forEach(item => {
        const dot = document.createElement('div');
        dot.setAttribute('class', 'dot');
        dot.setAttribute('id', `dot-${count}`)
        element.appendChild(dot)
        const dotID = count;
        dot.addEventListener('click', () => {
            setCurrent(dotID);
        })
        count++;
    })
    return element;
}

//sets selected dot as active 
export const setActiveDot = (i) => {
    const dotArray = dotPointer.getDotArray();
    const oldDot = dotArray[dotPointer.getActiveDot()];
    const newDot = dotArray[i];
    oldDot.classList.remove('active-dot');
    oldDot.classList.add('dot');
    newDot.classList.remove('dot');
    newDot.classList.add('active-dot');
    dotPointer.setActiveDot(i)
}

//adds the necessary functionality of the arrows 
const addArrowFunctions = () => {
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    left.addEventListener('click', (event) => {
        event.preventDefault();
        manualDecrement();
    });
    right.addEventListener('click', (event) => {
        event.preventDefault();
        manualIncrement();

    });
}

//Gives the user the ability to click on the right arrow button and move forward one slide 
const manualIncrement = () => {
    //stops the automatics iteration of the slide 
    slidePointer.stopSlide();

    const curNode = slidePointer.parNode.childNodes[slidePointer.getCurrent()];

    //When the user clicks on the arrow button, it stops any current transition that happens and clears any setTimeout block of code from being executed
   // if (slidePointer.getTimeOutVar())
     //   slidePointer.cancelTimeOut();

    if (slidePointer.currentPos === slidePointer.slideLength - 1) {
        slidePointer.setTransitionNode(0)
        switchSlides(0)
        slidePointer.currentPos = 0;
    }
    else {
        slidePointer.setTransitionNode(slidePointer.currentPos + 1)
        switchSlides(slidePointer.currentPos + 1)
        slidePointer.currentPos += 1;
    }
    //restart the automatic iteration of the slide 
    slidePointer.runSlide();
}

//Gives the user the ability to click on the left arrow button and move back one slide 
const manualDecrement = () => {
    console.log('fire')
    slidePointer.stopSlide();
    const curNode = slidePointer.parNode.childNodes[slidePointer.getCurrent()];
    const reversedNode = slidePointer.nextChildNode;
    //if (slidePointer.getTimeOutVar())
     //   slidePointer.cancelTimeOut();

    if (slidePointer.currentPos === 0) {
        slidePointer.setTransitionNode(slidePointer.slideLength - 1); 
        switchSlides(slidePointer.slideLength - 1)
        slidePointer.currentPos = slidePointer.slideLength - 1;
    }
    else {
        slidePointer.setTransitionNode(slidePointer.currentPos - 1); 
        switchSlides(slidePointer.currentPos - 1)
        slidePointer.currentPos -= 1;
    }
    slidePointer.runSlide();
}

//Used to set the properties of a slide back to its default state. 
const setAsRegularSlide = (node) => {
    node.style.transition = 'none !important';
    node.style.opacity = '1';
    node.style.display = 'none';
    node.style.zIndex = '0';
}

//This makes sure the current slide is the only one on top of the stack of slides. 
//Whenever the user clicks on one of  the arrow buttons or dots to switch slides,
//the setTimeout block of code will get cleared in the function 'switchSlides'. This function is neccessary to 
//update the properties of all slides to be back to their default state while the current slide remains on top of the stack. 
const setOnlyOneTop = (nodePos) => {
    slidePointer.parNode.childNodes.forEach(slide => {
        if (slide !== slidePointer.parNode.childNodes[nodePos]) {
            setAsRegularSlide(slide);
        }
    })
}
