"""A really useful module"""


class MyClass(object):
    """" Inheritance is optional, everything is an `object` """
    
    name = 'My class'
    
    def my_method(self):
        """ Methods are called with an instance as first argument """
        return self.name
        
def my_nice_function(one_argument, optional_argument=None):
    if optional_argument is not None:
        return one_argument, optional_argument
