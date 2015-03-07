angular.module('directoryApp.controller', [])

.controller('childCtrl', function ($scope,childApi) {

	$scope.childcare = {};
	var param = function(data) {
		        var returnString = '';
		        for (d in data){
		            if (data.hasOwnProperty(d))
		               returnString += d + '=' + data[d] + '&';
		        }
		        // Remove last ampersand and return
		        return returnString.slice( 0, returnString.length - 1 );
		  };
	$scope.submit = function(childcare){

		childApi.all($scope.childcare.childcare_key,$scope.childcare.childcare_location).then(function(data){
			$scope.childListings = data;
			console.log($scope.childListings);

		})
	}

	
})
.controller('childDetails',function ($scope,$stateParams,childApi) {

	childApi.get($stateParams.idListings).then(function(data){
		$scope.childDetail = data;
		console.log(data);
	})
	
})

.controller('agedCtrl', function ($scope,agedApi) {

	$scope.agedcare = {};
	var param = function(data) {
		        var returnString = '';
		        for (d in data){
		            if (data.hasOwnProperty(d))
		               returnString += d + '=' + data[d] + '&';
		        }
		        // Remove last ampersand and return
		        return returnString.slice( 0, returnString.length - 1 );
		  };
	$scope.submit = function(agedcare){

		agedApi.all($scope.agedcare.childcare_key,$scope.agedcare.childcare_location).then(function(data){
			$scope.agedListing = data;
			console.log($scope.agedListing);

		})
	}

	
})
.controller('agedDetails',function ($scope,$stateParams,agedApi) {

	agedApi.get($stateParams.idListings).then(function(data){
		$scope.agedDetail = data;
		console.log(data);
	})
	
})

.controller('bussinessCtrl', function ($scope,bussinessApi) {

	$scope.agedcare = {};
	var param = function(data) {
		        var returnString = '';
		        for (d in data){
		            if (data.hasOwnProperty(d))
		               returnString += d + '=' + data[d] + '&';
		        }
		        // Remove last ampersand and return
		        return returnString.slice( 0, returnString.length - 1 );
		  };
	$scope.submit = function(agedcare){

		bussinessApi.all($scope.agedcare.childcare_key,$scope.agedcare.childcare_location).then(function(data){
			$scope.busyListing = data;
			console.log($scope.busyListing);

		})
	}

	
})
.controller('bussinessDetails',function ($scope,$stateParams,bussinessApi) {

	bussinessApi.get($stateParams.idListings).then(function(data){
		$scope.childDetail = data;
		console.log(data);
	})
	
})

.controller('governmentCtrl', function ($scope,governmentApi) {

	$scope.agedcare = {};
	var param = function(data) {
		        var returnString = '';
		        for (d in data){
		            if (data.hasOwnProperty(d))
		               returnString += d + '=' + data[d] + '&';
		        }
		        // Remove last ampersand and return
		        return returnString.slice( 0, returnString.length - 1 );
		  };
	$scope.submit = function(agedcare){

		governmentApi.all($scope.agedcare.childcare_key,$scope.agedcare.childcare_location).then(function(data){
			$scope.govListing = data;
			console.log($scope.govListing);

		})
	}

	
})

.controller('governmentDetails',function ($scope,$stateParams,governmentApi) {

	governmentApi.get($stateParams.idListings).then(function(data){
		$scope.childDetail = data;
		console.log(data);
	})
	
})