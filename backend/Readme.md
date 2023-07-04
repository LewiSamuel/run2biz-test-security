# TEST – Analista Desenvolvedor Javascript
## Question 1
Part 1
You are a security expert attempting to break into a company which paid you to do so. By exploiting security flaws you discover that valid passwords must follow a certain pattern.
Pattern rules:
The password must be between 184759-856920.
At least two adjacent digits must be the same (like 22 in 122346).
Starting from left to right, digits only increase or stay the same (like 111237 or 135678).
Examples:
222222 is valid (double 22, never decreases).
236775 is not valid (decreasing pair of digits 75).
345789 is not valid (no double).
Before attempting brute force you would like to know how many possible combinations of the password can exist. How many passwords exist following these rules?
Part 2
After rechecking your findings you noticed there was an additional rule you missed: You must have at least one group of exactly two of the same characters.
For Example:
334478 is valid because the digits never decrease and all repeated digits are exactly two digits long.
347779 is not valid (the repeated 7 is adjacent three times, 777).
444557 is valid (4 is repeated more than twice but it still contains a double 55).

How many passwords exist following these rules?

## Question 2
You're a famous detective and you've been called into town to solve a case. Seems like this particular criminal left clues to his next victim. The clues say the next location the criminal will attack is Cross Street but there is no address. The police don't seem too interested in figuring out the clue and the commissioner seems to be ignoring you and went to the rooftop. On a USB drive you've found a document with a large list of numbers and in several different places you've found clues as to what the numbers mean. You've figured out the following.
Each line represents a command.
Commands starting with 20 increase the "address" variable. 
For example:
Command 201 increases the address variable by 1.
Command 2010 increases the address variable by 10.
Commands starting with 5 jump to another command. 
For example:
Command 51 executes the next instruction.
Command 52 ignores the next instruction and executes the one after.
Command 510 jumps 10 instructions forward.
Commands starting with any other digit do nothing and the next command is executed in succession.
The program starts at the first number and ends once there is no command left to be executed.

Assuming the address starts at zero and given the input document (commands.txt), what is the value of the address variable when the document ends?
Example:
25
52
53
202
54
402
203
510
201
Starting from 25.
25 is not a known command. So nothing is done.
52 jumps two ahead to 202.
202 increases the address variable by 2.
54 jumps ahead to 201
201 increases the address variable by 1.
There is no longer a command to execute so the result is that the address is 3.
