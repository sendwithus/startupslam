from hard_calculator import HardCalculator
import sys

calc = HardCalculator()

# 81
result = calc.calculate("(( 4 * 3) + 2)^3")

if result == 2744:
    print("Congrats! Your calculator works fine")
else:
    print("Sorry, your calculator is still off.")
