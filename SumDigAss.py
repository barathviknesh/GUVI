n=int(input("Enter the number to print in Reverse:"))
final=0
while(n>0):
    dig=n%10
    final=final+dig
    n=n//10
print("Reverse of given number is:",final)
