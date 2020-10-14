var fullName= localStorage.getItem("fullName");
var sID= localStorage.getItem("sID");
var username= localStorage.getItem("username");
var program=localStorage.getItem("program");
var homeCountry=localStorage.getItem("homeCountry");
var linkID=localStorage.getItem("linkID");
var aType=localStorage.getItem("Animal Type");
var animals=JSON.parse(localStorage.getItem("animals"));
var aTypeLower=aType.toLowerCase(aType);


$(document).ready(function(){
  mainScreen();
});//end doc ready





// mainScreen function
function mainScreen(){

	//display data
$("#header").html(
  `<h3>ASSIGNMENT #2</h3>
  <h3>${fullName} / ${sID} / ${username}</h3>
  <hr>
  `
);
$("#subHead").html(`${aType}`);
for(let a of animals){
  if((a.type).localeCompare(aTypeLower)==0){
    $("#animal").append(
      `
      <section class="anim">
      <p class="animalInfo">Name: ${a.name} has ${a.legs} legs and has these colors: ${(a.colours).toString()}</p>
      <img class="animalImg" src="${a.url}" width="100">
      <hr class="breakLine">
      </section>
      ` 

    );
    
  }


}

$("#footer").html(
  `
  <p>My Sheridan Program: ${program}</p>
  <p>My Home Country: ${homeCountry}</p>
  `
);


};

