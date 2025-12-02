// Conditional if else statement
//  --- IGNORE ---
describe('Conditional Statements', function () {
    it('should execute if-else statements correctly', function () {
        const number = 10;
        let result;
        if (number > 0) {
            result = 'Positive';
        }
        else if (number < 0) {
            result = 'Negative';
        }
        else {
            result = 'Zero';
        }
        console.log(`The number is ${result}`);
        expect(result).toBe('Positive');
    });
    //  Ternary Operator example
    it('should execute ternary operator correctly', function () {
        const age = 20;
        const canVote = (age >= 18) ? 'Yes' : 'No';
        console.log(`Can vote: ${canVote}`);
        expect(canVote).toBe('Yes');
    });
    //  Switch statement example
    it('should execute switch statement correctly', function () {
        const day = 3;
        let dayName;
        switch (day) {
            case 1:
                dayName = 'Monday';
                break;
            case 2:
                dayName = 'Tuesday';
                break;
            case 3:
                dayName = 'Wednesday';
                break;
            case 4:
                dayName = 'Thursday';
                break;
            case 5:
                dayName = 'Friday';
                break;
            case 6:
                dayName = 'Saturday';
                break;
            case 7:
                dayName = 'Sunday';
                break;
            default:
                dayName = 'Invalid day';
        }
        console.log(`Day name: ${dayName}`);
        expect(dayName).toBe('Wednesday');
        // with function
        function getDayName(day) {
            switch (day) {
                case 1: return 'Monday';
                case 2: return 'Tuesday';
                case 3: return 'Wednesday';
                case 4: return 'Thursday';
                case 5: return 'Friday';
                case 6: return 'Saturday';
                case 7: return 'Sunday';
                default: return 'Invalid day';
            }
        }
        const dayNameFunc = getDayName(5);
        console.log(`Day name from function: ${dayNameFunc}`);
        expect(dayNameFunc).toBe('Friday');
    });
});
export {};
//# sourceMappingURL=conditional.test.js.map