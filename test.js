const readlineSync = require("readline-sync");

function remove(value) {
  var index = listPizza.indexOf(value);
  if (index > -1) {
    listPizza.splice(index, 1);
  }
  return listPizza;
}
/*
async function x(){
  require('fs').writeFile(

      './my.json',

      JSON.stringify(myArray),

      function (err) {
          if (err) {
              console.error('Crap happens');
          }
      }
  );
}
*/
function demandeClient(){
clientChoice= readlineSync.question(`Hello! Welcome to the Pizza Flavors Manager.

  Please choose your actions:

  1 - List all the pizza flavors
  2 - Add a new pizza flavor
  3 - Remove a pizza flavor
  4 - Exit this program
  5 - File Mode

  Enter your action's number: `);
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
          newPizza= readlineSync.question('Enter the new pizza right here :  ');
          listPizza.push(newPizza);
          console.log(listPizza);

          //x;
          break;
      case '3':
          rmvPizza= readlineSync.question('Enter the pizza you want to remove right here :  ');
          remove(rmvPizza);
          console.log(listPizza);
          //x;
          break;
      case '4':
          console.log("EXIT");
          s++;
          break;
      case '5':
          fs
          .readFile('menupizza.txt', function read(err, data) {
              if (err) {
                  throw err;
              }
              var content = data;

              console.log(content);

          });
      default: console.log("PFFF");
  }
}