# Python Package Structure

In this lesson, we'll transform our hangman game into a proper Python package that can be installed and imported like any professional Python library.

<!-- ROLE: A -->

## Step 1: Creating the Package Structure

**You will create the initial package structure for the team.**

1. **Create a new branch from dev**:
```bash
git checkout dev
git pull
git checkout -b feature/package-structure
```

2. **Create the package directory structure**:
```bash
mkdir hangman
touch hangman/__init__.py
```

3. **Move the hangman.py file into the package**:
```bash
mv hangman.py hangman/
```

4. **Create a setup.py file** at the root of your project:
```python
from setuptools import setup, find_packages

setup(
    name="hangman-game",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[],
    author="Team Hangman",
    description="A simple hangman game implementation",
    python_requires=">=3.7",
    entry_points={
        "console_scripts": [
            "hangman=hangman.hangman:game",
        ],
    },
)
```

5. **Update the hangman/__init__.py file** to export the main functions:
```python
from .hangman import *

__version__ = "1.0.0"
```

6. **Test that the package structure works**:
```bash
# Install in development mode
pip install -e .

# Test that you can import
python -c "import hangman; print('Package structure works!')"

# Test the command line interface
python -m hangman.hangman
```

7. **Commit and push your changes**:
```bash
git add .
git commit -m "Create Python package structure for hangman game"
git push origin feature/package-structure
```

8. **Create a merge request** targeting `dev` branch with:
   - **Title**: "Add Python package structure"
   - **Description**: "Transform hangman.py into a proper Python package with setup.py and __init__.py. Package can be installed with pip install -e . and run with python -m hangman.hangman"

<!-- /ROLE: A -->

<!-- ROLE: B -->

## Step 2: Refactoring into Multiple Files

[!WAIT]
**Wait for Team Member A to create their merge request before starting.**
[/!WAIT]

**You will refactor the package into separate modules and update tests.**

1. **Create a new branch from A's branch**:
```bash
git fetch origin
git checkout -b feature/refactor-modules origin/feature/package-structure
```

2. **Install the package in development mode** to test the current structure:
```bash
pip install -e .
python -c "import hangman; print('Base package works!')"
```

3. **Create two separate Python files in the hangman directory**:

   **hangman/game.py** (move the main game logic here):
```python
from .utils import pick_random_word, format_hidden_word, all_letters_guessed, ask_for_valid_input

def update_game(word, guesses, user_input):
    """
    Update the game state based on user input.
    
    Args:
        word (str): The word to guess
        guesses (list): List of letters already guessed
        user_input (str): The letter guessed by the user
    
    Returns:
        tuple: (updated_guesses, game_over, won)
    """
    # TODO: Implement this function
    pass

def game():
    """
    Main game loop for the hangman game.
    """
    # TODO: Implement this function
    pass
```

   **hangman/utils.py** (move utility functions here):
```python
import random

def pick_random_word():
    """
    Pick a random word from the words.txt file.
    
    Returns:
        str: A random word from the file
    """
    # TODO: Implement this function
    pass

def format_hidden_word(word, guesses):
    """
    Format the word with guessed letters revealed and others as underscores.
    
    Args:
        word (str): The word to guess
        guesses (list): List of letters already guessed
    
    Returns:
        str: The formatted word (e.g., "_ a _ g m a _")
    """
    # TODO: Implement this function
    pass

def all_letters_guessed(word, guesses):
    """
    Check if all letters in the word have been guessed.
    
    Args:
        word (str): The word to guess
        guesses (list): List of letters already guessed
    
    Returns:
        bool: True if all letters are guessed, False otherwise
    """
    # TODO: Implement this function
    pass

def ask_for_valid_input():
    """
    Ask the user for a valid single letter input.
    
    Returns:
        str: A valid single letter (lowercase)
    """
    # TODO: Implement this function
    pass
```

4. **Update hangman/__init__.py** to import from both modules:
```python
from .game import game, update_game
from .utils import pick_random_word, format_hidden_word, all_letters_guessed, ask_for_valid_input

__version__ = "1.0.0"
```

5. **Remove the original hangman.py file**:
```bash
rm hangman/hangman.py
```

6. **Update setup.py** to reflect the new structure:
```python
from setuptools import setup, find_packages

setup(
    name="hangman-game",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[],
    author="Team Hangman",
    description="A simple hangman game implementation",
    python_requires=">=3.7",
    entry_points={
        "console_scripts": [
            "hangman=hangman.game:game",
        ],
    },
)
```

7. **Update the test file** to import from the new structure. Edit `test_hangman.py`:
```python
import pytest

from hangman.utils import pick_random_word, format_hidden_word, all_letters_guessed, ask_for_valid_input
from hangman.game import update_game, game

# Keep all existing test functions unchanged, just update the imports
```

8. **Test the refactored package**:
```bash
# Reinstall the package
pip install -e .

# Test imports
python -c "from hangman.utils import pick_random_word; from hangman.game import game; print('Refactored package works!')"

# Test that it can still be run
python -m hangman.game
```

9. **Commit and push your changes**:
```bash
git add .
git commit -m "Refactor hangman package into separate game and utils modules"
git push origin feature/refactor-modules
```

10. **Create a merge request** targeting `dev` branch with:
   - **Title**: "Refactor hangman into separate modules"
   - **Description**: "Split hangman functionality into hangman/game.py and hangman/utils.py for better code organization. Updated imports and tests accordingly."

<!-- /ROLE: B -->

<!-- ROLE: C -->

## Step 3: Reviewing the Package Structure

[!WAIT]
**Wait for Team Member A to create their merge request before starting.**
[/!WAIT]

**You will review and merge Team Member A's package structure changes.**

1. **Navigate to the merge request** created by Team Member A:
   - Go to your GitLab project
   - Click on "Merge requests" in the left sidebar
   - Find the MR titled "Add Python package structure"

2. **Review the changes**:
   
   **What this MR contains:**
   - Creates a `hangman/` directory with `__init__.py`
   - Moves `hangman.py` into `hangman/hangman.py`
   - Adds `setup.py` for package installation
   - Makes the package installable with `pip install -e .`
   - Adds console script entry point for `hangman` command

   **What to check:**
   - ✅ Package structure: `hangman/__init__.py` and `hangman/hangman.py` exist
   - ✅ `setup.py` contains correct package metadata
   - ✅ Package can be installed and imported
   - ✅ Console script entry point is configured

3. **Test the changes locally**:
```bash
# Check out the branch
git fetch origin
git checkout feature/package-structure

# Install and test the package
pip install -e .
python -c "import hangman; print('Package import successful')"
python -m hangman.hangman
```

4. **Run the tests** to ensure everything still works:
```bash
python -m pytest test_hangman.py -v
```

5. **If tests pass, approve and merge**:
   - In GitLab, click "Approve" on the merge request
   - Add a comment: "Package structure looks good. Tests pass. Ready to merge."
   - Click "Merge" to merge the changes into `dev`

6. **Update your local dev branch**:
```bash
git checkout dev
git pull origin dev
```

<!-- /ROLE: C -->

<!-- ROLE: D -->

## Step 4: Reviewing the Module Refactoring

[!WAIT]
**Wait for Team Member B to create their merge request before starting.**
[/!WAIT]

**You will review Team Member B's module refactoring changes.**

1. **Navigate to the merge request** created by Team Member B:
   - Go to your GitLab project
   - Click on "Merge requests" in the left sidebar
   - Find the MR titled "Refactor hangman into separate modules"

2. **Review the changes**:
   
   **What this MR contains:**
   - Splits functionality into `hangman/game.py` and `hangman/utils.py`
   - Updates `hangman/__init__.py` to import from both modules
   - Removes the original `hangman/hangman.py` file
   - Updates `setup.py` entry point to use `hangman.game:game`
   - Updates test imports to use the new module structure

   **What to check:**
   - ✅ Clean separation: game logic in `game.py`, utilities in `utils.py`
   - ✅ Proper imports in `__init__.py`
   - ✅ Test file updated with correct imports
   - ✅ Package still installable and functional

3. **Test the changes locally**:
```bash
# Check out the branch
git fetch origin
git checkout feature/refactor-modules

# Install and test the refactored package
pip install -e .
python -c "from hangman.utils import pick_random_word; from hangman.game import game; print('Refactored imports work')"
python -m hangman.game
```

4. **Run the tests** to ensure the refactoring didn't break anything:
```bash
python -m pytest test_hangman.py -v
```

5. **If tests pass, approve and merge**:
   - In GitLab, click "Approve" on the merge request
   - Add a comment: "Good module separation. Tests still pass. Code organization improved."
   - Click "Merge" to merge the changes into `dev`

<!-- /ROLE: D -->

<!-- ROLE: E -->

## Step 5: Creating Installation Documentation

[!WAIT]
**Wait for Team Member A to create their merge request before starting.**
[/!WAIT]

**You will create documentation for package installation and usage.**

1. **Create a new branch from A's package structure branch**:
```bash
git fetch origin
git checkout -b feature/package-docs origin/feature/package-structure
```

2. **Create or update the README.md file** at the root of your project:
```markdown
# Hangman Game

A simple command-line hangman game implemented in Python.

## Installation

### Development Installation

To install the package in development mode (recommended for development):

```bash
pip install -e .
```

This installs the package in "editable" mode, meaning changes to the source code will immediately affect the installed package.

### Regular Installation

To install the package normally:

```bash
pip install .
```

## Usage

### Running the Game

After installation, you can run the hangman game in several ways:

#### Method 1: Using the console script
```bash
hangman
```

#### Method 2: Using Python module syntax
```bash
python -m hangman.game
```

#### Method 3: Importing in Python code
```python
import hangman
hangman.game()
```

### Importing Functions

You can also import individual functions for use in your own code:

```python
from hangman.utils import pick_random_word, format_hidden_word
from hangman.game import game, update_game

# Pick a random word
word = pick_random_word()

# Format a word with some guesses
formatted = format_hidden_word("python", ["p", "y", "n"])
print(formatted)  # Output: "p y _ _ _ n"

# Run the full game
game()
```

## Package Structure

```
hangman/
├── __init__.py          # Package initialization and exports
├── game.py             # Main game logic and game loop
└── utils.py            # Utility functions (word selection, formatting, etc.)
setup.py                # Package configuration
test_hangman.py         # Unit tests
words.txt              # Word list for the game
```

## Development

### Running Tests

To run the unit tests:

```bash
python -m pytest test_hangman.py -v
```

### Requirements

- Python 3.7 or higher
- No external dependencies required

## Features

- Random word selection from a curated word list
- Interactive command-line interface
- Input validation
- Win/lose conditions
- Proper package structure for easy installation and import
```

3. **Test that the documentation is accurate**:
```bash
# Install the package
pip install -e .

# Test all the usage methods mentioned in README
hangman
python -m hangman.game
python -c "import hangman; hangman.game()"
```

4. **Commit and push your changes**:
```bash
git add README.md
git commit -m "Add comprehensive installation and usage documentation"
git push origin feature/package-docs
```

5. **Create a merge request** targeting `dev` branch with:
   - **Title**: "Add package installation and usage documentation"
   - **Description**: "Added comprehensive README.md with installation instructions, usage examples, and package structure documentation."

<!-- /ROLE: E -->

<!-- ROLE: A,B,C,D,E,F -->

## Step 6: Installing the Package (Everyone)

Once all merge requests have been merged into `dev`, everyone should:

1. **Update your local dev branch**:
```bash
git checkout dev
git pull origin dev
```

2. **Install the package in development mode**:
```bash
pip install -e .
```

3. **Test that the package works**:
```bash
# Test the console command
hangman

# Test the module command
python -m hangman.game

# Test importing in Python
python -c "import hangman; print('Package installed successfully!')"
```

4. **Verify you can import specific functions**:
```python
python -c "from hangman.utils import pick_random_word; from hangman.game import game; print('All imports work!')"
```

**Congratulations!** You now have a properly packaged Python application that can be installed with pip and run from the command line. This is how professional Python packages are structured and distributed.

## What You've Learned

- ✅ **Package Structure**: How to organize Python code into packages with `__init__.py`
- ✅ **Setup Configuration**: Using `setup.py` to define package metadata and dependencies
- ✅ **Development Installation**: Using `pip install -e .` for editable installs
- ✅ **Console Scripts**: Creating command-line tools from Python functions
- ✅ **Module Organization**: Separating code into logical modules (`game.py`, `utils.py`)
- ✅ **Import Management**: Controlling what gets imported with `__init__.py`
- ✅ **Documentation**: Writing clear installation and usage instructions

<!-- /ROLE: A,B,C,D,E,F -->