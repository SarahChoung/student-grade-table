class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      var row = document.createElement("tr");
      var studentName = document.createElement("td");
      var studentCourse = document.createElement("td");
      var studentGrade = document.createElement("td");

      studentName.textContent = grades[i].name;
      studentCourse.textContent = grades[i].course;
      studentGrade.textContent = grades[i].grade;

      row.append(studentName, studentCourse, studentGrade);
      tbody.append(row);
    }
  }
}
