var app = angular.module("animTodo", ["ui.sortable","ngAnimate","angular.filter"]);

app.controller("TodoCtrl", function($scope, $filter) {
  $scope.title = "Board Name";
  $scope.url = "board/myepicboard";
  $scope.showHistory = false;
  $scope.items = [{text: "This is a demo todo.", complete: false}];
  $scope.itemsHistory = [
      {text: "Historical Task 1", complete: false, cleanup_date: "2015-03-02"},
      {text: "Historical Task 2", complete: true, cleanup_date: "2015-03-02"},
      {text: "Historical Task 3", complete: true, cleanup_date: "2015-03-03"},
      {text: "Historical Task 4", complete: false, cleanup_date: "2015-03-03"},
      {text: "Historical Task 5", complete: true, cleanup_date: "2015-04-03"},
      {text: "Historical Task 6", complete: true, cleanup_date: "2015-04-06"}
      
  ];
  $scope.newTodo = "";
  
  $scope.addTodo = function() {
    $scope.items.push({text: $scope.newTodo, complete: false});
    $scope.newTodo = "";
  };
  
  $scope.removeTodo = function(index) {
    var item = $scope.items.splice(index, 1);
    item[0]["cleanup_date"] = moment().format("YYYY-MM-DD");
    item[0]["completed"] = false;
    $scope.itemsHistory.push(item[0]);
    $scope.$apply();
  };
  
  $scope.clearAll = function() {
    $scope.items = [];
  };
    
  $scope.toggleHistory = function(){
    $scope.showHistory = !($scope.showHistory);
  };
    
  $scope.toggleCompleteTodo = function($event, indx){
      var checkbox = $event.target;
      var action = (checkbox.checked ? 'add' : 'remove');
      var item = $scope.items.splice(indx, 1);
      item[0]["cleanup_date"] = moment().format("YYYY-MM-DD");
      if(action === 'add')
          item[0]["completed"] = true;
      $scope.itemsHistory.push(item[0]);
      $scope.$apply();
      
  };

  
  console.log($scope);
});