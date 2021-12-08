class Shape:
    def __init__(self,height,width):
        self.height = height
        self.width= width

    def display (self):
        print(f"height : {self.height} width : {self.width} ")
        
class Triangle(Shape):
    def calc(self):
        result = 0.5*self.height*self.width
        print(result)

class Rectangle(Shape):
     def calc(self):
        result = self.height*self.width
        print(result)

t = Triangle(2,4)
t.display()
t.calc()

r= Rectangle(4,4)
r.display()
r.calc()