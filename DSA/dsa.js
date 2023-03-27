// Merging 2 sorted arrays two sorted arays

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

const arr1 = [2, 5, 8, 10, 11];
const arr2 = [3, 7, 9, 12, 13];

console.log(mergeTwoSortedArrays(arr1, arr2));