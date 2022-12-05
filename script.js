import { addDestinationInfo } from "./scriptHelper";
import { validateInput } from "./scriptHelper";
import { formSubmission } from "./scriptHelper";
import { pickPlanet } from "./scriptHelper";
import { myFetch } from "./scriptHelper";
// Write your JavaScript code here!



 window.addEventListener("load", function() {
    element.style.visibility = 'hidden';
      form.addEventListener("submitForm", function(event) {
        formSubmission();
        
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
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
   //})
   
});
formSubmission();