//  ! a JavaScript program to find the most frequent element in an array and return it. 

const mostFrequentItem = (arr) => {
    const len = arr.length;
    let item;
    let mostFrequent = 1;
    let count = 0;

    for (let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            if(arr[i] === arr[j]){
                count++;
            }
            if(count>mostFrequent){
                mostFrequent = count;
                item = arr[i];
            }
        }
        count=0;
    }
    return item;
}

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

console.log(mostFrequentItem(arr))