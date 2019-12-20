n=int(input("Enter number of Natural numbers: "))
i=1
lst=[]
while i<=n:
     print(i)
     lst.append(i)
     i+=1
print("Sum of All Natural Numbers:",sum(lst))
