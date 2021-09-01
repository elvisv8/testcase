var mdl = angular.module("testcase", ['ngMaterial','ngMessages']);

/* Validate for unique value directive */
mdl.directive('checkUniq', function() {
     return {
       restrict: 'A', 
       require: 'ngModel', 
       link: function(scope, elem, attrs, ngModel) {
         scope.$watch(attrs.ngModel, function() {
            validate();
         });
          
         var validate = function() {
            /* Validate for unique value */ 
            ngModel.$setValidity('unique', ngModel.$viewValue !== "testas@testas.lt");
         }; 
       } 
     }
});

/* Validate for equals directive */
mdl.directive('checkEquals', function() {
     return {
       restrict: 'A', 
       require: 'ngModel', 
       link: function(scope, elem, attrs, ngModel) {
         scope.$watch(attrs.ngModel, function() {
            validate();
         });
         
         attrs.$observe('checkEquals', function (val) {
            validate();
         });         
          
         var validate = function() {
            var val1 = ngModel.$viewValue;
            var val2 = attrs.checkEquals;         
            
            /* Validate for equals */ 
            ngModel.$setValidity('equals', ! val1 || ! val2 || val1 === val2);
         }; 
       } 
     }
});

/* Test case controller */
mdl.controller("MainController", ["$scope", "$mdDialog", function(scope, $mdDialog) {


/* Main data, can be set default values */
scope.userdata = { name:null, 
                   email:null, 
                   password:null, retryPassword:null, friends:[{name:null,email:null}]};

/* Message operations using template ID */
scope.msg = {
  show: function(id) {
    $mdDialog.show({
      contentElement: '#' + id,
	  parent: angular.element(document.body), 
      clickOutsideToClose: true
    });
  },
  
  close: function() { $mdDialog.hide();}
}

}]);



