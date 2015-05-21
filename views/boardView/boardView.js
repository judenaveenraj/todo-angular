
app.controller("TodoCtrl", function($scope, $routeParams, $filter) {
  
  $scope.boardId = $routeParams["boardId"]
  $scope.items = [];
  
  $scope.title = "Board Name";

  $scope.showHistory = false;
  $scope.itemsHistory = [];
  $scope.newTodo = "";
    
  $scope.viewItemsHistory = [];
  $scope.viewOffset = 0;
  $scope.busyLoadingData = false;
  $scope.noMoreResults = false;
  

  
    
  $scope.addTodo = function() {
    $scope.items.push({text: $scope.newTodo, complete: false});
    $scope.newTodo = "";
  };
  
  $scope.removeTodo = function(index) {
    var item = $scope.items.splice(index, 1);
    item[0]["cleanup_date"] = moment().format("YYYY-MM-DD");
    item[0]["completed"] = false;
    $scope.itemsHistory.push(item[0]);
    $scope.noMoreResults = false;
    $scope.viewMoreHistory();
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
      var item = $scope.items[index];
      item["cleanup_date"] = moment().format("YYYY-MM-DD");
      if(action === 'add')
          item["completed"] = true;
      $scope.itemsHistory.push(item);      
  };

  
  console.log($scope);
});
