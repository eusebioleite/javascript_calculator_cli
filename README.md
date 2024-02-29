# jscalc

jscalc is a Node.js Command Line Interface (CLI) application that performs arithmetic operations (addition, subtraction, multiplication, and division) on two numbers provided as command-line arguments.

## Usage

To run the application, open a terminal window, navigate to the directory containing the Node.js script (`app.js`), and use the following command:

```
node app.js [operation] [num1] [num2]
```

Replace `[operation]` with one of the following options:
- `a`: Addition operation
- `s`: Subtraction operation
- `m`: Multiplication operation
- `d`: Division operation

Replace `[num1]` and `[num2]` with the two numbers on which you want to perform the operation.

Example:
```
node app.js a 5 3
```
This will output:
```
Result: 8
```

If division by zero is attempted, an error message will be displayed.

## Requirements

- Node.js installed on your system
- Command-line access

## License

This project is licensed under the [MIT License](LICENSE).
