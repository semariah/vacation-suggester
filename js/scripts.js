$(document).ready(function(){
  $("form#vacay").submit(function() {
    event.preventDefault();
    var enterName = $("input#Name").val();
    var enterDate = parseInt($("input#Date").val());
    var trip = $("input:radio[name=trip]:checked").val();
    console.log("enterName :" + enterName)
    console.log("enterDate:" + enterDate)
    //var result = add(enterName, enterDate);
    //$("#output").text(result);
  });
});
