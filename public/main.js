angular
  .module("scoreBoardApp", [])
  .controller("scoreBoardController", ($scope) => {
    $scope.team = [
      {
        name: "Team 1",
        score: 0
      },
      {
        name: "Team 2",
        score: 0
      },
    ]

    $scope.add = (i) => {
      $scope.team[i].score += 1;
    }

    $scope.subtract = (i) => {
      $scope.team[i].score -= 1;
    }

    $scope.updateName = (i, x) => {
      if (x === "searchValue1"){
      $scope.team[i].name = x;
      }
      else{
      $scope.team[i].name = x;
        
      }
    }
  })



