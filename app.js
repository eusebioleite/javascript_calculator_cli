if (process.argv.length === 5) {

    var result = 0.0;
    const x = parseFloat(process.argv[3]);
    const y = parseFloat(process.argv[4])
    
    switch(process.argv[2]){
        
        case "a":
            result = x + y
            console.log(`Result: ${result}`);
            break;

        case "s":
            result = x - y
            console.log(`Result: ${result}`);
            break;

        case "d":
            if(x === 0.0 || y === 0.0){
                console.log(`Error: Division by 0 is not possible.`);
            } else {
                result = x / y;
                console.log(`Result: ${result}`);
            }
            break;

        case "m":
            result = x * y;
            console.log(`Result: ${result}`);
            break;

        default:
            console.log("Usage: node app.js [operation] [num1] [num2]");
            console.log("Options:");
            console.log("  a num1 num2\tAddition operation");
            console.log("  s num1 num2\tSubtraction operation");
            console.log("  m num1 num2\tMultiplication operation");
            console.log("  d num1 num2\tDivision operation");
            break;

    }

} else {

    console.log("Usage: node app.js [operation] [num1] [num2]");
    console.log("Options:");
    console.log("  a num1 num2\tAddition operation");
    console.log("  s num1 num2\tSubtraction operation");
    console.log("  m num1 num2\tMultiplication operation");
    console.log("  d num1 num2\tDivision operation");

}