/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);


    let sum = romanMap.get(s[s.length - 1]);	

    for (let i = s.length - 2; i >= 0; i--) {
        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) 
		sum += romanMap.get(s[i]);
        else
	     sum -= romanMap.get(s[i]);
    }

    return sum;
};


/*
Pseudocode
1) create a map which holds the roman number values as keys and the corresponding arabic numbers as values
2) create a variable named sum and initialize it with the last element of the String (arabic numbner format )
3) loop through the String in backwards starting by the second element from the back 
4) check if the the element at the current index is bigger than the element of the index added by one 
4.1)If it is add the current element to the sum 
4.2) if its not substract the sum from the current element
5) substract 1 from the index 
6)check if the index is greater than or equal to zero 
6.1) if it is go to 4 
6.2 if it is not go to 7 
7) return the sum


*/
