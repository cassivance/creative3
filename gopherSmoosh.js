var app = angular.module ('app', []);

app.controller ('mainControl', mainControl);

function mainControl ($scope)
{
	alert ('Entered the mainControl function');
	
	$scope.initialzeGrid = new function (){
		$scope.grid = [];
	
		for (var i = 1; i <= 36; i++)
		{
			grid.push (i);
		}
		
		for (var j = 0; j<grid.length; j++)
		{
			alert ('grid[' + j "]: " + grid[j]);
		}
	};
	
}