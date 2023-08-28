let test = [1,4,2,8,3,6,10]

function mergeSort(array){
    if(array.length <= 1) {
        return array
    }

    let middle = Math.floor(array.length / 2) 
    
    let leftArray = array.slice(0, middle);
    let rightArray = array.slice(middle);

    let mergeSortLeft = mergeSort(leftArray);
    let mergeSortRight = mergeSort(rightArray);
    
    return merge(mergeSortLeft, mergeSortRight)
}

function merge(leftArray, rightArray) {
    let array = [];

    while(leftArray.length && rightArray.length) {
        if(leftArray[0] > rightArray[0]) {
            array.push(rightArray.shift());
        } else { 
            array.push(leftArray.shift())
        }
    }
    array = [...array, ...leftArray, ...rightArray]
    return array
}