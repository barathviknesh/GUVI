a=int(input("Enter the num1:"))
b=int(input("Enter the num2:"))

if a>b :
    great=a
else:
    great=b
while(True):
    if(great%a==0 and great%b==0):
        lcm=great
        break
    great+=1
print("The Lcm is :",lcm)
