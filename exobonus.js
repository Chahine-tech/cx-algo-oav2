function selectionSorting(arr) {

    for (let i = 0; i < arr.length; i++) {

        let min = i; //  stockage de l'index 

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j; 
            }
        }

        if (i !== min) {
            [arr[ i ],arr[min]]= [arr[min],arr[ i ]];
        }
    }
    return arr;
}

console.log(selectionSorting([ 4,3,7,2 ])) //  résult final[2,3,4,7]