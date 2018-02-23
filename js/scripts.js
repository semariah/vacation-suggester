$(document).ready(function(){
  $("form#vacay").submit(function() {
    event.preventDefault();
    var enterName = $("#Name").val();
    var enterDate = parseInt($("#Date").val());
    var trip = $("input:radio[name=trip]:checked").val();
    var result = add(number1, number2);
    $("#output").text(result);
  });
})
