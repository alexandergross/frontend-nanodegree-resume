/* ================================
Bio
================================== */

var bio = {
  "name": "Alex Gross",
  "role": "Front-End Developer",
  "contacts": {
    "mobile": "123456789",
    "email": "gross.alex@me.com",
    "github": "alexandergross",
    "twitter": "@_alexgross",
    "location": "Wels"
  },
  "biopic": "./dist/images/me.jpg",
  "welcomeMessage": "Welcome to my Udacity Resume",
  "skills": [
    "JavaScript", "CSS", "HTML", "Gulp", "Grunt"
  ]
};

/* ================================
Header
================================== */

var formatedHTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formatedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formatedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
var formatedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formatedHTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formatedHTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
var formatedHTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formatedHTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formatedHTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formatedHTMLbioPic);
$("#header").append(formatedHTMLheaderName);
$("#header").append(formatedHTMLheaderRole);
$("#header").append(formatedHTMLwelcomeMsg);
$("#topContacts").append(formatedHTMLmobile);
$("#topContacts").append(formatedHTMLemail);
$("#topContacts").append(formatedHTMLtwitter);
$("#topContacts").append(formatedHTMLgithub);
$("#topContacts").append(formatedHTMLlocation);

//skills
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  for(i = 0; i < bio.skills.length; i++) {
    var formatedHTMLskills = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formatedHTMLskills);
  }
} else {
  $("#header").append(HTMLskillsStart);
  var formatedHTMLskills = HTMLskills.replace("%data%", "There are no skills defined");
  $("#skills").append(formatedHTMLskills);
}

/* ================================
Work
================================== */

var work = {
  "jobs": [
    {
      "employer": "E-CONOMIX GmbH",
      "title": "Front-End Developer",
      "location": "Wels",
      "dates": "2016 - ",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    },
    {
      "employer": "Grosspack KG",
      "title": "Mediadesigner & Webdeveloper",
      "location": "Sipbachzell",
      "dates": "2015 - 2016",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    },
    {
      "employer": "Fidelio GmbH",
      "title": "Webdeveloper",
      "location": "Linz",
      "dates": "2014 - 2015",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    },
    {
      "employer": "Grosspack KG",
      "title": "Mediadesigner",
      "location": "Sipbachzell",
      "dates": "2007 - 2009",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    },
    {
      "employer": "Austria Red Cross",
      "title": "Paramedic",
      "location": "Grünburg",
      "dates": "2007 - 2008",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    },
    {
      "employer": "EM Marketing & Design",
      "title": "Mediadesigner",
      "location": "St. Valentin",
      "dates": "2004 - 2005",
      "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit." +
          "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque " +
          "penatibus et magnis dis parturient montes, nascetur ridiculus mus." +
          "Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "
    }
  ]
};

function displayWork() {
  for (var job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formatedHTMLworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formatedHTMLworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formatedEmployerTitle = formatedHTMLworkEmployer + formatedHTMLworkTitle;
    var formatedHTMLworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formatedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formatedHTMLworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    var formatedHTMLwork = [
      formatedEmployerTitle,
      formatedHTMLworkDates,
      formatedHTMLworkLocation,
      formatedHTMLworkDescription
    ];

    for(var i = 0; i < formatedHTMLwork.length; i++) {
      $(".work-entry:last").append(formatedHTMLwork[i]);
    }
  }
}

/* ================================
Education
================================== */

var education = {
  "schools": [
    {
      "name": "EM Marketing & Design",
      "location": "St. Valentin",
      "majors": ["UI Design", "Marketing", "3D Animation"],
      "degree": "Diplom",
      "dates": "2004 - 2005",
      "url": ""
    },
    {
      "name": "Berufsschule Linz 9",
      "location": "Linz",
      "majors": ["Mediadesign", "Web-Design", "UI-Design", "Print-Design", "Web-Development", "Video Editing", "3D Animation"],
      "degree": "Lehrabschluss",
      "dates": "2004 - 2007",
      "url": ""
    },
    {
      "name": "University of Applied Science",
      "location": "Wels",
      "majors": ["Mathematics", "Englisch", "German", "Physics"],
      "degree": "Studienbefähigung",
      "dates": "2011 - 2012",
      "url": ""
    },
    {
      "name": "University of Applied Science",
      "location": "Hagenberg",
      "majors": ["Mobile Computing", "Java Development", "Android Development", "Project Management", "Network Technology", "Mathematics"],
      "degree": "Studienbefähigung",
      "dates": "2012 - 2013",
      "url": ""
    }
  ],
  "onlineCourses": [
    {
      "title": "Udacity Front-End Nanodegree",
      "school": "Udacity",
      "dates": "2016 - 2017",
      "url": "www.Udacity.com"
    }
  ]
};

/* ================================
Projects
================================== */

var projects = {
  "projects": [
    {
      "title": "Resume Site",
      "dates": "2017",
      "description": "A Resume Site for the Udacity Nanodegree",
      "images": [
        "./dist/images/portfolio-img-1.jpg",
        "./dist/images/portfolio-img-2.jpg"
      ]
    },
    {
      "title": "Portfolio Site",
      "dates": "2017",
      "description": "A Portfolio Project for the Udacity Nanodegree",
      "images": [
        "./dist/images/portfolio-img-1.jpg",
        "./dist/images/portfolio-img-2.jpg"
      ]
    }
  ]
}

projects.display = function() {

  for (var i = 0; i < projects.projects.length; i++) {
    $("#projects").append(HTMLprojectStart);

    var formatedHTMLProject = [
      HTMLprojectTitle.replace("%data%", projects.projects[i].title),
      HTMLprojectDates.replace("%data%", projects.projects[i].dates),
      HTMLprojectDescription.replace("%data%", projects.projects[i].description),
    ];

    for(var j = 0; j < formatedHTMLProject.length; j++) {
      $(".project-entry:last").append(formatedHTMLProject[j]);
    }

    if(projects.projects[i].images.length > 0) {
      for(var k = 0; k < projects.projects[i].images.length; k++) {
        var formatedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
        $(".project-entry:last").append(formatedImage);
      }
    }
  }
}

/* ================================
Display Functions
================================== */

displayWork();
projects.display();

/* ================================
X,Y Click Coordinates
================================== */

$(document).click(function(loc) {

  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
});

/* ================================
Internationalize Button
================================== */

$("#main").append(internationalizeButton);

function inName() {
  var name = bio.name;
  var firstSecondName = name.trim().split(" ");
  var firstName = firstSecondName[0].slice(0, 1).toUpperCase() +
    firstSecondName[0].slice(1).toLowerCase();
  var secondName = firstSecondName[1].toUpperCase();
  var intName = firstName + " " + secondName;

  return intName;

}

/* ================================
Map
================================== */

$("#mapDiv").append(googleMap);
