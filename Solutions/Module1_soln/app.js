(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', setValue);

setValue.$inject = ['$scope'];

function setValue($scope){
   $scope.food="";
   $scope.checkAmount = function(){
     var value = getString($scope.food);
     $scope.food = value;
   }
};

function getString(string){
  if (string==""){
    return "Please enter data first";
  }
   var singleValue = string.split(',');
   var a = singleValue.length ;
   for (var i=0; i<singleValue.length ;i++){
     if(singleValue[i].replace(/\s/g, "").length == 0){
       a-- ;
     }
   }
   if (a <=3){
     return "enjoy";
   }else{
     return "Too much";
   }
};

})();
