# Binary Search:
* Compare x with the middle element.
* If x matches with the middle element, we return the mid index.
* Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
* Else (x is smaller) recur for the left half.
#### Time Complexity: O(log n)

# Selection Sort:
* One loop to select an element of Array one by one = O(N)
* Another loop to compare that element with every other Array element = O(N)
* result: O(N) * O(N) = O(N*N) = O(N^2)

#### Time Complexity: O(N^2)
#### not stable sorting algorithm

# Insertion Sort:
* One loop to select an element of Array one by one = O(N)
* Another loop to compare that element with every other Array element = O(N)
* result: O(N) * O(N) = O(N*N) = O(N^2)

#### Time Complexity: O(N^2)
#### stable sorting algorithm

# Quick Sort:
#### Time Complexity: O(n log(n))
#### not stable sorting algorithm
##### *better for sorting arrays than Merge Sort*
