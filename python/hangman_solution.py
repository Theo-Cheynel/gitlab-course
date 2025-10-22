import os
import random


def pick_random_word():
    """
    Picks a random word from the word list. The word list is the provided words.txt file.

    Returns:
        str : random word picked
    """
    with open('words.txt', 'r') as file:
        words = file.read().splitlines()
    return random.choice(words)



def format_hidden_word(word_to_guess, letters_guessed):
    """
    Formats the word to guess by replacing all non-guessed letters by "_"

    Args:
        word_to_guess (str) : word that the user has to guess
        letters_already_guessed (str) : string containing all the letters already guessed by the user.

    Returns:
        str : word to display, where all of the letters not in letters_guessed are replaced by the "_" symbol
    """
    return "".join([letter if letter in letters_guessed else "_" for letter in word_to_guess])


def all_letters_guessed(word_to_guess, letters_guessed):
    """
    Checks whether all letters of word_to_guess are in letters_guessed.

    Args:
        word_to_guess (str) : word that the user has to guess
        letters_already_guessed (str) : string containing all the letters already guessed by the user.

    Returns:
        bool : True if all letters have been guessed, False otherwise
    """
    return sum([0 if letter in letters_guessed else 1 for letter in word_to_guess]) == 0


def ask_for_valid_input(letters_guessed):
    """
    Asks the user to pick a letter, using input("Enter a letter [a-z]: "). 
    Checks that the input is a single character (len(i) == 1) and that it is a lowercase letter 
    (97 <= ord(a) <= 122), and that it is not already in letters_guessed (a not in letters_guessed).
    If not, prompts the user to pick a letter again (using a while loop until all criteria are respected)
    
    Args:
        letters_guessed (str) : string containing all the letters already guessed by the user
    
    Returns:
        str : one-character string containing the letter picked by the user
    """
    letter = input('Enter a letter:')
    while len(letter) != 1 or not (97 <= ord(letter) <= 122) or letter in letters_guessed:
        letter = input('Enter a single, lowercase, non-previously-entered letter:')
    return letter


def update_game(word_to_guess, letters_guessed, new_guess, remaining_attempts):
    """
    Based on the new_guess, updates the letters_guessed (letters_guessed.append(new_guess))
    and remaining_attempts variables (remaining_attempts decreases by one if new_guess not in word_to_guess).

    Args:
        word_to_guess (str) : word that the user has to guess
        letters_guessed (str) : string containing all the letters already guessed by the user
        new_guess (str) : one-character string containing the letter picked by the user
        remaining_attempts (int) : number of attempts remaining

    Returns:
        str : new string containing all letters guessed 
        int : new number of attempts remaining 
    """
    letters_guessed += new_guess
    if new_guess not in word_to_guess:
        remaining_attempts -= 1
    return letters_guessed, remaining_attempts


def game():
    """
    Allows the user to play one game of hangman:
        - picks a random word using pick_random_word()
        - sets remaining_attempts to 8, and letters_guessed to ''
        - while there remaining_attempts > 0 AND not all_letters_guessed() , do:
            - print the word, formatted using format_hidden_word()
            - print the number of remaining attempts
            - ask for a valid input from the user using ask_for_valid_input()
            - call update_game(), and update letters_guessed and remaining_attempts based on the returned values
        - once exiting the loop, if remaining_attempts > 0, print("You won"), otherwise, print("You lost")
    """
    word = pick_random_word()
    remaining_attempts = 8
    letters_guessed = ''
    
    while remaining_attempts > 0 and not all_letters_guessed(word, letters_guessed):
        print(format_hidden_word(word, letters_guessed))
        print(f"Number of remaining guesses: {remaining_attempts}")
        guess = ask_for_valid_input(letters_guessed)
        letters_guessed, remaining_attempts = update_game(word, letters_guessed, guess, remaining_attempts)
    
    if remaining_attempts > 0:
        print("You won")
    else:
        print("You lost")


if __name__ == "__main__":
    game()