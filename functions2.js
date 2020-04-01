// FUNCTION-RESUABLE PIECE OF CODE THAT PERFORMS A TASK
/* EXAMPLE

function tuesday(argument){
    console.log("where did Monday go?')
    console.log("Why is there so much pollen?!")
    console.log("has George had two cups of coffee yet?")
}

tuesday(paraeter);
*/

/*
function sum(example1, example2);{
    var sumOfTwo = example1 + example2;
    return sumOfTwo;
}

console.log(sum(2,3));// calling

//declaring/instantiating= the whole thing
*/

// SCOPE: the set variables of pieces of code has access to
// only functions create scrope
//parameters and variables declared inside a function and LOCAL to toat function's scrop
// 

/* EXAMPLE OF SCOPE
function helpMe(){
    let msg= "I'm on fire!";
    return msg;
}

msg(the variable is the scoped to the helpMe function)
msg; // UNDEFINED outside window
*/

//LEXICAL SCOPE: VARIABLES REFER TO THEIR LOCAL ENVIRONMENT
//SIMILAR TO ABOVE EX



// S C O P E
/*
function outer (){
    let a = "outer string";
    let b = {key:"value"};
    console.log(a); // outer string
    console.log(b); //{key:'value'}
    function inner(a,b){
        console.log(a); // argument string
        console.log(b); // {innerKey:'inner value'}
    }

    inner('argument string', {innerKey:'inner value'});
}
outer();
*/

let slideshow ={
    photoList: ["Family", "Friends", "Pets"],
    currentPhotoIndex: 0, 
    nextphoto: function(){
        
        if (this.currentPhotoIndex == (this.photoList.length-1)){
            this.pause();
            console.log('End of Slideshow');
            
        } 
        else {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    prevPhoto: function(){
        if (this.currentPhotoIndex == 0){
            console.log('End of Slideshow');
        } 
        else {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        }
    },
    getCurrentPhoto: function(){
        return this.photoList[this.currentPhotoIndex];
    },

    playInterval: null,

    play: function(){
        playInterval = setInterval(()=>{
            this.nextphoto();
        },2000);
    },
    pause: function(){
        clearInterval(playInterval);
    }
 };

 console.log(slideshow.getCurrentPhoto());
 slideshow.play();