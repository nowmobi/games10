function storage(){
  console.log("storage bind localStorage");
  storage.get = function(key){
    return localStorage[key];
  }
  storage.set = function(key,value){
    localStorage[key] = value;
  }
  storage.push = function(){

  }
  storage.getraw = function(){
    var obj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      obj[key] = value;
    }
    return obj;
  }
  storage.type = 0;
}
