class Student :
   #studentRoll = ""  #property
  #studentGpa = ""
  
  def __init__(self,roll,gpa):  #constructor
    self.studentRoll = roll 
    self.studentGpa = gpa

  def display(self):   #normal method
    print(f"Roll = {self.studentRoll}, Gpa = {self.studentGpa}") 

rahim = Student("101","3.70")
rahim.display()

