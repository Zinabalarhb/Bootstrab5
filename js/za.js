 
 /* ScrollOut Initilize */
    ScrollOut({
    targets:".progress-div ,.counter-div "
    });

   /* lightGallery Initilize */
   lightGallery(document.getElementById('lightgallery'), {
       
   });

     /* AOS Initilize */
     AOS.init();




     const progressDiv = document.querySelector(".progress-div"),
     progressBars = document.querySelectorAll(".progress-bar");
     counterDiv = document.querySelector(".counter-div"),
     countersTag = document.querySelectorAll(".counter-div h3");
    
 
     

  window.addEventListener("scroll",()=>{
    if (progressDiv.dataset.scroll == "in"){
       progressBars.forEach(el => {
           let valuNow = el.getAttribute("aria-valuenow")
           el.style.width =valuNow +"%";

           let counterSpan =el.parentElement.parentElement.querySelector(".progress-value span");
           let timer= setInterval(()=>{
               if(Number(counterSpan.textContent) < valuNow){
                counterSpan.textContent = Number(counterSpan.textContent) + 1;
               }
               else{
                   clearInterval(timer)
               }
           },500)


        })
    }
    else{
        progressBars.forEach(el => {
            el.style.width = 0 +"%";
            let counterSpan =el.parentElement.parentElement.querySelector(".progress-value span").textContent=0;

        })
    }

    //counter
    if(counterDiv.dataset.scroll=="in"){
        countersTag.forEach(el => {

            let time =setInterval (()=>{

                if (Number(el.innerText) < el.dataset.counter){
                    el.innerText= Number( el.innerText) +1;
                }
                else{
                    clearInterval(time)
                }

            },1000)
        })
    }
    else{
        countersTag.forEach(el=>{
            el.innerText = 0;
        })
    }
})//end event

/************************ Filter Items *****************/
const filterListItems = document.querySelectorAll(".list-group li") ,
    filteredItems = document.querySelectorAll(".filtred-items a");
    
filterListItems.forEach(list =>{
    list.addEventListener("click" ,()=>{
        
        document.querySelector(".list-group li.active").classList.remove("active");
        list.classList.add("active");

        let FilteredValue = list.dataset.filter;
       
        
        filteredItems.forEach(item => {
        
            
            if(item.classList.contains(FilteredValue))
            {
                item.classList.remove("hidden");
                item.classList.add("active");
            }
           else{
                item.classList.remove("active");
                item.classList.add("hidden");
            }
        })
    })
})

/******************** */
    

   
