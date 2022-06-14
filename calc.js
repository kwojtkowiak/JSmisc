if(machineActive) {
	switch(score) {
case score>=0:
        response = "That was a terrible score — total fail!";
break;

case score>=20:
response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
break;

case score>=40:
response = "You did a passable job, not bad!";
break;

case score>=70:
response = "That\'s a great score, you really know your stuff.";
break;
 
case score>=90:
response = "What an amazing score! Did you cheat? Are you for real?";
break;

default:
response = "This is not possible, an error has occurred.";

}} 

else {
  response = 'The machine is turned off. Turn it on to process your score.';
}