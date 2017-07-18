/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  $("#main").append("Alex Gross");
//
// var awesomeThoughts = "I am Alex and I am awesome!"
// console.log(awesomeThoughts);
//
// var funThoughts = awesomeThoughts.replace("awesome", "fun");
//
// $("#main").append(funThoughts);

var bio = {
  name: "Alex Gross",
  role: "Front-End Developer",
  contacts: {
    email: "gross.alex@me.com",
    github: "alexandergross",
    twitter: "@_alexgross",
    location: "Wels | Austria"
  },
  pictureURL: "images/me.jpg",
  welcomeMessage: "Welcome to my Udacity Resume",
  skills: [
    "JavaScript", "CSS", "HTML", "Gulp", "Grunt"
  ]
};

var work = {
  position: "Front-End Developer",
  employer: "E-CONOMIX GmbH",
  years: 1,
  city: "Wels | Austria"
};

var eductation = {
  name: "University of Applied Sciences Hagenberg",
  years: 1,
  city: "Hagenberg | Austria"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formatedHTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formatedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formatedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formatedHTMLschoolName = HTMLschoolName.replace("%data%", eductation.name);

$("#header").prepend(HTMLskillsStart);
$("#header").prepend(formatedHTMLwelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formatedHTMLbioPic);
$("#topContacts").append(formatedHTMLemail);
$("#topContacts").append(formatedHTMLtwitter);
$("#topContacts").append(formatedHTMLgithub);
$("#topContacts").append(formatedHTMLlocation);
$("#main").append(work["position"]);
$("#main").append(eductation.name);

for(var i = 0; i < bio.skills.length; i++) {
  var skill = bio.skills[i];
  var formatedHTMLskills = HTMLskills.replace("%data%", skill);
  $("#skills").append(formatedHTMLskills);
}
