#!/usr/bin/env python

def func(name):
    return "Hello %s " % name
    
if __name__ == "__main__":
    import sys
    script, name = sys.argv
    print func(name)
