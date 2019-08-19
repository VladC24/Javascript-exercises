# A lovely collection of JavaScript exercises

## General Instructions
* Clone the repo:
```
$  git clone https://github.com/VladC24/Javascript-exercises.git
```
* Use a REPL to run the programs

## Programs instructions

### 1. Eight Ball
Replace the value of the variable 'userQuestion' with a question of your choice.

__Example:__
```
$  let userQuestion = 'Am I going to get a holiday as a present for my Bday?';
```

### 2. A library of books and stuff
Through this exercise, I became familiar with __inheritance__ in JavaScript (Added comments throughout the exercise)

__Example:__
By using a REPL, insert the below under the program:

```
$  const readyPlayerOne = new Book('Ernest Cline', 'Ready Player One', 356);
$  readyPlayerOne.toggleCheckOutStatus();
$  console.log(readyPlayerOne.isCheckedOut);
$  readyPlayerOne.addRating(5);
$  readyPlayerOne.addRating(4.5);
$  readyPlayerOne.addRating(4);
$  console.log(readyPlayerOne.getAverageRating());
```
### 3. Count the Monkeys (Codewars exercise)
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example:
```
monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
monkeyCount(1) // --> [1]
```

### 4. Sunglass shop
In this exercise I constructed promises which resolve synchronously, to more easily understand how they work.
