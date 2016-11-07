//定义生成随机数
var rand = {};
rand.get = function (begin,end){
 return Math.floor(Math.random()*(end-begin))+begin;
};

//var v = rand.get(1,10)

function gscShengciController($scope) {
	//范围数据
  $scope.danci = ["a","b","c","d","e"];
  //范围数据对应的seq
  //$scope.seq = [0,1,2,3,4];
  $scope.seq = [];
  //当前数据(一个)
  $scope.currentDanci = 0;
	
	var loopCount = 0;
	while ($scope.seq.length < $scope.danci.length ) {
		loopCount += 1;
		//取随机数
		var randomSeq = rand.get(0,$scope.danci.length);
		//现有的seq数组中不存在的情况下才追加
		if ($scope.seq.indexOf(randomSeq) == -1) {
			$scope.seq.push(randomSeq);
		}

		if (loopCount > 5000) {
			console.log("dead loop...");
			break;
		}
	}

  	//后一个
  	$scope.nextDanci = function() {
  		if (($scope.currentDanci + 1) < $scope.danci.length) {
  			$scope.currentDanci += 1;
  		}
  	}

  	//前一个
  	$scope.preDanci = function() {
  		if (($scope.currentDanci + 1) > 1) {
  			$scope.currentDanci -= 1;
  		}
  	}
  	
}