function insertion_sort(nums) {

    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let tmp = nums[i]
        while (j >= 0 && nums[j] > tmp) {
          nums[j + 1] = nums[j]
          j--
        }
        nums[j+1] = tmp
      }
      return nums
    }
    console.log(insertion_sort([3, 0, 2, 9, -1, 4, 1]));
    console.log(insertion_sort([4,6,5,13,-1,3,8,7,1,-4,0,23,1,-55,20,-23,7,483,9354,29,-3,90,-2,81,54,7872,-92, 18,-43,21]));



