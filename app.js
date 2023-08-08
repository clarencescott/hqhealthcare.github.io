function menunavShow(){
    if (document.getElementById("navigation").style.display === "none"){
        document.getElementById("navigation").style.display = "block";
        document.getElementById("show").style.display = "none"
    }
    else{
        document.getElementById("navigation").style.display = "none";
        document.getElementById("show").style.display = "block";
    }
}
