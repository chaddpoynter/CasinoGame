alert("Welcome to the Casino Game! You have $500 to spend. Good Luck!")
if (confirm("Press Ok to confirm the amount!")) {
  alert("Let's get started!");
} else {
  alert("Nope not enough!");
}

prompt("Pick a color")
break


const roulette = numbers => {
  const array = [];

  Object.keys(numbers).forEach(key => {
    for (let i = 0; i < numbers[key]; i++) {
      array.push(key);
    };
  });

  return array[(Math.random() * array.length) | 0];

};

const numbers = {
  Black
};
