class Mobile:
    def call(self):
        print("You can call")
    def message(self):
        print("You Can message")

class Samsung(Mobile):  #call & mesage method চলে এসেছে samsung e ইনহেরিট করে
    def photo(self):
        print("You can take photo")


s= Samsung()
s.call()
s.photo() 