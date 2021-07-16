var studentmodule= (function(){ function student(){
    var name="";
    var address="";
    var mobile = 0;
    function setname(_name){
             name = _name;
    }
    function getname(){
        return name;
    }
    function setaddress(_address){
        address = _address;
    }
    function getaddress(){
    return address ;
    }
    function setmobile(_mobile){
        mobile = _mobile;
    }
    function getmobile(){
        return mobile ;
    }
return{
    setName:setname,
    getName:getname,
    setAddress:setaddress,
    getAddress:getaddress,
    setMobile:setmobile,
    getMobile:getmobile
}
}
return{
    student 
}
})();