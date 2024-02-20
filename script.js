
let containerBox = document.querySelectorAll(".container-box");

containerBox.forEach(item => {

    const title = item.querySelector(".heading");
    const content = item.querySelector(".accordian-para");

    title.addEventListener("click", () => {
        for(let i = 0; i < containerBox.length; i++){
            if(containerBox[i] != item){
                containerBox[i].classList.remove("active");
            }
            else{
                item.classList.toggle("active");
            }
        }
    });
});


