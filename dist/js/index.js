(function(){
    
        let pictures = document.getElementsByClassName("pictureClass");
        let dots = document.getElementsByClassName("dots");

        pictures[0].classList.toggle("showedPicture");
        console.log(pictures[0])
        
        for(let i = 0; i < dots.length; i++){
            dots[i].addEventListener("click", (e) => console.log(e.target))
        }
    

}())