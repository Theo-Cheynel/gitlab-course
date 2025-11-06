<!-- ROLE: A -->

So far, the project was quite simple, and could be implemented in a single Python file.

More complex projects require splitting the code into several files, to make it more easy to work with.

However, Python is inherently a **scripting language**, designed for single-file scripts.

To manage multiple files, it is better to use a **package structure**. It also allows to package your work into a project that can be easily installed and deployed.

In this lesson, we'll transform our hangman game into a proper Python package that can be installed and imported like any professional Python library.

## Step 1: Creating the Package Structure

**You will create the initial package structure for the team.**

1. **Create a new branch from dev**:
```bash
git checkout dev
git pull
git checkout -b package-structure
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

5. **Update the hangman/__init__.py file** so that it exposes all functions:
```python
from .hangman import *
```

6. **Test that the package structure works**:
```bash
# Install in development mode
pip install -e .

# Test the command line interface
python -m hangman.hangman
```

7. **Commit and push your changes**:
```bash
git add .
git commit -m "Create Python package structure for hangman game"
git push origin feature/package-structure
```

8. **Create a merge request** from the `package-structure` branch to the `dev` branch.


## Step 2: Refactoring into Multiple Files
[!WAIT]
Wait for **Team Member** B to create their merge request, which splits the code into two files.
[/!WAIT]

Team Member D will review and approve this MR.


## Step 3: How the new package structure works

Once everything is merged into `dev`, you can now:
```bash
git checkout dev
git pull
pip install -e .
```

The first MR introduced the structure of a Python package -- which works exactly like `numpy` or `scipy`!
Thanks to this:
1. You can now install the package using `pip install -e .`
2. Once the package is installed, you can import the `game` function (and the others) from any project.
3. To run the game script, you can use `python -m hangman.game`

<!-- /ROLE: A -->

<!-- ROLE: B -->

So far, the project was quite simple, and could be implemented in a single Python file.

More complex projects require splitting the code into several files, to make it more easy to work with.

However, Python is inherently a **scripting language**, designed for single-file scripts.

To manage multiple files, it is better to use a **package structure**. It also allows to package your work into a project that can be easily installed and deployed.

In this lesson, we'll transform our hangman game into a proper Python package that can be installed and imported like any professional Python library.

## Step 1: Creating the Package Structure

[!WAIT]
Wait for **Team Member** A to create their merge request before starting. No need to wait for it to be approved though!

This MR sets up the structure for a Python package:
- Moves the code into a new directory (`hangman/`)
- Creates a file named `setup.py` containing information for package installation and use

[/!WAIT]

## Step 2: Refactoring into Multiple Files

**You will refactor the package into separate modules and update tests.**

1. **Create a new branch from A's branch**:
```bash
git pull
git checkout package-structure
git branch refactor-modules
git checkout refactor-modules
```

2. **Install the package in development mode** to test the current structure:
```bash
pip install -e .
python -m hangman.hangman"
```

3. **Create two separate Python files in the hangman directory**: `game.py` and `utils.py`

4. Move the `game` function into the `game.py` file, and move the remaining functions (and imports) into `utils.py`.

5. Make sure that the `game.py` file imports all necessary functions from the `utils.py` file:
```python
from .utils import pick_random_word, format_hidden_word, all_letters_guessed, ask_for_valid_input, update_game
```

6. **Update hangman/__init__.py** to import from both modules:
```python
from .game import game
from .utils import pick_random_word, format_hidden_word, all_letters_guessed, ask_for_valid_input, update_game
```

7. **Remove the original hangman.py file**:
```bash
rm hangman/hangman.py
```

8. **Update the `entry_points` in setup.py** to reflect the new structure:
```python
entry_points={
    "console_scripts": [
        "hangman=hangman.game:game",
    ],
}
```

9. **Update the import in the test file** to import from the new structure. Add the following to `test_hangman.py`:
```python
from hangman.utils import pick_random_word, format_hidden_word, all_letters_guessed, ask_for_valid_input
from hangman.game import update_game, game
```

10. **Test the refactored package**:
```bash
python -m hangman.game
```

11. **Commit and push your changes**:
```bash
git add .
git commit -m "Refactor hangman package into separate game and utils modules"
git push origin feature/refactor-modules
```

12. **Create a merge request** from the `refactor-modules` branch to the  `package-structure` branch.

Team Member D will review and approve this MR.


## Step 3: How the new package structure works

Once everything is merged into `dev`, you can now:
```bash
git checkout dev
git pull
pip install -e .
```

The first MR introduced the structure of a Python package -- which works exactly like `numpy` or `scipy`!
Thanks to this:
1. You can now install the package using `pip install -e .`
2. Once the package is installed, you can import the `game` function (and the others) from any project.
3. To run the game script, you can use `python -m hangman.game`
<!-- /ROLE: B -->

<!-- ROLE: C -->

So far, the project was quite simple, and could be implemented in a single Python file.

More complex projects require splitting the code into several files, to make it more easy to work with.

However, Python is inherently a **scripting language**, designed for single-file scripts.

To manage multiple files, it is better to use a **package structure**. It also allows to package your work into a project that can be easily installed and deployed.

In this lesson, we'll transform our hangman game into a proper Python package that can be installed and imported like any professional Python library.

## Step 1: Creating the Package Structure

[!WAIT]
Wait for **Team Member** A to create their merge request.

This MR sets up the structure for a Python package:
- Moves the code into a new directory (`hangman/`)
- Creates a file named `setup.py` containing information for package installation and use

[/!WAIT]

**You need to review, approve and merge Team Member A's package structure changes.**


## Step 2: Refactoring into Multiple Files

[!WAIT]
Wait for **Team Member** B to create their merge request.

This MR splits the code into two files.
[/!WAIT]

Team Member D will review and approve this MR.


## Step 3: How the new package structure works

Once everything is merged into `dev`, you can now:
```bash
git checkout dev
git pull
pip install -e .
```

The first MR introduced the structure of a Python package -- which works exactly like `numpy` or `scipy`!
Thanks to this:
1. You can now install the package using `pip install -e .`
2. Once the package is installed, you can import the `game` function (and the others) from any project.
3. To run the game script, you can use `python -m hangman.game`

<!-- /ROLE: C -->

<!-- ROLE: D -->

So far, the project was quite simple, and could be implemented in a single Python file.

More complex projects require splitting the code into several files, to make it more easy to work with.

However, Python is inherently a **scripting language**, designed for single-file scripts.

To manage multiple files, it is better to use a **package structure**. It also allows to package your work into a project that can be easily installed and deployed.

In this lesson, we'll transform our hangman game into a proper Python package that can be installed and imported like any professional Python library.

## Step 1: Creating the Package Structure

[!WAIT]
Wait for **Team Member** A to create their merge request.

This MR sets up the structure for a Python package:
- Moves the code into a new directory (`hangman/`)
- Creates a file named `setup.py` containing information for package installation and use

[/!WAIT]

Team Member C will review and approve this MR, while Team Member B will refactor into multiple files to demonstrate how imports work.


## Step 2: Refactoring into Multiple Files

[!WAIT]
Wait for **Team Member** B to create their merge request.

This MR splits the code into two files.
[/!WAIT]

**You need to review, approve and merge Team Member B's changes.**

## Step 3: How the new package structure works

Once everything is merged into `dev`, you can now:
```bash
git checkout dev
git pull
pip install -e .
```

The first MR introduced the structure of a Python package -- which works exactly like `numpy` or `scipy`!
Thanks to this:
1. You can now install the package using `pip install -e .`
2. Once the package is installed, you can import the `game` function (and the others) from any project.
3. To run the game script, you can use `python -m hangman.game`
<!-- /ROLE: D -->

<!-- ROLE: E, F -->

So far, the project was quite simple, and could be implemented in a single Python file.

More complex projects require splitting the code into several files, to make it more easy to work with.

However, Python is inherently a **scripting language**, designed for single-file scripts.

To manage multiple files, it is better to use a **package structure**. It also allows to package your work into a project that can be easily installed and deployed.

In this lesson, we'll transform our hangman game into a proper Python package that can be installed and imported like any professional Python library.

## Step 1: Creating the Package Structure

[!WAIT]
Wait for **Team Member** A to create their merge request.

This MR sets up the structure for a Python package:
- Moves the code into a new directory (`hangman/`)
- Creates a file named `setup.py` containing information for package installation and use

[/!WAIT]

Team Member C will review and approve this MR.

## Step 2: Refactoring into Multiple Files

[!WAIT]
Wait for **Team Member** B to create their merge request.

This MR splits the code into two files.
[/!WAIT]

Team Member D will review and approve this MR.

## Step 3: How the new package structure works

Once everything is merged into `dev`, you can now:
```bash
git checkout dev
git pull
pip install -e .
```

The first MR introduced the structure of a Python package -- which works exactly like `numpy` or `scipy`!
Thanks to this:
1. You can now install the package using `pip install -e .`
2. Once the package is installed, you can import the `game` function (and the others) from any project.
3. To run the game script, you can use `python -m hangman.game`
<!-- /ROLE: E, F -->
