def ask_name_player1():
    name1 = input("Name player 1 : ")
    return name1


def ask_name_player2():
    name2 = input("Name player 2 : ")
    return name2


total = 50
player1 = ask_name_player1()
player2 = ask_name_player2()


def ask_number():
    """
    Ask a number to the user
    :return: a number
    """
    global total
    while total > 0:
        number = input("It's your turn " + player1 + "!\nHow much do you want to pick? ")
        while number not in ["1", "2", "3", "4", "5", "6"]:
            print("You need to pick a number between 1 and 6 !")
            number = input("Pick an other one ! ")
        picked = int(number)
        rest = remove_paper(picked)
        if total < 0:
            return player1 + " you have won the game !"
        rest = str(rest)
        print(rest + " papers remaining in the box.")
        if total <= 0:
            return player1 + " you have won the game !"
        number = input("It's your turn " + player2 + "!\nHow much do you want to pick? ")
        while number not in ["1", "2", "3", "4", "5", "6"]:
            print("You need to pick a number between 1 and 6 !")
            number = input("Pick an other one ! ")
        picked = int(number)
        rest = remove_paper(picked)
        if total <= 0:
            return player2 + " you have won the game !"
        rest = str(rest)
        print(rest + " papers remaining in the box.")


def remove_paper(number):
    global total
    total -= number
    return total


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(ask_number())
