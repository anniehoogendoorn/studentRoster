// The addStudent method will create a new student object based on the user's input and push it into the students array. It then resets the studentName model to null so that the field in the HTML is cleared
studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };

  // pass in the student as an argument to the deleteStudent method, use indexOf to find the index of the student in our $scope.students array, and call the JavaScript splice method on it. Starts removal at the index of the student and only deleting that one element.
  $scope.deleteStudent = function(student) {
    var index = $scope.students.indexOf(student);
    $scope.students.splice(index, 1);
  };
});
