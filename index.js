function scuberGreetingForFeet(string) {
  // Write your code here!
  if(string <= 199) {return "This one is on me!"}
  else if(string===2001) {return "I will gladly take your thirty bucks."}
  else if(string===2501) {return "No can do."}; 
}

function ternaryCheckCity(n){
  // Write your code here!
  return n === "NYC" ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(Tip){
  // Write your code here!
    switch(Tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      case 'thanks for everything':
        return 'Bye.';
    }

}