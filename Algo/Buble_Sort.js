const numbers = [45,87,90,56,12,11,6,52];

//----------আগের সংখ্যার সাথে পরের সংখ্যার কম্পেয়ার করব, যদি আগের সংখ্যা বড় হয় তবে swapp হবে ----

// 45,87,90,56,12,11,6,52  

// 45,87,56,12,11,6,52,90

// 45,56,12,11,6,52,87,90

// 45,12,11,6,52,56,87,90

// 12,11,6,45,52,56,87,90

// 11,6,12,45,52,56,87,90

// 6,11.12,45,52,56,87,90

function bubbleSortAscending(array){  
    for (let i = 0; i < array.length; i++) {  // লুপ ২টি চালাতে হবে কারন বাম থেকে ডানে যাবে আবার উপর থেকে নিচে
        for (let j = 0; j < array.length; j++) {
            if(array[j] > array[j+1]){            // array[j]= আগের সংখ্যা  array[j+1] = পরের সংখ্যা
                const temp = array[j];              // swapping
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

const sorted = bubbleSortAscending(numbers);
console.log(sorted);