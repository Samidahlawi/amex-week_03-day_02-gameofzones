let clickCounter = 0;

function makeZoneGreen(event) {
  console.log("mouse entered!");
  $(event.target).css("background-color", "green");
}

function makeZoneGreenForEver(event) {
  console.log("zone clicked!");
  $(event.target).css("background-color", "green");
  $(event.target).off("mouseenter");
  $(event.target).off("click");
  $(event.target).off("mouseleave");

  clickCounter++;
  if (clickCounter === 4) {
    console.log("Congratulations!");
  }
}

function makeZoneWhite(event) {
  console.log("mouse left!");
  $(event.target).css("background-color", "white");
}

$(".zone").on("mouseenter", makeZoneGreen);
$(".zone").on("mouseleave", makeZoneWhite);
$(".zone").on("click", makeZoneGreenForEver);