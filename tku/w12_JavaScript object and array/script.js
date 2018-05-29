var database =[
    {
        username:"apple",
        password:"1234"
    },
    {
        username:"banana",
        password:"2345"
    },
    {
        username:"cat",
        password:"3456"
    }
];

var newsFeed =[
    {
       username:"apple",
       timeline:"So good the Javascript."
    },
    {
        username:"banana",
        timeline:"Hello World"
    },
    {
      username:"cat",
      timeline:"PWA is the web of the future."
    }
];

function isUserValid(username, password){
    for(var i=0 ; i<database.length; i++){
        if(username === database[i].username &&
           password === database[i].password){
            return true;
        }
    }
    return false;
}

function signin(username, password){
    if(isUserValid(username, password)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username and password.");
    }
}

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

signin(usernamePrompt, passwordPrompt);