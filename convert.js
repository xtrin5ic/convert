//This code is incomplete as I ran out of time.
//I am happy I got the conversion to work, but would have liked to change the order of the case and arguments.
//The test is incomplete aswell, but I got it working on a separate test run.

// Input is always inches, but the output should be defined according to the following listing 

// -mm -> Converts to millimetres
// -cm -> Converts to centimetres
// -m -> Converts to meters

// 1 inch = 2,54cm = 0,0254 m = 25,4 mm

//konvertere fra inches til metrisk


const arg = process.argv.slice(2);

arg[1] = Number(arg[1]);
 
switch (arg[0]) {
    case '-cm':
        arg[2] = 2.54
        console.log(`Inches to cm : ${arg[1]}
        * ${arg[2]} = ${arg[1] * arg[2]}`);
        break;
 
    case '-mm':
        arg[2] = 25.4
        console.log(`Inches to mm : ${arg[1]}
        * ${arg[2]} = ${arg[1] * arg[2]}`);
        break;
 
    case '-m':
        arg[2] = 0.0254
        console.log(`Inches to m : ${arg[1]}
        * ${arg[2]} = ${arg[1] * arg[2]}`);
        break;
  
    default: console.log(
        `operation cannot be performed!!`);
}



const testFramWork = {};
const TF = testFramWork;

TF.test = function(given, expecting, ) {
    if(given === expecting) {
        console.log(`Positive Expected : ${expecting} recieved : ${given}`);
    } else { 
        console.log(`Negative Expected : ${expecting} recieved : ${given}`);
    }    
}

TF.isCm(converter(cm), "-cm");
TF.isMm(converter(mm), "-mm");
TF.isM(converter(m), "-m");
