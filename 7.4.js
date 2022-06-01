const readlineSync = require("readline-sync");

function remove(value){
    let index= listPizza.indexOf(value);
    if(index>-1){
        listPizza.splice(index,1);
    }
    return listPizza;
}

function demandeClient(){
    clientChoice = readlineSync.question(`

    Hello! Welcome to the Pizza Flavors Manager.

    Please choose your actions:
    
    1 - List all the pizza flavors
    2 - Add a new pizza flavor
    3 - Remove a pizza flavor
    4 - Exit this program
    
    Enter your action's number:`);
    return clientChoice;
}
let listPizza=[];
let newPizza=0,rmvPizza=0,s=0,clientChoice;
while(s==0){
    demandeClient();
    switch(clientChoice){
        case '1':
            console.log(listPizza);
            break;
        case '2':
            newPizza=readlineSync.question("Enter the name of the new pizza flavor: ");
            listPizza.push(newPizza);
            console.log(listPizza);
            break;
        case '3':
            rmvPizza=readlineSync.question("Enter the name of the pizza flavor you want to remove: ");
            remove(rmvPizza);
            console.log(listPizza);
            break;
        case '4':
            console.log("EXIT");
            s++;
            break;
        default:
            console.log("Please enter a valid number");
    }
}

