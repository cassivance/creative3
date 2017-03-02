var app = angular.module('app', []);

app.controller('mainControl', mainControl);

function mainControl($scope, $interval, $timeout) {
    $timeout(endScore, 60000);

    $interval(randomIndices, 1000 * 3, 20); 

    $scope.playing = true;
    $scope.score = 0;
    $scope.total = 0;
    $scope.grid = [];

    //Instantiate the number of display divs to generate with 'ng-repeat' in "index.html"
    for (var i = 0; i < 55; i++) {
        $scope.grid.push(i);
    }


    function randomIndices() {

        $scope.imgResetCount = 0;
        $scope.imgResets = [];

        //Generate a number between 0 and 5, for HOW MANY divs will be reset to have the "gopher" image for this current interval
        $scope.imgResetCount = Math.round(Math.random() * 5);

        $scope.total += $scope.imgResetCount;

        //Select a number of indices from the grid that matches the number generated above
        for (var i = 1; i <= $scope.imgResetCount; i++) {
            //Select a random index from the grid
            var currentImageResetIndex = Math.round((Math.random() * 5) * 11);

            //Make certain the above randomly selected index has NOT already been selected
            if ($scope.imgResets.indexOf(currentImageResetIndex) === -1) {
                $scope.imgResets.push(currentImageResetIndex);
            }
        }
    }

    $scope.isDisplayed = function (i) {
        if ($scope.imgResets) {
            return $scope.imgResets.indexOf(i) > -1;
        }
        return false;
    }

    $scope.imageClick = function (event) {
        console.log($scope.imgResets);
        let ind = Number($scope.imgResets.indexOf(Number(event.target.id)));

        if ($scope.imgResets.indexOf(Number(event.target.id)) > -1) {
            $scope.score++;
            $scope.imgResets.splice(ind, 1);
            console.log($scope.imgResets);

        }
    }

    function endScore() {
        $scope.playing = false;
        if ($scope.score / $scope.total > .8) {
            $scope.final = "Congratulations! You won!";
        }
        else {
            $scope.final = "Sorry, you lost.";
        }
    }
}