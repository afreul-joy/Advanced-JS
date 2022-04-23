const numbers = [14,10,27,33,35];

// 14,10,27,33,35
// 14,10,27,33,35
// 14,10,27,33,35
// 14,10,27,33,35



function bubbleSortAscending(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

function bubbleSortDesc(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j] < array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

const sorted = bubbleSort(numbers);
console.log(sorted);