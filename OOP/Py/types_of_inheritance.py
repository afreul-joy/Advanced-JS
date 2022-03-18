class A:
    def display1(self):
        print("I am inside A ")

class B(A):
    def display2(self):
        print("I am inside B")

class C(B):
    def display3(self):
        super().display1()
        super().display2()
        print("I am inside C")

c = C()
c.display3()
# c.display2()
# c.display3()