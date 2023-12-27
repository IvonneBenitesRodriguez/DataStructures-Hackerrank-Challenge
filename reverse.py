##using the reverse method with a list
## in Python the arrays are called Lists
## This method reverses the order of its elements.
##Example:
## method a ---> modifies the original list in-place 
my_list = [1,2,3,4,5];
my_list.reverse()

print(my_list)

## method b --> creates a new reversed list without modifying the original one
## but we need to use the slicing syntax

my_list = [1,2,3,4,5]
reversed_list = my_list[::-1]

print(reversed_list)

## a new list is created by slicing the original list `[::-1]`
## this method reverses the order of the elements.
## the good thing is that the original list my_list remains unchanged.