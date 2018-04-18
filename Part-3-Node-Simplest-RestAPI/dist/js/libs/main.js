app = angular.module('KDApp',[]);
app.controller('CntrlC',['$scope','Json','AddtoCart',function($scope,$json,$addtocart){
    $scope.success = function(response){
        $scope.products = response.data;
    }
    $scope.error = function(err){
        
    }
    $json.queue($scope.success);
    $scope.hanlder = function(i){
        /*$scope.products.splice(i,1);*/
        
    }
    $scope.atchandler = function(e){
        /*for(var i = 0; i < $scope.products.length;i++){
            if($scope.products[i].checked){
                $addtocart.add($scope.products[i]);
                $scope.products.splice(i,1);
                --i;
            }
        }*/
        $scope.products.forEach(function(e,d){
            if(e.checked){
                $addtocart.add($scope.products[d]);
                $scope.products.splice(d,1);
            }
            
        });
    }
    
}]);
app.controller('CntrlA',['$scope',function($scope){

}]);
app.controller('CntrlB',['$scope','Json','AddtoCart',function($scope,$json,$addtocart){
   $scope.products = $addtocart.cart();
    /* $scope.success = function(response){
        $scope.products = response.data;
    }
    $scope.error = function(err){
        
    }
    $json.queue($scope.success);*/
}]);
app.service('Json',['$http',function($http){
    var sucessHanlders = [];
    $http({
        method:'GET',
        url:'/json/product.json'
    }).then(function(resp){
        for(var i=0; i<sucessHanlders.length;i++){
            sucessHanlders[i](resp);
        }
    },function(){});
    this.queue = function(f){
        sucessHanlders.push(f);
    };
}]);
