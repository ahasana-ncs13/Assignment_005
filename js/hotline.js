// heart icons 
function heartCount(id){
    let heartCount=document.getElementById(id); 
    let newHeart= heartCount.innerText;

    let newCount = Number(newHeart) + 1;
    heartCount.innerText=newCount;
}

let heartBtns =document.querySelectorAll('.heart-btn');
 for (const heart of heartBtns) {
    heart.addEventListener("click",function(){
        heartCount("heart-count");
    })
}

// call buttons
let callBtns =document.querySelectorAll('.call-btn');
 for (const call of callBtns) {
    call.addEventListener("click",function(){

        // information 
       let title = call.parentNode.parentNode.children[1].innerText;
       let number = call.parentNode.parentNode.children[3].innerText; 
       let time = {
        date:new Date().toLocaleTimeString(),
       } 

     // coin  
        let coinAvail=document.getElementById("coin-avail");
        let coinAvailIN=coinAvail.innerText;
        let newCoinAvail=Number(coinAvailIN) - 20;
       if(newCoinAvail<0){
          alert("you don't have enough coin to make call ,you need 20 coin");
          return;
       }
        else{
        // alert  Message
        alert("calling"+" "+title+" "+number+"....");

        // call history
         let historySection=document.getElementById("history-section");
         let historyDiv= document.createElement('div');
          historyDiv.innerHTML=`
               <div class=" history-card flex justify-between items-center bg-[#FAFAFA] gap-[8px] rounded-[8px] mt-[16px] p-[16px]">
                    <div class="infomation">
                         <h3 class="title inter-font font-semibold text-[1.125rem] text-[#111111]">${title} </h3>
                         <p class="number text-[1.125rem] text-[#5C5C5C]">${number}</p>
                   </div>
                        <p class="time text-[1.125rem] text-[#111111]">${time.date}</p>
              </div>`
         historySection.append(historyDiv);

     // history Clear
         document.getElementById("history-btn").addEventListener("click",function(){
         let clear = historyDiv.innerText =""; 
          });
   
       }

         coinAvail.innerText=newCoinAvail;
   })   
}


