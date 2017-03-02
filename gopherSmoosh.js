var app = angular.module ('app', []);

app.controller ('mainControl', mainControl);

function mainControl ($scope, $interval, $timeout)
{    
    $scope.score = 0;
    $scope.total = 0; 
    //Instantiate the number of display divs to generate with 'ng-repeat' in "index.html"
    $scope.grid = [];//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17.18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];
    
    for (var i=0; i<55; i++)
    {
        $scope.grid.push (i);
    }
    //END instantiation of number of display divs to generate with 'ng-repeat'
    
    $scope.isDisplayed = function(i)
    {
        if($scope.imgResets)
        {
            return $scope.imgResets.indexOf(i) > -1; 
        }
        return false;
    }

    $timeout(endScore, 60000);

    $interval (randomIndices, 1000 * 3, 20);

    function endScore(){
        if($scope.score/$scope.total > .8)
        {
            aler("You Win!");
        }
        else
        {
            alert("Sorry, you lost!")
        }
    }

    function randomIndices ()
    {
        
        $scope.imgResetCount = 0;
        $scope.imgResets = [];
        
        //Generate a number between 0 and 5, for HOW MANY divs will be reset to have the "gopher" image for this current interval
        $scope.imgResetCount = Math.round (Math.random () * 5);

        $scope.total += $scope.imgResetCount;
        
        //Select a number of indices from the grid that matches the number generated above
        for (var i=1; i<=$scope.imgResetCount; i++)
        {
            //Select a random index from the grid
            var currentImageResetIndex = Math.round ((Math.random () * 5) * 11);
            
            //Make certain the above randomly selected index has NOT already been selected
            if ($scope.imgResets.indexOf (currentImageResetIndex) === -1)
            {
                $scope.imgResets.push (currentImageResetIndex);
            }
        }
    }


    /*
        This identifies which unique div has been clicked
        A div that SHOULD be clicked will have the class "display-img"... so we will need to check if the div has the class "display-img" when it is clicked
    */
    $scope.imageClick = function (event)
    {
        console.log($scope.imgResets);
        let ind = Number($scope.imgResets.indexOf(Number(event.target.id)));
        
        if($scope.imgResets.indexOf(Number(event.target.id))> -1)
        {
            console.log("HERE");
            $scope.score++;
            $scope.imgResets.splice(ind, ind+1);
            console.log("Score:", $scope.score);
            
        }
    }
    
}