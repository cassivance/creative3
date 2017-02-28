


/*
var initializeGrid = [];

function initializeGridSize ()
{
    alert ("entered initialize gride function");
    
    for (var i=1; i<=56; i++)
    {
        initializeGrid.push (i);
    }
    
    alert ('initialGrid size: ' + initializeGrid.length);
}
*/

var app = angular.module ('app', []);

app.controller ('mainControl', mainControl);

function mainControl ($scope, $interval, $timeout)
{    
    alert ("Entered main control function");
    
    $scope.grid = [];//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17.18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56];
    
    for (var i=1; i<=55; i++)
    {
        $scope.grid.push (i);
    }
    
    alert ("Size of $scope.grid = " + $scope.grid.length);
    
    
    
    $scope.imageClick = function (event)
    {
        alert ('Clicked on image: ' + event.target.id);
    }
    
    
    
    
    function indicesReset (resetIndices, resetCount)
    {
        alert ('Images being reset and counted for clicks: ' + resetIndices);
        
        alert ('Number of images needing to be clicked in current interval: ' + resetCount);
    }
    
    
    //var timeLimitReached = false;
    
    function randomIndices ()
    {
        $scope.imgResetCount = 0;
        $scope.imgResets = [];
        
        $scope.imgResetCount = Math.round (Math.random () * 5);
        
        for (var i=1; i<=$scope.imgResetCount; i++)
        {
            var currentImageResetIndex = Math.round ((Math.random () * 5) * 11);
            
            if ($scope.imgResets.indexOf (currentImageResetIndex) === -1)
            {
                $scope.imgResets.push (currentImageResetIndex);
            }
        }
        
        alert ("Current update of image reset indices: " + $scope.imgResets);
        indicesReset ($scope.imgResets, $scope.imgResetCount);
    }
    
    
    $interval (randomIndices, 1000 * 3, 5);
}