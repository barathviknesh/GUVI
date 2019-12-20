n=int(input("Enter number to find Factorial:"))
fact=1
if n==0:
      print("Please enter another valid number")
else:
    for i in range(1,n+1):
      fact=fact*i;
print("The factorial is :",fact)
