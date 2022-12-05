// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}


function validateInput(testInput) {
    if(testInput === Number){
        return "Is a Number";
    } else if(isNaN(testInput)=== "true"){
        return "Not a Number";
    } else if(testInput === ''){
        return "Empty";
    }

    };
    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const form = document.getElementById("testForm");
    form.addEventListener("submitForm", function(event){
        let pilotNameInput = document.getElementById("pilotName");
        let copilotNameInput = document.getElementById("copilotName");
        let fuelLevelInput = document.getElementById("fuelLevel");
        let cargoMassInput = document.getElementById("cargoMass");
        let faultyItems = document.getElementById("faultyItems");
        let launchStatus = document.getElementById("launchStatus");

     if(pilotNameInput.value === ''|| copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '' ){
        alert("All fields are required!");
        event.preventDefault();
     } else if (validateInput(pilotNameInput.value) === "Is a Number" || validateInput(copilotNameInput.value) === "Is a Number" || validateInput(fuelLevelInput.value) === 'Not a Number' || validateInput(cargoMassInput.value) === "Not a Number"){
        alert("Make sure to enter valid information for each field!");
        event.preventDefault();
     } else if(fuelLevelInput.value <= 10000){
        //element.style.visibility = 'hidden';
        faultyItems.fuelStatus.visibilty = "visible";
        faultyItems.fuelStatus.value = "Fuel level too low for launch.";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        // change color of font for launchStatus. 
        event.preventDefault();
     } else if(cargoMassInput.value >= 10000){
        faultyItems.cargoMass.visibilty = "visible";
        faultyItems.cargoMass.innerHTML = "There is not enough fuel for the journey.";
        event.preventDefault();
     }
        
        });
     };


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

