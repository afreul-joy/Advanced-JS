const numbers  = [45,12,5,9,-5,12];

// সিলেকশন সর্ট শুরুতেই একটি লুপ চালাবে "প্রথম ইলিমেন্ট" বাদ দিয়ে, 
// বাকি সব গুলা ইলিমেন্টের মাঝে চেক করবে ছোট কে আছে "ছোটটা" পেয়ে গেলে সেটা "প্রথম" ইলিমেন্টে এনে বসাবে,
// এবং প্রথম ইলিমেন্ট যাবে ছোটটার জায়গাই  

// [45,12,5,9,-5,12]
// [-5,12,5,9,45,12]
// [-5,5,12,9,45,12]
// [-5,5,9,12,45,12]
// [-5,5,9,12,12,45]

function selectionSort(array){
    for (let i = 0; i < array.length; i++) {
        let firstNum = i;
        for (let j = i+1; j < array.length; j++) {     // j এর মান i+1 কারন প্রথম টি বাদ দিয়ে ছোট টা খুজতে হবে 

            if(array[j] < array[firstNum]){  //প্রথম সংখ্যার সাথে কম্পেয়ার করছে, যদি এটার থেকেও ছোট থাকে না থাকে তবে যা ছিল তাই থাকবে
                firstNum = j;
            }
        }
        const temp = array[i];      //প্রথম সংখ্যার থেকে থেকে যদি ছোট হয় তবে swap করবে 
        array[i] = array[firstNum];
        array[firstNum] = temp;
    }
    return array;
}
const sorted = selectionSort(numbers);
console.log(sorted);