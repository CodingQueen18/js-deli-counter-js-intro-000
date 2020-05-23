var currentCustomer = [];
var num;

function takeANumber(currentCustomer, newCustomer) {
/*  for (var num = 1; num > currentCustomer.length; num++)  currentCustomer.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${num} in line.`} */

/*  if(num > currentCustomer.length) {num = currentCustomer.length; currentCustomer.push(newCustomer);
    return `Welcome, ${newCustomer}. You are number ${num} in line.`} */

  currentCustomer.push(newCustomer);
  num = currentCustomer.length;
  return `Welcome, ${newCustomer}. You are number ${num} in line.`
}


function nowServing(currentCustomer) {
/*  if(currentCustomer !== []) {return currentCustomer[0] delete currentCustomer[0]}
else {return "There is nobody waiting to be served!"} */

/*  if(currentCustomer === true) {return `Currently serving ${currentCustomer[0]}.`;delete currentCustomer[0]}
  else {eturn "There is nobody waiting to be served!";} */

  if(currentCustomer.length > 0) {
    //return `Currently serving ${currentCustomer[0]}. `
    //currentCustomer.shift()
    //delete currentCustomer[0]
    //currentCustomer.splice(0, 1)
    //currentCustomer.slice(0, 1)
    //return `Currently serving ${currentCustomer.shift()}. `
    return "Currently serving " + currentCustomer.shift() + "."
  }
  else {
    return "There is nobody waiting to be served!"
  }
}


var newLine = [];

function currentLine(currentCustomer) {
  for(var i = 0; i < currentCustomer.length; i++) {
     newLine.push((i + 1)+ ". " + currentCustomer[i]);
  }

  if(currentCustomer.length === 0) {
    //return "The line is currently: " +  (i + 1) +  ". " + currentCustomer[i];
    return "The line is currently empty."
  }
   else {
      return "The line is currently: " + newLine.join(", ")
    }
}
