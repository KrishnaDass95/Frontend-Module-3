// Merge sort
/**
 * 1. Divide the array into half till the last element, till we get single element arrays
 * 2. Now do the same logic of comparing and merging two sorted arrays
 * 
 */

function mergeTwoSortedArrays(arr1, arr2){
    let i = 0;
    let j = 0;
    var arr3 = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr3.push(arr1[i]);
            i++;
        }
        else{
            arr3.push(arr2[j]);
            j++;
        }
    }
    if(i == arr1.length){
        arr3 = arr3.concat(arr2.slice(j));
    }
    else if(j == arr2.length){
        arr3 = arr3.concat(arr1.slice(i));
    }
    return arr3;

}



function mergeSort(arr){
    if (arr.length == 1){
        return arr;
    }
    else{
        // main logic
        const leftArr = arr.slice(0, arr.length/2);
        // console.log(leftArr);
        const rightArr = arr.slice(arr.length/2);
        // console.log(rightArr);

        return mergeTwoSortedArrays(mergeSort(leftArr), mergeSort(rightArr));
        // the left keeps dividing a 
    }
}

const myArr = [5, 2, 3, 8, 1, 20, 0, 3, 1, 5]
console.log(mergeSort(myArr));