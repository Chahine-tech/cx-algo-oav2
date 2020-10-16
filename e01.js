// pour permuter les nombres
function swap(arr, firstindex, secondindex){
    let tmp = arr[firstindex];
    arr[firstindex] = arr[secondindex];
    arr[secondindex] = tmp
}

function bubble_sort(arr){
    let len = arr.length,
        i, y, fin;

    for(i=0; i < len; i++){
        for(y = 0, fin = len-i; y < fin; y++) {
            if (arr[y] > arr[y + 1]){
                swap(arr, y, y+1);
            }
        }
    }

    return arr;
}
console.log(bubble_sort([3, 0, 6, 10, -60 , 2, 55, 4, -2, -30, 7]))