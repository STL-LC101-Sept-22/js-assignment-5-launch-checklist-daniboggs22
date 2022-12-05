// Write your JavaScript code here!
import { addDestinationInfo } from "./scriptHelper";
import { validateInput } from "./scriptHelper";
import { formSubmission } from "./scriptHelper";
import { pickPlanet } from "./scriptHelper";
import { myFetch } from "./scriptHelper";


const form = document.getElementById("testForm");
        let pilotNameInput = document.getElementById("pilotName");
        let copilotNameInput = document.getElementById("copilotName");
        let fuelLevelInput = document.getElementById("fuelLevel");
        let cargoMassInput = document.getElementById("cargoMass");

 window.addEventListener("load", function() {
     form.addEventListener("submitForm", function(event) {
        
           if(pilotNameInput.value === ''|| copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '' ){
            alert("All fields are required!");
            event.preventDefault();
           }
         });
    });
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   //})
   
});
//validateInput();