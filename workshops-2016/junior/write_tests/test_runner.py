from calculator import Calculator

def assert_equal(a, b):
    if a != b:
        raise Exception("{0} does not equal {1}".format(a, b))

calc = Calculator()

assert_equal(6, calc.add(2,3))
