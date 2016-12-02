var app = angular.module("myApp", []);
app.filter('unsafe', function($sce) {
    return function(message) {
        return $sce.trustAsHtml(message);
    };
});
app.controller('myController', ['$scope', '$http', function($scope, $http){
	var employees = [
		{name: "Rahul", role: "IT manager", salary: 20000},
		{name: "Abhishek", role: "HR", salary: 65025},
		{name: "Priyanka", role: "Sr. HR", salary: 80000},
		{name: "Bishal", role: "Tech support", salary: 90001},
	]
	$scope.employees = employees;

	$http.get('list-table.html').then(function(response){
		$scope.message = response.data;
		console.log(response)
	});






}])

