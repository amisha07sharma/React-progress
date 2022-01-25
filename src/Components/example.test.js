const sumPositiveNumber = (number1, number2) => {
    return number1 + number2;
};
describe("when the arguments passed are positive numbers",() => {
    test("should return the right answer",() => {
        expect(sumPositiveNumber(4,5)).toBe(9)
    });
});