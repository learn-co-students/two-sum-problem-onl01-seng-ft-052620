function bruteForceTwoSum(array, sum){
    let successful = []
for (let i=0; i<array.length; i++){
    for(let j = i+1; j<array.length; j++){
        if (array[i]+array[j] === sum){
            successful.push([array[i], array[j]])
        }
    }
}
if (successful!== []){
    return successful
}
else{
return 'no match'}
}
let binarySearch = (array, target, start=0, end=array.length-1) => {

    let midPoint = ~~(start + (end - start)/2)

    switch(true){
        case array[start] === target:
            return array[start]
        case array[midPoint] === target:
            return array[midPoint]
        case array[end] === target:
            return array[end]
        case end - start === 0:
            return false
        case array[midPoint] > target:
            return binarySearch(array, target, start+1, midPoint-1)
        case array[midPoint] < target:
            return binarySearch(array, target, midPoint+1, end-1)    
    }
    return false
}

function binarySearchTwoSum(array, sum){
    let sortedArray = array.sort()
	let nums = []
    let prevNums = []
    
    for (let i in sortedArray){
        let addend = binarySearch(sortedArray, sum-sortedArray[i])
        if (!!addend && !prevNums.includes(array[i]) && !prevNums.includes(addend)){
            nums.push([sortedArray[i], addend])
            prevNums.push(addend)
        }
    }
    return nums
}

function binaryMatch(array, sum){
    for (let i=0; i<array.length; i++){
        let target = sum - array[i]
        if(array.includes(target)){
            return true
        }
    }
return false

}

function hashTwoSum(array, sum){
    let numsHash = {}
    let successful = []
    array.forEach(num => {
        let target = sum - num
        if(numsHash[target]){
            successful.push([sum-num, num])
        }
        else numsHash[num] = sum-num
    })
    if (successful!== []){
        return successful
    } 
    else {
        return 'No Matches'
    }

}