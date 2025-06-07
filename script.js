onload = (event) => {

    var btnDown = document.querySelector(".downCarousel");
    var btnReveal = document.querySelector(".revealInfos");

    btnDown.addEventListener("click", function(){
        var news = document.querySelector(".carousel_down").children;

        for (const [key, value] of Object.entries(news)) {
            if(value.id === "current"){
                value.id = "hide";
                value.classList.add("seen");
                news[parseInt(key)+1].id = "current";
                news[parseInt(key)+2].id = "next";            
                break;
            }
        }

    })

    btnReveal.addEventListener("click", function(){
        var news = document.querySelector(".carousel_down").children;

        for (const [key, value] of Object.entries(news)) {
            if(value.classList.contains("seen")) continue;

            var details = value.querySelectorAll(".detail");
            for (const [key, detail] of Object.entries(details)) {
                if(detail.id === "hide") {
                    detail.id = ""; 
                    break;
                }
            }
            break;
        }

    })


}








