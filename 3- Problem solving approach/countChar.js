const countChar = str => {
    var res = {};
    
    for (char of str) {
        if (isAlphaNumeric2(char)) {
            char = char.toLowerCase();
            res[char] = ++res[char] || 1;
        }
    }

    return res;
}

const isAlphaNumeric = (char) => {
    return /[a-zA-Z0-9]/.test(char);
}

// performance is good compared to regular expression
const isAlphaNumeric2 = (char = " ") => {
    let code = char.charCodeAt(0);
   if (!(code >= 97 && code <= 122) && // not a-z
       !(code >= 65 && code <= 90) && // not A-Z
       !(code >= 48 && code <= 57) // not 0-9
   ) {
       return false;
   }

   return true;
}