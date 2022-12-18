// Write your helper functions here!
 require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  
   const missionTarget = document.getElementById("missionTarget");
   
   for(let i=0; i<data.length; i++){
    let planet = data[i];
    missionTarget.innerHTML += `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name} </li>
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
    let numberInput = Number(testInput);
    if(isNaN(numberInput) === false){
        return "Is a Number";
    } else if(isNaN(numberInput)){
        return "Not a Number";
    } else if(testInput === ''){
        return "Empty";
    }

    };
    

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 
        let launchStatus = document.getElementById("launchStatus");    
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuel = document.getElementById("fuelStatus");
        let cargo = document.getElementById("cargoStatus");
        
        
      if(pilot === ''|| copilot === '' || 
      fuelLevel === '' || cargoLevel === '' ) {
        alert("All fields are required!");
       
    } else if(validateInput(pilot) === "Is a Number" || 
        validateInput(copilot) === "Is a Number" || 
        validateInput(fuelLevel) === "Not a Number" || 
        validateInput(cargoLevel) === "Not a Number") {
            alert("Make sure to enter valid information for each field!");

    }  else {
       list.style.visibilty = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
       copilotStatus.innerHTML = `Co Pilot ${copilot} is ready for launch.`;
       } 
       
       if(fuelLevel < 10000 && cargoLevel > 10000) {
        fuel.innerHTML = "There is not enough fuel for the journey.";
        cargo.innerHTML = "Cargo mass too heavy for launch.";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";

    } else if(fuelLevel < 10000 && cargoLevel  < 10000) {
            fuel.innerHTML = "There is not enough fuel for the journey.";
            cargo.innerHTML = "Cargo mass low enough for launch.";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "red"; 
      
    } else if(fuelLevel >= 10000 && cargoLevel > 10000) {
        fuel.innerHTML = "There is enough fuel for the journey.";
        cargo.innerHTML = "Cargo mass too heavy for launch.";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";

    } else {
        fuel.innerHTML = "There is enough fuel for the journey.";
        cargo.innerHTML = "Cargo mass low enough for launch.";
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
    }
}
     
    


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch
    ('https://handlers.education.launchcode.org/static/planets.json')
    .then( function(response) {
        if(response.status >= 400) {
            throw new Error ("Bad response.");
        } else {
            return  response.json()
        }
    });
        return planetsReturned;
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*planets.length);
    let randomPlanet= planets[num];
    return randomPlanet;
    
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

