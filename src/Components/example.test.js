const sumPositiveNumber = (number1, number2) => {
    if(number1 < 0 || number2 < 0){
        throw new Error("one of the number is less than zero")
    }
    return number1 + number2;
};
describe("when the arguments passed are positive numbers",() => {
    test("should return the right answer",() => {
        expect(sumPositiveNumber(4,5)).toBe(9)
    });
});

describe("when one of the arguments is a negative number",() => {
    test("should throw an error",() => {
        let error ;
        try{
            sumPositiveNumber(-1,5);
        }catch(err){
            error = err;
        }
        expect(error).toBeDefined();
    });
});