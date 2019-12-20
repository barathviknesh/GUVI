a=int(input("Enter the num1:"))
b=int(input("Enter the num2:"))

if a>b :
    sm=a
else:
    sm=b
for i in range(1,sm+1):
  if(a%i==0 and b%i==0):
      hcf=i
print("The hcf is :",hcf)
