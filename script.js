// Write your JavaScript code here!





 window.addEventListener("load", function() {
    // let form = document.querySelector("testForm");
    //   form.addEventListener("formSubmit", function(event) {
    //     alert("submit clicked");-- already defined in formSubmission function
       // formSubmission();
       // preventDefault();
    });

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    //   results = pickPlanet(listedPlanets);
    //   addDestinationInfo(results);
    //   console.log(results);
  // });
   
});
