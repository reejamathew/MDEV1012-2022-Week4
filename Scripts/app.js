// IIFE - Immediately Invoked Function Express
//AKA - Anonymous Self-Executing Function
//"use strict"
(function(){

    //function format 1 - named function
   /* function Start(){

    }
*/
/*

// function format 2 - anonymous function - pointed at a by variable
let Start = function(){

}*/

// function format 3 - anonymous function -> arrow version
let Start = () =>
{
    console.log("App Started")

}



    window.addEventListener("load",Start)
})();