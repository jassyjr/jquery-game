
function cchangeInnerHTML() {
  var player1= $("#input1").val();
  $("#prom1").html(player1)
  $("#form").css("display","none");
}

$("#btn1").click(function roll(){
  var player1 = $("#input1").val();
  var player2 = $("#input2").val(); 
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    
    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    
    var image1 = $("img").eq(0);
     image1.attr("src", randomImageSource);
    
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    $("img").eq(1).attr("src", randomImageSource2);
    if (randomNumber1 > randomNumber2) {
      $("h1").text(player1 +"Wins! 🚩");
    }
    else if (randomNumber2 > randomNumber1) {
      $("h1").text(player2 +"Wins! 🚩");
    }
    else {
      $("h1").text ("Draw!");
    }
});

function changeInnerHTML() {
  var player2 = $("#input2").val();
  $("#prom2").html(player2);
  $("#form1").css("display","none");
}


$("#btn2").click(function roll(){
  var player1 = $("#input1").val();
  var player2 = $("#input2").val(); 
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    
    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    
    var image1 = $("img").eq(0);
     image1.attr("src", randomImageSource);
    
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    
    $("img").eq(1).attr("src", randomImageSource2);
    if (randomNumber1 > randomNumber2) {
      $("h1").text(player1 +"Wins! 🚩");
    }
    else if (randomNumber2 > randomNumber1) {
      $("h1").text(player2 +"Wins! 🚩");
    }
    else {
      $("h1").text ("Draw!");
    }
});

    

