from calculator import Calculator
import sys

calc = Calculator()

# 81
result = (calc.nobody_likes_hundreds(
        calc.reverse(
            calc.power(9,
                calc.subtract(100,
                    calc.add(70,
                        calc.binary_string_to_decimal('10110'))
                    )
                )
            )
        ))

if result == 12764034:
    print("Congrats! Your calculator works fine")
else:
    print("Sorry, your calculator is still off.")
