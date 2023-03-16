function EnAdopcion(){
    var path = window.location.pathname;
	var page = path.split("/").pop();
    if(page == "index.html"){
        location.href = "./adopcion.html";
    }else{
        location.href = "./index.html";
    }  
}


