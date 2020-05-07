//apiKey: "DXv8RxGv"

var tableElement = document.querySelector("table");
var gradeTable = new GradeTable(tableElement);

var headerElement = document.querySelector("header");
var pageHeader = new PageHeader(headerElement);

var form = document.querySelector("form");
var gradeForm = new GradeForm(form);

var newApp = new App(gradeTable, pageHeader, gradeForm);
newApp.start();
