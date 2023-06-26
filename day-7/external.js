 function demoExternalAlert() {
     Alert("External Alert");
 }

 function demoExternalConfirm() {
     if (onfirm("are you sure..?")) {
         Alert("yess");
     }

     else {
         Alert("noo");
     }
 }

 function demoExternalPrompt() {
     var fname=Prompt("enter firstname here..");
     var lname=Prompt("enter the last name here..");
     Alert(fname+ " " +lname);
 }