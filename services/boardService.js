app.service('Board', [function ($http) {
    
    urlBase = "http://dlbrd.com/api/boards/";
//ba0efcb6-d661-feeb-ada8-a0a25c23ee24_1431956789313
    this.get = function(id){
       $http.get(urlBase+"/"+id);
    };

    this.put = function(id, data){
       $http.put(urlBase+"/"+id, data);
    };
    
    //{"name":"enter board name board name","email":"enter email for reminders", "cleanupTime":0}
    
    this.post = function(id, data){
      $http.put(urlBase+"/"+id, data);
    };

}])