export const sumPositiveNumber = (number1, number2) => {
    if(number1 < 0 || number2 < 0){
        throw new Error("one of the number is less than zero")
    }
    return number1 + number2;
};