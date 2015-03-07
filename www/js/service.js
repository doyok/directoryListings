angular.module('directoryApp.services', [])

.factory('childApi',function ($http,$q,$ionicLoading,$timeout) {

	function getListingAll(key,idloc){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://childcare.directorylistings.com.au/child.php?keyword="+key+"&location_id="+idloc)
			.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
			.error(function(){
				console.log("error");
				deffered.reject();
			});
		return deffered.promise;
	}
	function getListingDetail(idListings){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://www.directorylistings.com.au/rest/child_detail.php?id="+idListings)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}
	function setIdListing(idlisting){
		idListings = idlisting;

	}
	
	return{
		all: getListingAll,
		get: getListingDetail
 	};
	
})

.factory('agedApi',function ($http,$q,$ionicLoading,$timeout) {

	function getListingAll(key,idloc){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://agedcare.directorylistings.com.au/child.php?keyword="+key+"&location_id="+idloc)
			.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
			.error(function(){
				console.log("error");
				deffered.reject();
			});
		return deffered.promise;
	}

	function getListingDetail(idListings){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://www.directorylistings.com.au/rest/aged_detail.php?id="+idListings)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}
	function setIdListing(idlisting){
		idListings = idlisting;

	}
	
	return{
		all: getListingAll,
		get: getListingDetail
 	};
	
})

.factory('bussinessApi',function ($http,$q,$ionicLoading,$timeout) {

	function getListingAll(key,idloc){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://business.directorylistings.com.au/child.php?keyword="+key+"&location_id="+idloc)
			.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
			.error(function(){
				console.log("error");
				deffered.reject();
			});
		return deffered.promise;
	}

	function getListingDetail(idListings){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://www.directorylistings.com.au/rest/bussiness_detail.php?id="+idListings)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}
	function setIdListing(idlisting){
		idListings = idlisting;

	}
	
	return{
		all: getListingAll,
		get: getListingDetail
 	};
	
})

.factory('governmentApi',function ($http,$q,$ionicLoading,$timeout) {

	function getListingAll(key,idloc){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://government.directorylistings.com.au/child.php?keyword="+key+"&location_id="+idloc)
			.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
			.error(function(){
				console.log("error");
				deffered.reject();
			});
		return deffered.promise;
	}

	function getListingDetail(idListings){
		var deffered = $q.defer();
		$ionicLoading.show({template: 'Loading ... '})
		$http.get("http://www.directorylistings.com.au/rest/goverment_detail.php?id="+idListings)
		.success(function(data){
				$timeout(function(){
					$ionicLoading.hide();
					deffered.resolve(data);
				},3000);
				

			})
		.error(function(){
			console.log("error");
			deffered.reject();
		});
		return deffered.promise;
	}
	function setIdListing(idlisting){
		idListings = idlisting;

	}
	
	return{
		all: getListingAll,
		get: getListingDetail
 	};
	
})
