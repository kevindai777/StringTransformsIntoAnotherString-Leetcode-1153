//Objective is to see whether one string can transform into another string, given
//that a 'transform' is changing all of a certain character in one string to another character

let str1 = "aabcc", str2 = "ccdee"


//O(n) solution where n is the length of each string
//We use a hashmap to keep track of corresponding characters

let map = {}
    
if (str1 == str2) {
    return true
}

for (let i = 0; i < str1.length; i++) {
    if (map[str1[i]] && map[str1[i]] != str2[i]) {
        return false
    }
    map[str1[i]] = str2[i]
}

//The second string cannot use all 26 letters
return new Set(Object.values(map)).size < 26