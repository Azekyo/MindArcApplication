# Excercise 1
### dependencies and commands
#### SASS
Install here: [https://sass-lang.com/install](https://sass-lang.com/install)

To compile the sass run:
    sudo sass sass/style.sass css/style.css

If you want to play around with the sass files with hot reloading:
    sudo sass --watch style.sass css/style.css


# Exercise 2
### dependencies and commands
Same as above, run commands from within task2 folder

---
###### Bonus points

The reason ('b' + 'a' + + 'a' + 'a').toLowerCase() returns 'banana' is because 'b' + expects a string to concat to 'b' but receives +'a' which JavaScript is attempting to convert into a number when it sees the extra plus sign ( unary plus operator ) before the operand of 'a', this fails to return a number and instead returns NaN ( Not A Number ) which when converted to lower case becomes 'nan', so 'b'+'a'+'nan'+'a' = 'banana' :) 

Thanks for the chance to apply, look forward to talking if you liked the code.
