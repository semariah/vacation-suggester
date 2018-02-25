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

    if ((trip === "Honeymoon") && (weather === "Warm") && (nature != "Desert") && (food === "Mediterranian")){
      $("#Cairo").show();
      //response = $("#Bankok").hide();
      //response = $("#Lapland").hide();
    } else if ((trip === "Bussiness Trip") && (weather === "Tropical") && (nature === "Beach") && (food === "Seafood")){
      $("#Bankok").show();
      //response = $("#Cairo").hide();
      //response = $("#Lapland").hide();
    } else ((trip === "Entertianment") && (weather === "Cold") && (nature != "Town") && (food === "Scandinavian-Soup")){
      $("#Lapland").show();
      //response = $("#Cairo").hide();
      //response = $("#Bankok").hide();
    }
    $("#result").show();
    $(".name").text(enterName);





//debagger
    //console.log("enterName :" + enterName)
    //console.log("enterDate:" + enterDate)
    //console.log("trip:" + trip)
    //console.log("weather:" + weather);
    //console.log("nature:" + nature);
    //console.log("food:" + food);
    //console.log($("#Cairo").show());

    //var result = add(enterName, enterDate);
    //$("#output").text(result);
  });
});
