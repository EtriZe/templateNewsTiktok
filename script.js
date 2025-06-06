document.addEventListener("click", function(){
    var news = document.querySelector(".carousel").children;

    for (const [key, value] of Object.entries(news)) {
        if(value.id === "current"){
            value.id = "hide";
            news[parseInt(key)+1].id = "current";
            news[parseInt(key)+2].id = "next";            
            break;
        }
    }

})
