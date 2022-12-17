

// Write your JavaScript code here!
 window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet (listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    
       console.log(addDestinationInfo);
  
});

let list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
const form = document.getElementById("launchForm");

form.addEventListener("submit", function(event) {
   event.preventDefault();
//Update with variables and test
//alert("submit button clicked!");
formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
});
});
