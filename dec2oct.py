n=int(input("Enter a decimal number"))
octal=0
inc=0
dum=n

while(dum>0):
    octal +=int(((dum%8)*(10**inc)))
    dum=dum/8
    inc+=1

print("the octal num is",octal )
