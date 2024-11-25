const makeChange = (amount) => {

	 const change = {
	    q: 0, // quarters
	    d: 0, // dimes
	    n: 0, // nickels
	    p: 0  // pennies
	};

  // Quarters
  change.q = Math.floor(amount / 25);
  amount %= 25;

  // Dimes
  change.d = Math.floor(amount / 10);
  amount %= 10;

  // Nickels
  change.n = Math.floor(amount / 5);
  amount %= 5;

  // Pennies
  change.p = amount; // Remaining amount is all pennies

  return change;
	
  
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
