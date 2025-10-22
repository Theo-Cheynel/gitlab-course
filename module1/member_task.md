## Your Team Role Task

Now that the project structure is set up, each team member has a specific function to implement in the hangman game. This lesson teaches you about **parallel development** - working on different features simultaneously without conflicts.

### Understanding Parallel Development

Each team member will:
1. **Create their own branch** for their specific function
2. **Implement and test** their assigned function
3. **Create a merge request** to integrate their work
4. **Review** other team members' code

This workflow allows everyone to work simultaneously without interfering with each other's code.

---

## Role-Based Instructions

<!-- ROLE: A -->
## Team Member A: Implement `pick_random_word`

**Your function**: Word selection from the word list

### What You'll Build
The `pick_random_word` function randomly selects a word from the `words.txt` file for the hangman game.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create your feature branch**:
   ```bash
   git branch pick_random_word
   git checkout pick_random_word
   ```

3. **Implement the function**:
   Open `hangman.py` and implement `pick_random_word`:
   - Open and read the `words.txt` file
   - Split the content into individual words (one per line)
   - Use `random.choice()` to select a random word
   - Return the selected word

4. **Test your implementation**:
   ```bash
   python -m pip install pytest
   pytest test_hangman.py -k test_pick_random_word
   ```

5. **Commit and push your work**:
   ```bash
   git add hangman.py
   git commit -m "Implement pick_random_word function"
   git push --set-upstream origin pick_random_word
   ```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `pick_random_word`
   - Set **Target branch**: `dev`
   - Add title and description
   - Click **"Create Merge Request"**

**✅ Your task is complete!** Your code will be reviewed and merged later.
<!-- /ROLE: A -->

<!-- ROLE: B -->
## Team Member B: Implement `format_hidden_word`

**Your function**: Display word with guessed letters revealed

### What You'll Build
The `format_hidden_word` function shows the current state of the word with guessed letters visible and unknown letters as underscores.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create your feature branch**:
   ```bash
   git branch format_hidden_word
   git checkout format_hidden_word
   ```

3. **Implement the function**:
   Open `hangman.py` and implement `format_hidden_word`:
   - Loop through each letter in `word_to_guess`
   - If the letter is in `letters_guessed`, show the letter
   - If not, show an underscore "_"
   - Return the formatted string

4. **Test your implementation**:
   ```bash
   python -m pip install pytest
   pytest test_hangman.py -k test_format_hidden_word
   ```

5. **Commit and push your work**:
   ```bash
   git add hangman.py
   git commit -m "Implement format_hidden_word function"
   git push --set-upstream origin format_hidden_word
   ```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `format_hidden_word`
   - Set **Target branch**: `dev`
   - Add title and description
   - Click **"Create Merge Request"**

**✅ Your task is complete!** Your code will be reviewed and merged later.
<!-- /ROLE: B -->

<!-- ROLE: C -->
## Team Member C: Implement `all_letters_guessed`

**Your function**: Check if the entire word has been guessed

### What You'll Build
The `all_letters_guessed` function determines if the player has successfully guessed all letters in the word.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create your feature branch**:
   ```bash
   git branch all_letters_guessed
   git checkout all_letters_guessed
   ```

3. **Implement the function**:
   Open `hangman.py` and implement `all_letters_guessed`:
   - Check if every letter in `word_to_guess` is present in `letters_guessed`
   - Return `True` if all letters are guessed, `False` otherwise
   - Hint: You can loop through the word or use set operations

4. **Test your implementation**:
   ```bash
   python -m pip install pytest
   pytest test_hangman.py -k test_all_letters_guessed
   ```

5. **Commit and push your work**:
   ```bash
   git add hangman.py
   git commit -m "Implement all_letters_guessed function"
   git push --set-upstream origin all_letters_guessed
   ```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `all_letters_guessed`
   - Set **Target branch**: `dev`
   - Add title and description
   - Click **"Create Merge Request"**

**✅ Your task is complete!** Your code will be reviewed and merged later.
<!-- /ROLE: C -->

<!-- ROLE: D -->
## Team Member D: Implement `ask_for_valid_input`

**Your function**: Get and validate user input

### What You'll Build
The `ask_for_valid_input` function prompts the user for a letter and validates the input according to game rules.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create your feature branch**:
   ```bash
   git branch ask_for_valid_input
   git checkout ask_for_valid_input
   ```

3. **Implement the function**:
   Open `hangman.py` and implement `ask_for_valid_input`:
   - Use `input("Enter a letter [a-z]: ")` to get user input
   - Validate that input is:
     - Exactly one character (`len(input) == 1`)
     - A lowercase letter (`97 <= ord(letter) <= 122`)
     - Not already guessed (`letter not in letters_guessed`)
   - Use a `while` loop to keep asking until valid input is received
   - Return the valid letter

4. **Test your implementation**:
   ```bash
   python -m pip install pytest
   pytest test_hangman.py -k test_ask_for_valid_input
   ```

5. **Commit and push your work**:
   ```bash
   git add hangman.py
   git commit -m "Implement ask_for_valid_input function"
   git push --set-upstream origin ask_for_valid_input
   ```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `ask_for_valid_input`
   - Set **Target branch**: `dev`
   - Add title and description
   - Click **"Create Merge Request"**

**✅ Your task is complete!** Your code will be reviewed and merged later.
<!-- /ROLE: D -->

<!-- ROLE: E -->
## Team Member E: Implement `update_game`

**Your function**: Update game state after each guess

### What You'll Build
The `update_game` function processes a player's guess and updates the game state accordingly.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create your feature branch**:
   ```bash
   git branch update_game
   git checkout update_game
   ```

3. **Implement the function**:
   Open `hangman.py` and implement `update_game`:
   - Add `new_guess` to the `letters_guessed` string
   - Check if `new_guess` is in `word_to_guess`:
     - If **yes**: keep `remaining_attempts` the same
     - If **no**: decrease `remaining_attempts` by 1
   - Return the updated `letters_guessed` and `remaining_attempts`

4. **Test your implementation**:
   ```bash
   python -m pip install pytest
   pytest test_hangman.py -k test_update_game
   ```

5. **Commit and push your work**:
   ```bash
   git add hangman.py
   git commit -m "Implement update_game function"
   git push --set-upstream origin update_game
   ```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `update_game`
   - Set **Target branch**: `dev`
   - Add title and description
   - Click **"Create Merge Request"**

**✅ Your task is complete!** Your code will be reviewed and merged later.
<!-- /ROLE: E -->

<!-- ROLE: F -->
## Team Member F: Implement `game`

**Your function**: Main game loop orchestrating all other functions

### What You'll Build
The `game` function coordinates all other functions to create the complete hangman game experience.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create your feature branch**:
   ```bash
   git branch game
   git checkout game
   ```

3. **Implement the function**:
   Open `hangman.py` and implement `game`:
   - Call `pick_random_word()` to get a word
   - Initialize `remaining_attempts = 8` and `letters_guessed = ""`
   - Create a `while` loop that continues while:
     - `remaining_attempts > 0` AND
     - `not all_letters_guessed(word_to_guess, letters_guessed)`
   - In each loop iteration:
     - Print the formatted word using `format_hidden_word()`
     - Print the number of remaining attempts
     - Get user input using `ask_for_valid_input()`
     - Update game state using `update_game()`
   - After the loop: print "You won" if attempts > 0, else "You lost"

4. **Note about testing**:
   Your function depends on all others, so complete testing will only be possible once everyone's code is integrated.

5. **Commit and push your work**:
   ```bash
   git add hangman.py
   git commit -m "Implement game function"
   git push --set-upstream origin game
   ```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `game`
   - Set **Target branch**: `dev`
   - Add title and description
   - Click **"Create Merge Request"**

**✅ Your task is complete!** Your code will be reviewed and merged later.
<!-- /ROLE: F -->

---

## Next Steps

Once everyone has created their merge requests, you'll learn how to:
- **Review** each other's code
- **Test** the integrated functionality
- **Merge** approved changes into the development branch

This collaborative workflow is fundamental to professional software development!