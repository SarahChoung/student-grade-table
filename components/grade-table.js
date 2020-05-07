class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent = "";
    for (var i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }

    if (grades.length) {
      this.noGradesElement.className = "d-none";
    } else {
      this.noGradesElement.className = "";
    }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var studentName = document.createElement("td");
    var studentCourse = document.createElement("td");
    var studentGrade = document.createElement("td");
    var deleteButton = document.createElement("td");
    var button = document.createElement("button");

    studentName.textContent = data.name;
    studentCourse.textContent = data.course;
    studentGrade.textContent = data.grade;
    button.textContent = "Delete";

    deleteButton.append(button);
    row.append(studentName, studentCourse, studentGrade, deleteButton);

    button.addEventListener("click", function(event) {
      deleteGrade(data.id);
    })
    return row;
  }
}
