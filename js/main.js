var fullName;
var sID;
var username;
var program;
var homeCountry;
var linkID;
var aTypes=new Array();
var animals=new Array();

class AnimalTypes{
    constructor(aType, url){
      this.aType=aType; this.url=url;
    }
};

class Animal {
    constructor(name, type, legs, url, ...colours){
      this.name=name; this.type=type; this.legs=legs;
      this.url=url; this.colours=colours;
    }
};
 
$(document).ready(function(){
	$.ajax({
		type: "GET", url: "data/A2-JSONFile.json",
		dataType: "json", 
		success: loadJSON,
		error: function(e) {alert(`${e.status} - ${e.statusText}`);}

	}); //end oj ajax call

});//end doc ready


// loadJSON function
function loadJSON (data){
	
fullName=data.personalInfo.fullName;
sID=data.personalInfo.studentNumber;
username=data.personalInfo.loginName;
program=data.personalInfo.sheridanProgram;
homeCountry=data.personalInfo.homeCountry;

localStorage.setItem("fullName", fullName);
localStorage.setItem("sID",sID);
localStorage.setItem("username",username);
localStorage.setItem("program", program);
localStorage.setItem("homeCountry", homeCountry);

//animalType list
for (let a of data.animaltypes){
  aTypes.push(new AnimalTypes(a.atype,a.pic));
};


//animal list
for(let a of data.animallist){
    var colours=new Array();
    for (let color of a.colors){
        colours.push(color);
    }


  animals.push(new Animal(a.name, a.type, a.legs, a.photoUrl, colours));
};



mainScreen(data);

}//end of loadJSON


// mainScreen function
function mainScreen(data){

	//display data
$("#header").html(
  `<h3>ASSIGNMENT #2</h3>
  <h3>${fullName} / ${sID} / ${username}</h3>
  <hr>
  `
);
$("#footer").html(
  `<hr>
  <p>My Sheridan Program: ${program}</p>
  <p>My Home Country: ${homeCountry}</p>
  `
);


var a=0;
for(let x of aTypes){
  
$("#links").append(`
  <a id=${a} value=${x.aType} href='pages/animals.html'> ${x.aType} </a>
`);
$("#pics").append(
  `<img src="images/${x.url}" width=120>
  `
)
a+=1;
};


	
}


// Save data to local storage
$(document).on("click", "#links >a", function() {
	localStorage.setItem("linkID", $(this).closest("a").attr("id"));
	localStorage.setItem("Animal Type",  $(this).closest("a").attr("value"));
  localStorage.setItem("aTypes", JSON.stringify(aTypes));
  localStorage.setItem("animals", JSON.stringify(animals));
});





