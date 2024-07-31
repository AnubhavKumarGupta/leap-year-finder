function UserInputChanged(input) {
  console.log(input.value);
  const year = Number(input.value);

  // Check leap year conditions
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  console.log(`Is Year ${year} a leap year? ${isLeap}`);

  // Update the DOM with the result
  document.getElementById("result").innerText = `${year} is ${
    isLeap ? "a" : "not a"
  } Leap Year.`;
}
