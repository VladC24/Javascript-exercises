## A lovely collection of JavaScript exercises

### General Instructions
* Clone the repo:
```
$  git clone https://github.com/VladC24/Javascript-exercises.git
```
* Use a REPL to run the programs

### Programs instructions

#### 1. Eight Ball
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
