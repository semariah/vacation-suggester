$(document).ready(function(){
  $("form#vacay").submit(function(event){
    event.preventDefault();
    var enterName = $("input#Name").val();
    var enterDate = parseInt($("input#Date").val());
    var trip = $("input:radio[name=trip]:checked").val();
    var weather = $("input:radio[name=weather]:checked").val();
    var nature = $("input:radio[name=nature]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var response;

    $("#result").show();
    $(".name").text(enterName);
    console.log(trip);
    if ((trip === "honeymoon") && (weather === "warm") && (nature === "desert") && (food === "mediterranian")){
      //$("#Cairo").show();
      response = $("#Bankok").hide();
      response = $("#Lapland").hide();
    } else if ((trip === "bussiness") && (weather === "cold") && (nature === "town") && (food === "scandinavian-soup")){
      //$("#Lapland").show();
      response = $("#Cairo").hide();
      response = $("#Bankok").hide();
    } else {
      //$("#Bankok").show();
      response = $("#Cairo").hide();
      response = $("#Lapland").hide();
    }





//debagger
    //console.log("enterName :" + enterName)
    //console.log("enterDate:" + enterDate)
    //console.log("trip:" + trip)
    //console.log("weather:" + weather);
    //console.log("nature:" + nature);
    //console.log("food:" + food);
    //console.log($("#Cairo").show());


  });
});
