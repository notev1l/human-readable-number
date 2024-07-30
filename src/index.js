module.exports = function toReadable (number) {
    const nums = new Map([
        [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'], [9, 'nine'], [10, 'ten'], 
        [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [14, 'fourteen'], [15, 'fifteen'], [16, 'sixteen'], [17, 'seventeen'], [18, 'eighteen'], [19, 'nineteen'],
        [20, 'twenty'], [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [60, 'sixty'], [70, 'seventy'], [80, 'eighty'], [90, 'ninety']
        ]);
    
        if (number == 0) {
            return 'zero';
        }

        if (number.toString().length === 1) {
            return (nums.get(number));
        }  else if (number.toString().length === 2) {
            return (nums.has(number) ? nums.get(number) : nums.get(+(number.toString().slice(0, -1)+'0')) + ' ' + nums.get(+number.toString().slice(1)));
        }  else if (number.toString().length === 3) {
            let x1 = nums.get(+number.toString().substring(0, 1));
            let x2 = nums.has(+number.toString().slice(1)) ? nums.get(+number.toString().slice(1)) : nums.get(+(number.toString().slice(1, -1)+'0')) + ' ' + nums.get(+number.toString().slice(2));
            if (x2 !== 'undefined undefined') {
                return (x1 + ' hundred ' + x2);
            } else {
                return x1 + ' hundred';
            }
        }
}
