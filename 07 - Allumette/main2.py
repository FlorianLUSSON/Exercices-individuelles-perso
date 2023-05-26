total = 25


def how_many_players():
    print("Choose a number of players between 1 and 10")
    players = input("How many players ? ")
    while players not in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]:
        print("I told you, between 1 and 10 !")
        players = input("How many players ? ")
    players = int(players)
    return players


def name_players():
    player_names = []
    number = how_many_players()
    for i in range(number):
        names = input(f"Player {i + 1}, what is your name? ")
        player_names.append(names)
    return player_names


def did_win(rest):
    if rest <= 0:
        return True


def pick_papers(i):
    print(f"It's your turn {i}")
    number = input("How many ? ")
    while number not in ["1", "2", "3", "4", "5", "6"]:
        print(f"{i} you have to pick a number between 1 and 6 ! ")
        number = input("How many ? ")
    number = int(number)
    return number


def remove_paper(number):
    global total
    total -= number
    return total


def play():
    left = total
    players = name_players()
    while left > 0:
        for i in players:
            left = remove_paper(pick_papers(i))
            if did_win(left):
                return f"{i} win !"
            print(f"{left} remaining in the bag")


if __name__ == '__main__':
    print(play())
