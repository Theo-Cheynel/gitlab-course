#!/usr/bin/env python3
"""
Hangman Game Template

This file contains empty function templates for a hangman game.
Each team member will implement one or more of these functions.
"""

import random
import string


def load_words(filename="words.txt"):
    """
    Load words from a text file and return them as a list.
    
    Args:
        filename (str): Path to the words file
        
    Returns:
        list: List of words loaded from the file
        
    TODO: Implement this function
    - Open and read the words file
    - Split words and clean them (remove whitespace)
    - Return list of valid words
    """
    pass


def choose_random_word(word_list):
    """
    Choose a random word from the word list.
    
    Args:
        word_list (list): List of available words
        
    Returns:
        str: A randomly selected word in uppercase
        
    TODO: Implement this function
    - Use random.choice() to select a word
    - Convert to uppercase for consistency
    """
    pass


def display_hangman(wrong_guesses):
    """
    Display ASCII art hangman based on number of wrong guesses.
    
    Args:
        wrong_guesses (int): Number of incorrect guesses (0-6)
        
    Returns:
        str: ASCII art representation of hangman
        
    TODO: Implement this function
    - Create ASCII art for each stage (0-6 wrong guesses)
    - Return appropriate art based on wrong_guesses count
    """
    pass


def get_user_guess():
    """
    Get a valid letter guess from the user.
    
    Returns:
        str: A single uppercase letter
        
    TODO: Implement this function
    - Prompt user for input
    - Validate input (single letter, alphabetic)
    - Convert to uppercase
    - Handle invalid input with appropriate messages
    """
    pass


def update_word_display(word, guessed_letters):
    """
    Create display string showing guessed letters and blanks.
    
    Args:
        word (str): The secret word
        guessed_letters (set): Set of letters that have been guessed
        
    Returns:
        str: Display string with letters and underscores
        
    TODO: Implement this function
    - Show guessed letters in their positions
    - Show underscores for unguessed letters
    - Add spaces between characters for readability
    """
    pass


def is_word_guessed(word, guessed_letters):
    """
    Check if the entire word has been guessed.
    
    Args:
        word (str): The secret word
        guessed_letters (set): Set of letters that have been guessed
        
    Returns:
        bool: True if word is completely guessed, False otherwise
        
    TODO: Implement this function
    - Check if all letters in word are in guessed_letters
    - Return boolean result
    """
    pass


def play_hangman():
    """
    Main game loop for hangman.
    
    TODO: Implement this function
    - Load words and choose random word
    - Initialize game state (guessed letters, wrong guesses)
    - Game loop:
      - Display current state
      - Get user guess
      - Update game state
      - Check win/loss conditions
    - Display final result
    """
    pass


if __name__ == "__main__":
    # This will run when the file is executed directly
    print("Welcome to Hangman!")
    print("Each team member should implement assigned functions.")
    print("Run the tests with: python -m pytest test_hangman.py")
    
    # Uncomment the line below once play_hangman() is implemented
    # play_hangman()