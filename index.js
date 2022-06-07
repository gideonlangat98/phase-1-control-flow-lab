function scuberGreetingForFeet(feet){
  // Write your code here!
  if(feet <= 400) {
    return 'This one is on me!'
  }
  else if (feet >= 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else if(feet > 2500) {
    return 'No can do.'
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  const findCity = (city=='NYC') ? "Ok, sounds good." : "No go.";
  return findCity;
}
ternaryCheckCity(NYC);
ternaryCheckCity(Pittsburgh);


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case('generous'):
    return 'Thank you so much.';

    break;

    case('not as generous'):
    return 'Thank you.';

    break;

    default:

      return 'Bye.';

      break;
  }
  }
  switchOnCharmFromTip(tip);
