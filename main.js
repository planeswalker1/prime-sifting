// Prime Sifting
// Given a number, write a method that returns all of the prime numbers less than that number.

// Use the Sieve of Eratosthenes to solve it.Here's how the Sieve of Eratosthenes works to find a number up to a given number:

// Create a list of numbers from 2 through n: 2, 3, 4, ..., number.
// Initially, let prime equal 2, the first prime number.
// Starting from prime, remove all multiples of prime from the list.
// Increment prime by 1.
// When you reach number, all the remaining numbers in the list are primes.

function findPrimes (num) {
  // Eratosthenes algorithm to find all primes under num
  let booleans = [];
  let upperLimit = Math.sqrt(num);
  let primes = [];

  // Make an array from 2 to (num - 1)
  for (let i = 0; i < num; i++) {
    booleans.push(true);
  }

  // Remove multiples of primes starting from 2, 3, 5,...
  for (let i = 2; i <= upperLimit; i++) {
    if (booleans[i]) {
      for (let j = i * i; j < num; j += i) {
        booleans[j] = false;
      }
    }
  }
  // console.log(booleans);
  // All booleans[i] set to true are primes
  for (let i = 2; i < num; i++) {
    if (booleans[i]) {
      primes.push(i);
    }
  }
  // console.log(primes);
  return primes;
};

const form = document.querySelector('form');
const input = document.querySelector('input');
const output = document.querySelector('.hidden');

// form submit event listener to show primes
form.addEventListener('submit', function (event) {
  event.preventDefault();
  output.textContent = 'output: ';
  // round number to nearest integer
  let number = Number(input.value);

  // error handling
  if (isNaN(number) || number % 1 !== 0) {
    output.textContent = 'Please enter an integer';
    output.classList.remove('hidden');
    return;
  }
  let primes = findPrimes(number);
  output.textContent += primes.join(', ');
  output.classList.remove('hidden');
});

// input focus event listener to hide output
input.addEventListener('focus', function () {
  output.classList.add('hidden');
});