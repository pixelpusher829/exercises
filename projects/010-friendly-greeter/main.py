name = input("What is your name? ")
feeling = input("How are you feeling today? ")

if feeling.lower() == "sad":
    print("I'm sorry you're feeling that way. I hope things get better soon.")
elif feeling.lower() == "happy":
    print("That's awesome! Keep that energy going.")
elif feeling.lower() == "tired":
    print("Make sure to rest. You deserve it.")

print("Hello " + name + "! I'm glad you're feeling " + feeling + " today.")
