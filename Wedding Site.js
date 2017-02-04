$(document).ready(function(){
  $("#main").hide();

  $("#main").fadeIn(1500);

  $(".answer").hide();

  $(this).on("click", ".question", function(){
    $(this).next().slideToggle("fast");
  });

  $("#ifRSVPyes").hide();

  $(this).on("click", "#yes", function(){
    $("#ifRSVPyes").slideDown("slow");
    $(".reqInput").attr("required", true);
  });
  $(this).on("click", "#no", function(){
    $("#ifRSVPyes").slideUp("fast");
    $(".reqInput").removeAttr("required");
  });

  $("#resetButton").on("click", function(){
    $("#form").trigger("reset");
    addGuests();
    $("#ifRSVPyes").slideUp("fast");
    $(".reqInput").removeAttr("required");
  });

});

function addGuests(){
  var number = document.getElementById("guests").value;
  var container = document.getElementById("guestNames");
  while (guestNames.hasChildNodes()){
    guestNames.removeChild(guestNames.lastChild);
  };
  for (var i=0; i<number-1; i++){
    var guestLabel = document.createElement("label");
      guestLabel.innerHTML = ("Name of Guest #" + (i+1) + ":");
      guestLabel.className = "formLabels";
      guestLabel.id = "reqFields";
      container.appendChild(guestLabel);
    var inputSpan = document.createElement("span");
      inputSpan.className = "formInputs";
      container.appendChild(inputSpan);
    var input = document.createElement("input");
      input.type = "text";
      input.name = "Guest #" + (i+1);
      input.className = "inputBox";
      input.required = true;
      inputSpan.appendChild(input);
  };
};
