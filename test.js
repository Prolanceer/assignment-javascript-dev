var emp = {
      name: "Rajesh",
      address : {
             locality : {
                   street : "2nd main domlur"
              }
        }
    }
     var getObjPath= function(emp, path){
        if(!path)
        return null;
        return path;
    }
    console.log(getObjPath(emp, emp.address.locality.street));