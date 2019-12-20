n=int(input("Enter the number to print:"))
l=n
l=l%10
while(n>=10):
    n=n//10
    f=n
print("first digit:",f,"last digit",l)
