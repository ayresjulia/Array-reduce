//get all names into array
const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function extractValue(arr, key) {
    return arr.reduce((acc,next) => {
        acc.push(next[key]);
        return acc;
    }, []);
};

//count vowels and put in an object
function vowelCount(str) {
    let vowels = "aeiou";
    return str.split('').reduce((acc,next) => {
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            };
        };
        return acc;
    }, {});
};

//add new key and value to existing array of objects
function addKeyAndValue(arr1, key, value) {
    return arr1.reduce((acc,next,i) => {
        acc[i][key] = value;
        return acc;
    },arr1);
};
const arr1 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

//split array into two according to specifics
const arr2 = [1,2,3,4,5,6,7,8];
const names = ['Elie', 'Colt', 'Tim', 'Matt'];

function partition(arr2, callback) {
    return arr2.reduce((acc,next) => {
        if (callback(next)){
            acc[0].push(next);
        }else{
            acc[1].push(next);
        };
        return acc;
    }, [[],[]]);
};

function isEven(val){
        return val % 2 === 0;
};

function isLongerThanThreeCharacters(val){
        return val.length > 3;
};


