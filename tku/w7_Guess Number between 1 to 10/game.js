var secretNum=Math.floor(Math.random()*10)+1;
console.log(secretNum);
var stringGuess=prompt("Guess a number");
var guess=Number(stringGuess);
var tries=1;
var maxtry=5;

while(tries<=maxtry){
if(secretNum===guess){alert('You got it right');break;}
else if(guess>secretNum)
{
    alert('Too hight,Try again');
}
else if(guess<secretNum)
{
    alert('Too low,Try again');
}
    tries++;
    stringGuess=prompt('Guess a number');
    guess=Number(stringGuess);
}