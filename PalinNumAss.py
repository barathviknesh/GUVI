n=int(input("Enter the number to check palindrome:"))
temp=n
final=0
while(n>0):
    dig=n%10
    final=final*10+dig
    n=n//10
    final=int(final)
if (final == temp):
   print("the given number is palindrome")
else:
   print("the given number is not palindrome")
