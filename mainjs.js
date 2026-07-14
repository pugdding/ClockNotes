
       //Define Variables
       const session_button=document.querySelector("#session-button"); 
       const start_timer_button=document.getElementById("session-button"); 

        //Clicked start on session button
        start_timer_button.addEventListener("click", ()=>{
          
           //Debug Statement
           console.log("Starting Timer...")
           session_button.textContent="Pause Timer";
           
            //Timer Code Snippet
           let timer_running=false; 

           //Timer Information
           let timeRemaining = 60 * 60; 
           let timer_placeholder=document.querySelector("#timer");

        

            //timer element
            if (timer_running==false){
                console.log("RHAASHKSHSAJSAKH")
                const timer = setInterval(() => {
                //debounce (therefore, timer can only be started once)
                timer_running=true;

                //math calculations
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;


                //update timer on the UI
                timer_placeholder.querySelector("#minutes").textContent=minutes;
                timer_placeholder.querySelector("#seconds").textContent=seconds.toString().padStart(2,"0");
                console.log(`${minutes}:${seconds.toString().padStart(2, "0")}`);

                //decrease the timera
                timeRemaining--;

                //timer finished
                if (timeRemaining < 0) {
                    clearInterval(timer);
                    console.log("Time's up!");
                }
            }, 
            1000);

            } else {
                //the timer is currently running, pause. 
                console.log("Pause timer request.")

            }
            
        })

