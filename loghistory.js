//demo data;
let previous_logs=[
    {"date":"January 12", 
     "previous_tasks":"x,b,c,d", 
     "new_tasks": "q, w, e, r",
    }

]; 


//define references to elements;
const card_container=document.getElementById("card-container"); 
const month_place=document.getElementById("month"); 
const card_place=document.getElementById("day"); 
const previous_tasks_container=document.getElementById("previous_tasks");
const new_tasks_container=document.getElementById("new_tasks"); 


//create new task UI
function create_new_tasks_element(date, previous_tasks, new_tasks){
    const temp_node=card_container.cloneNode(true); 
    const date_split=date.split(" ");
    temp_node.querySelector("#month").textContent=date_split[0];
    temp_node.querySelector("#day").textContent=date_split[1];

    
    //seperate string
    const previous_tasks_list=previous_tasks.split(",")
    console.log(previous_tasks_list);


    //Populate with data;
    previous_tasks_list.forEach(previous_task => {
        let temp_li=document.createElement("li"); 
        temp_li.textContent=previous_task
        previous_tasks_container.append(temp_li)
        
    });

    card_container.append(temp_node);
};


console.log("RAHHHH")
create_new_tasks_element("January 15", "cook,clean,dance", "");