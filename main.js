//apiKey: "DXv8RxGv"

var tableElement = document.querySelector("table");
var gradeTable = new GradeTable(tableElement);

var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);

var newApp = new App(gradeTable, pageHeader);
newApp.start();
