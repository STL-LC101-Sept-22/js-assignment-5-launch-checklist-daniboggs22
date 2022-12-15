// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  
   const missionTarget = document.getElementById("missionTarget");
   
   for(let i=0; i<data.length; i++){
    let planet = data[i];
    missionTarget.innerHTML += `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${planet.name} </li>
        <li>Diameter:${planet.diameter} </li>
        <li>Star: ${planet.star}</li>
        <li>Distance from Earth:${planet.distance} </li>
        <li>Number of Moons:${planet.moons} </li>
    </ol>
    <img src="${planet.image}">
    `
    
   }

               
   
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
    let testVar = document.getELementById("pilotName");
    alert('You typed' + testVar);
    // const form = document.getElementById("testForm");
    // let submitFormButton = document.getElementById("submitForm");
    // submitFormButton.addEventListener("click", function(event) {
        
    // })
    //form.addEventListener("submitForm", function(event){
    //     let pilotNameInput = document.getElementById("pilotName");
    //     let copilotNameInput = document.getElementById("copilotName");
    //     let fuelLevelInput = document.getElementById("fuelLevel");
    //     let cargoMassInput = document.getElementById("cargoMass");
    //     let faultyItems = document.getElementById("faultyItems");
    //     let launchStatus = document.getElementById("launchStatus");
        
    //  if(false)//pilotNameInput.value === ''|| copilotNameInput.value === '' || fuelLevelInput.value === '' || cargoMassInput.value === '' ){
    //     {alert("All fields are required!");
    //     event.preventDefault();}
    //  } else if (validateInput(pilotNameInput.value) === "Is a Number" || validateInput(copilotNameInput.value) === "Is a Number" || validateInput(fuelLevelInput.value) === 'Not a Number' || validateInput(cargoMassInput.value) === "Not a Number"){
    //     alert("Make sure to enter valid information for each field!");
    //     event.preventDefault();
    //  } else if(fuelLevelInput.value <= 10000){
    //     //element.style.visibility = 'hidden';
    //     faultyItems.fuelStatus.visibilty = "visible";
    //     faultyItems.fuelStatus.value = "Fuel level too low for launch.";
    //     launchStatus.innerHTML = "Shuttle not ready for launch";
    //     launchStatus.style.color = "red";
    //     // change color of font for launchStatus. 
    //     event.preventDefault();
    //  } else if(cargoMassInput.value >= 10000){
    //     faultyItems.cargoMass.visibilty = "visible";
    //     faultyItems.cargoMass.innerHTML = "There is not enough fuel for the journey.";
    //     event.preventDefault();
    //  }
        
        //});
     };


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
       response.json().then(function(data) {
        return response.json();

       });
     });


    return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*6);
    let randomPlanet= planets[num];
    console.log (randomPlanet);
    


}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

