var app = angular.module("animTodo", ["ui.sortable","ngAnimate","angular.filter", "infinite-scroll"]);

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
      {text: "Historical Task 6", complete: true, cleanup_date: "2015-04-06"},
      {text: "Historical Task 7", complete: true, cleanup_date: "2015-04-06"},
      {text: "Historical Task 8", complete: true, cleanup_date: "2015-04-07"},
      {text: "Historical Task 9", complete: true, cleanup_date: "2015-04-07"},
      {text: "Historical Task 10", complete: true, cleanup_date: "2015-04-08"},
      {text: "Historical Task 11", complete: false, cleanup_date: "2015-04-08"},
      {text: "Historical Task 12", complete: true, cleanup_date: "2015-04-08"},
      {text: "Historical Task 13", complete: false, cleanup_date: "2015-04-08"},
      {text: "Historical Task 14", complete: true, cleanup_date: "2015-04-10"},
      {text: "Historical Task 15", complete: true, cleanup_date: "2015-04-10"},
      {text: "Historical Task 16", complete: false, cleanup_date: "2015-04-13"},
      {text: "Historical Task 17", complete: true, cleanup_date: "2015-04-14"},
      {text: "Historical Task 18", complete: false, cleanup_date: "2015-04-15"},
      {text: "Historical Task 19", complete: false, cleanup_date: "2015-04-15"},
      {text: "Historical Task 20", complete: false, cleanup_date: "2015-04-15"},
      {text: "Historical Task 21", complete: true, cleanup_date: "2015-04-15"},
      {text: "Historical Task 22", complete: true, cleanup_date: "2015-04-15"},
      {text: "Historical Task 23", complete: true, cleanup_date: "2015-04-18"},
      {text: "Historical Task 24", complete: false, cleanup_date: "2015-05-01"},
      {text: "Historical Task 25", complete: true, cleanup_date: "2015-05-06"},
      {text: "Historical Task 26", complete: false, cleanup_date: "2015-05-06"},
      {text: "Historical Task 27", complete: true, cleanup_date: "2015-05-06"},
      {text: "Historical Task 28", complete: false, cleanup_date: "2015-05-08"},
      {text: "Historical Task 29", complete: true, cleanup_date: "2015-05-08"},
      {text: "Historical Task 30", complete: false, cleanup_date: "2015-05-08"}
  ];
  $scope.newTodo = "";
    
  $scope.viewItemsHistory = $scope.itemsHistory;
  $scope.viewOffset = 0;
  $scope.busyLoadingData = false;
  $scope.noMoreResults = false;
  

  $scope.viewMoreHistory = function(){
      console.log("sad");
      if ($scope.busyLoadingData) return;
      $scope.busyLoadingData = true;
      count = 10;
      offset = $scope.viewOffset;
      while(count != 0){
          if(offset >= $scope.itemsHistory.length)
          {
              $scope.busyLoadingData = false;
              $scope.noMoreResults = true;
              return;
          }
          if($scope.viewItemsHistory.indexOf($scope.itemsHistory[offset]) == -1){
              $scope.viewItemsHistory.push($scope.itemsHistory[offset]);
              count--;
          }
          offset++;
      }
      $scope.viewOffset = offset;
      $scope.busyLoadingData = false;
      
  };
    
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
      var item = $scope.items.splice(indx, 1);
      item[0]["cleanup_date"] = moment().format("YYYY-MM-DD");
      if(action === 'add')
          item[0]["completed"] = true;
      $scope.itemsHistory.push(item[0]);      
  };

  
  console.log($scope);
});
