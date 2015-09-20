// The addStudent method will create a new student object based on the user's input and push it into the students array. It then resets the studentName model to null so that the field in the HTML is cleared
studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.addStudent = function() {
    $scope.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  };
});
