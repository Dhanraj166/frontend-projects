# Calculator App

A simple and responsive Calculator application built using HTML, CSS, and JavaScript.
This project performs basic arithmetic operations and provides a clean user interface.

---

## Features

- Addition, subtraction, multiplication, and division
- Clear all input
- Delete last entered character
- Decimal number support
- Responsive and modern UI design

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## Project Structure

calculator/
│
├── calculator.html
├── README.md

---

## How to Use

1. Open the calculator.html file in any modern web browser
2. Click the number buttons to enter values
3. Click operator buttons to perform calculations
4. Click the '=' or 'Ans' button to see the result
5. Click 'C' to clear the display
6. Click 'Del' to delete the last character

---

## JavaScript Functions Explanation

The calculator logic is written using simple JavaScript functions.

### appendValue(value)

This function is used to add numbers or operators to the display.

How it works:
- Takes a value (number or operator) as an argument
- Appends the value to the existing display content

Example:
appendValue('7')

---

### calculate()

This function evaluates the mathematical expression entered by the user.

How it works:
- Uses JavaScript's eval() function to calculate the result
- Displays the result in the input field

Note:
- This function assumes valid input is provided

---

### clearDisplay()

This function clears the entire display.

How it works:
- Sets the display value to an empty string
- Resets the calculator screen

---

### deleteLast()

This function removes the last entered character from the display.

How it works:
- Uses slice() to remove the last character
- Updates the display after deletion

---

## Notes

- This calculator is intended for learning and basic usage
- Avoid entering invalid expressions to prevent errors

---

## Author

Dhanraj S  
Frontend Developer  
GitHub: https://github.com/Dhanraj166
 

---

## License

This project is open-source and free to use.
