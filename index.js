console.log("Welcome to RockPaperScissors\n");

let User_Score=0;
let Computer_Score=0;


function getHumanChoice(){
    let User_Choice=prompt("enter rock,paper or scissors: ");
    try{
    User_Choice=User_Choice.toLowerCase();
    console.log(`user chose: ${User_Choice}\n`);
    let intofuser;
    if (User_Choice=="rock")
    {
        intofuser=1;
    }
    else if(User_Choice=="paper")
    {
        intofuser=2;
    }
    else if (User_Choice=="scissors"){
        intofuser=3;
    }
    else{
        console.log("enter valid option\n")
    }
    return intofuser;
    }catch(e){
        console.log("enter valid option");
    }
}

function getComputerChoice(){
    let Computer_Choice;
    let randomnumber=Math.random();
    Computer_Choice=Math.floor(randomnumber * 3) + 1;
    if (Computer_Choice==1){
        console.log("computer chose rock\n")
    }
    else if (Computer_Choice==2){
        console.log("computer chose paper\n")
    }
    else{
        console.log("computer chose scissors\n")
    }
    return Computer_Choice;
}


function RockPaperScissors(Computer_Choice,User_Choice){


    if ((Computer_Choice==1&&User_Choice==2)||(Computer_Choice==2&&User_Choice==3)||(Computer_Choice==3&&User_Choice==1)){
        User_Score++;
        console.log("user wins\n");
    }
    else if(Computer_Choice==User_Choice){
        console.log("tie\n");
    }
    else if((Computer_Choice==1&&User_Choice==3)||(Computer_Choice==2&&User_Choice==1)||(Computer_Choice==3&&User_Choice==2)){
        Computer_Score++;
        console.log("computer wins\n")
    }
    else{
        console.log("something wrong, no score\n");
    }
}

let n=0;
do{
    let hc=getHumanChoice();
    let cc=getComputerChoice();
    RockPaperScissors(cc,hc);
    n++;
}while(n!=5);

console.log(`user score: ${User_Score}\ncomputer score: ${Computer_Score}\n`)

if (Computer_Score>User_Score){
    console.log("computer wins");
}
else if (Computer_Score<User_Score){
    console.log("user wins");
}
else{
    console.log("tie");
}