let User_Score=0;
let Computer_Score=0;
let Computer_Choice_String="";

let User_Choice;
let cc;
let res;
let n=1;

let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector(".scissors");
let reset_var=document.querySelector(".reset");
let Computer_Choice_Parent=document.querySelector(".computer-choice");
let score_container=document.querySelector(".score-container");

let comp_choice_div1 = document.createElement("div");
let comp_choice_div2 = document.createElement("div");
let comp_score_div = document.createElement("div");
let user_score_div = document.createElement("div");


rock.addEventListener('click', () => {
    reset_dynamic_html();
    User_Choice=1;
    cc=getComputerChoice();
    res=RockPaperScissors(cc,User_Choice);
    dynamic_html(res);


  });


paper.addEventListener('click', () => {
    reset_dynamic_html();
    User_Choice=2;
    cc=getComputerChoice();
    res=RockPaperScissors(cc,User_Choice);
    dynamic_html(res);
 

  });


scissors.addEventListener('click', () => {
    reset_dynamic_html();
    User_Choice=3;
    cc=getComputerChoice();
    res=RockPaperScissors(cc,User_Choice);
    dynamic_html(res);



  });

  reset_var.addEventListener('click',() =>{
    User_Score=0;
    Computer_Score=0;
    comp_score_div.textContent = "computer score: 0";
    user_score_div.textContent ="user score: 0";
    comp_choice_div1.textContent ="";
    comp_choice_div2.textContent ="";
});



function reset_dynamic_html(){
    comp_choice_div1.textContent ="";
    comp_choice_div2.textContent ="";
    comp_score_div.textContent = "";
    user_score_div.textContent ="";

    Computer_Choice_Parent.appendChild(comp_choice_div1);
    Computer_Choice_Parent.appendChild(comp_choice_div2);
    score_container.appendChild(comp_score_div);
    score_container.appendChild(user_score_div);
}

function dynamic_html(res){

    comp_choice_div1.textContent = Computer_Choice_String;
    comp_choice_div2.textContent = res;
    comp_score_div.textContent = `computer score: ${Computer_Score}`;
    user_score_div.textContent = `user score: ${User_Score}`;
}



function getComputerChoice(){
    let Computer_Choice;
    let randomnumber=Math.random();
    Computer_Choice=Math.floor(randomnumber * 3) + 1;
    if (Computer_Choice==1){
        Computer_Choice_String="computer chose rock";
    }
    else if (Computer_Choice==2){
        Computer_Choice_String="computer chose paper";
    }
    else{
        Computer_Choice_String="computer chose scissors";
    }
    return Computer_Choice;
}


function RockPaperScissors(Computer_Choice,User_Choice){


    if ((Computer_Choice==1&&User_Choice==2)||(Computer_Choice==2&&User_Choice==3)||(Computer_Choice==3&&User_Choice==1)){
        User_Score++;
        return "user wins";
    }
    else if(Computer_Choice==User_Choice){
        return "tie";
    }
    else if((Computer_Choice==1&&User_Choice==3)||(Computer_Choice==2&&User_Choice==1)||(Computer_Choice==3&&User_Choice==2)){
        Computer_Score++;
        return "computer wins";
    }
    else{
        console.log("something wrong, no score\n");
    }
}


