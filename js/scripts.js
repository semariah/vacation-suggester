$(document).ready(function(){
  $("form#vacay").submit(function() {
    event.preventDefault();
    var enterName = $("input#Name").val();
    var enterDate = parseInt($("input#Date").val());
    var trip = $("input:radio[name=trip]:checked").val();
    var weather = $("input:radio[name=weather]:checked").val();
    var nature = $("input:radio[name=nature]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var response;
    if (trip === "Honeymoon" && weather === "Warm" && nature === "Beach"){
      var response = $("div#Cairo").show();
    } else if (trip ==="Bussiness Trip" && weather === "Tropical" && food === "Seafood" ){
      var response = $("div#Bankok").show();
    }
      $(#result).text(response);
      alert("result:" + result);

//debagger
    console.log("enterName :" + enterName)
    console.log("enterDate:" + enterDate)
    console.log("trip:" + trip)
    console.log("weather:" + weather);
    console.log("nature:" + nature);
    console.log("food:" + food);
    console.log($("#Cairo").show());

    //var result = add(enterName, enterDate);
    //$("#output").text(result);
  });
});
