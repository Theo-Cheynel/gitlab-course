#!/usr/bin/env python3
"""
Unit Tests for Hangman Game

This file contains unit tests for all hangman game functions.
Run with: python -m pytest test_hangman.py
"""

import pytest
import tempfile
import os
from hangman import (
    load_words, choose_random_word, display_hangman, 
    update_word_display, is_word_guessed
)


class TestLoadWords:
    """Test the load_words function"""
    
    def test_load_words_basic(self):
        """Test loading words from a basic file"""
        # Create a temporary file with test words
        with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as f:
            f.write("apple\nbanana\ncherry\ndate\n")
            temp_filename = f.name
        
        try:
            words = load_words(temp_filename)
            expected = ["apple", "banana", "cherry", "date"]
            assert words == expected
        finally:
            os.unlink(temp_filename)
    
    def test_load_words_empty_file(self):
        """Test loading from an empty file"""
        with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as f:
            temp_filename = f.name
        
        try:
            words = load_words(temp_filename)
            assert words == []
        finally:
            os.unlink(temp_filename)
    
    def test_load_words_with_whitespace(self):
        """Test loading words with extra whitespace"""
        with tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.txt') as f:
            f.write("  apple  \n\tbanana\t\n  cherry  \n")
            temp_filename = f.name
        
        try:
            words = load_words(temp_filename)
            expected = ["apple", "banana", "cherry"]
            assert words == expected
        finally:
            os.unlink(temp_filename)


class TestChooseRandomWord:
    """Test the choose_random_word function"""
    
    def test_choose_random_word_single(self):
        """Test choosing from a single word"""
        word_list = ["python"]
        result = choose_random_word(word_list)
        assert result == "PYTHON"
    
    def test_choose_random_word_multiple(self):
        """Test choosing from multiple words"""
        word_list = ["python", "java", "javascript"]
        result = choose_random_word(word_list)
        assert result in ["PYTHON", "JAVA", "JAVASCRIPT"]
        assert result.isupper()
    
    def test_choose_random_word_case_conversion(self):
        """Test that result is always uppercase"""
        word_list = ["python", "Java", "JavaScript"]
        result = choose_random_word(word_list)
        assert result.isupper()


class TestDisplayHangman:
    """Test the display_hangman function"""
    
    def test_display_hangman_zero_wrong(self):
        """Test hangman display with 0 wrong guesses"""
        result = display_hangman(0)
        assert isinstance(result, str)
        assert len(result) > 0
    
    def test_display_hangman_max_wrong(self):
        """Test hangman display with maximum wrong guesses"""
        result = display_hangman(6)
        assert isinstance(result, str)
        assert len(result) > 0
    
    def test_display_hangman_progression(self):
        """Test that hangman art changes with more wrong guesses"""
        displays = []
        for i in range(7):
            displays.append(display_hangman(i))
        
        # Each stage should be different
        assert len(set(displays)) == 7


class TestUpdateWordDisplay:
    """Test the update_word_display function"""
    
    def test_update_word_display_no_guesses(self):
        """Test display with no letters guessed"""
        word = "PYTHON"
        guessed = set()
        result = update_word_display(word, guessed)
        expected = "_ _ _ _ _ _"
        assert result == expected
    
    def test_update_word_display_some_guesses(self):
        """Test display with some letters guessed"""
        word = "PYTHON"
        guessed = {"P", "O"}
        result = update_word_display(word, guessed)
        expected = "P _ _ _ O _"
        assert result == expected
    
    def test_update_word_display_all_guessed(self):
        """Test display with all letters guessed"""
        word = "PYTHON"
        guessed = {"P", "Y", "T", "H", "O", "N"}
        result = update_word_display(word, guessed)
        expected = "P Y T H O N"
        assert result == expected
    
    def test_update_word_display_repeated_letters(self):
        """Test display with repeated letters in word"""
        word = "HELLO"
        guessed = {"L"}
        result = update_word_display(word, guessed)
        expected = "_ _ L L _"
        assert result == expected


class TestIsWordGuessed:
    """Test the is_word_guessed function"""
    
    def test_is_word_guessed_complete(self):
        """Test when all letters are guessed"""
        word = "PYTHON"
        guessed = {"P", "Y", "T", "H", "O", "N"}
        assert is_word_guessed(word, guessed) == True
    
    def test_is_word_guessed_incomplete(self):
        """Test when not all letters are guessed"""
        word = "PYTHON"
        guessed = {"P", "Y", "T"}
        assert is_word_guessed(word, guessed) == False
    
    def test_is_word_guessed_extra_letters(self):
        """Test when guessed set contains extra letters"""
        word = "CAT"
        guessed = {"C", "A", "T", "B", "D", "E"}
        assert is_word_guessed(word, guessed) == True
    
    def test_is_word_guessed_repeated_letters(self):
        """Test with word containing repeated letters"""
        word = "HELLO"
        guessed = {"H", "E", "L", "O"}
        assert is_word_guessed(word, guessed) == True
    
    def test_is_word_guessed_empty_word(self):
        """Test with empty word"""
        word = ""
        guessed = {"A", "B"}
        assert is_word_guessed(word, guessed) == True


# Integration tests
class TestGameIntegration:
    """Integration tests for game components"""
    
    def test_word_progression(self):
        """Test a complete word guessing progression"""
        word = "CAT"
        guesses = []
        
        # Start with no guesses
        assert update_word_display(word, set(guesses)) == "_ _ _"
        assert is_word_guessed(word, set(guesses)) == False
        
        # Guess 'C'
        guesses.append("C")
        assert update_word_display(word, set(guesses)) == "C _ _"
        assert is_word_guessed(word, set(guesses)) == False
        
        # Guess 'A'
        guesses.append("A")
        assert update_word_display(word, set(guesses)) == "C A _"
        assert is_word_guessed(word, set(guesses)) == False
        
        # Guess 'T'
        guesses.append("T")
        assert update_word_display(word, set(guesses)) == "C A T"
        assert is_word_guessed(word, set(guesses)) == True


if __name__ == "__main__":
    pytest.main([__file__, "-v"])