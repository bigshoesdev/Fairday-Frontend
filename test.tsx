function CodingChallenge(str) {
    let maxLength = 0; 
    let currentLength = 0;
    let prevChar = '';
    let vowelSet = new Set(); 
    let varOcg = "aeiou"; 

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (varOcg.includes(char) && (prevChar <= char || prevChar === '')) {
            currentLength++; 
            vowelSet.add(char); 
            prevChar = char;

            if (vowelSet.size === 5) {
                maxLength = Math.max(maxLength, currentLength);
            }
        } else {
            currentLength = varOcg.includes(char) ? 1 : 0;
            vowelSet = varOcg.includes(char) ? new Set([char]) : new Set();
            prevChar = char;
        }
    }

    return maxLength;
}

console.log(CodingChallenge("abcdeaeiaaioaaaaeiiiiouuuooaauuaeiu")); 
console.log(CodingChallenge("aaaaa"));
