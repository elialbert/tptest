'use strict';

/* Controllers */


function MyCtrl1($scope) {
    $scope.tasks = [
	{text:'test1',level:1,parent:null},
	{text:'test2',level:1,parent:null},
	{text:'test1a',level:2,parent:'test1'},
	{text:'test1b',level:2,parent:'test2'},
    ];
	
    // help? how to pass extra args
    $scope.filterLevel1 = function(task) {
	return task.level == 1;
    }
    $scope.filterLevel2 = function(task) {
	return task.level == 2;
    }

}
// MyCtrl1.$inject = [];


function MyCtrl2() {
}
// MyCtrl2.$inject = [];
