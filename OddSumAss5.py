n=int(input("Enter number of Natural numbers: "))
i=1
lst=[]
while i<=n:
    if i%2==0:
         i+=1         
    else:
          print(i)
          lst.append(i)
          i+=1
print('sum of all numbers:',sum(lst))
      
