<!-- ROLE: A -->

Now that the basic hangman game is working, we'll add new features. 
However, this time, features will cause several team members to edit the same parts of the same file. 
This will demonstrate how **merge conflicts** happen -- and help you understand how to solve them.

## Team Member A: Add Difficulty Level

### What You'll Build
The difficulty system will categorize words based on letter frequency. Common letters (like E, T, A) make words easier; rare letters (like Q, X, Z) make them harder.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
git checkout dev
git pull
   ```

2. **Create your feature branch**:
   ```bash
git branch difficulty-level
git checkout difficulty-level
   ```

3. **Implement the function**:
   
   - First, add a helper function to calculate difficulty:
```python
def calculate_difficulty(word):
    """Calculate word difficulty based on letter frequency.
    Uses common letter ordering: E,T,A,O,N,R,I,S,H,D,L,F,C,M,U,G,Y,P,W,B,V,K,J,X,Z,Q
    Returns: 'easy', 'medium', or 'hard'
    """
    frequency = "ETAONRISHDLFCMUGYPWBVKJXZQ"
    total_index = sum(frequency.index(letter.upper()) for letter in word if letter.upper() in frequency)
    avg_index = total_index / len(word)
    
    if avg_index <= 6:
        return "easy"
    elif avg_index <= 8:
        return "medium"
    else:
        return "hard"
```
   
   - Then, modify `pick_random_word()`, so that it takes as argument a `difficulty_level` (can be `"easy"`, `"medium"` or `"hard"` -- just **make sure you put a default value**!). For this, the simplest way is to pick a random word until it matches the difficulty level (make sure to adapt this to the code that Member A wrote earlier):
```python
while True:
    random_word = return random.choice(words)
    if calculate_difficulty(random_word) == difficulty_level:
        return random_word
```
   
   - Finally, modify the `game()` function to ask for difficulty (also adapt it to the code that Member F wrote earlier):
   ```python
# Ask for difficulty level
difficulty_input = None
while difficulty_input not in ["easy", "medium", "hard"]:
    difficulty_input = input("Choose difficulty [easy/medium/hard]:").strip().lower()

word_to_guess = pick_random_word(difficulty_input)
   ```

4. **Manually try out your implementation**:
```bash
python hangman.py
python -m pytest
```

5. **Once it works, commit and push your work**:
```bash
git add hangman.py
git commit -m "Add difficulty level based on letter frequency"
git push --set-upstream origin difficulty-level
```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `difficulty-level`
   - Set **Target branch**: `dev`
   - Add title: "Add difficulty level feature"
   - Click **"Create Merge Request"**

**Your task is complete!** 
<!-- /ROLE: A -->

<!-- ROLE: B -->

Now that the basic hangman game is working, we'll add new features. 
However, this time, features will cause several team members to edit the same parts of the same file. 
This will demonstrate how **merge conflicts** happen -- and help you understand how to solve them.
## Team Member B: Add Hints System

### What You'll Build
A hint system that displays a clue before the game starts. You will be using a new `words.txt` file, where each line contains `word|hint`.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
git checkout dev
git pull
   ```

2. **Create your feature branch**:
   ```bash
git branch hints-system
git checkout hints-system
   ```

3. **Update words.txt format**:
   Replace the content of `words.txt` by [this file](/gitlab-course/python/words_clues.html). <!-- TODO -->

4. **Implement the function**:
   - Modify `pick_random_word()` so that it extracts the word and the hint from the line, using `line.split('|')`. Make sure that the function returns the word and the hint.
   
   - Modify the `game()` function to show hints. Retrieve the word and the hint from the call to `pick_random_word()`, and then print the hint before the game loop starts. Also add a five seconds delay using `time.sleep(5)` so that the user takes time to read the hint (make sure to `import time` at the beginning of the file.)

5. **Manually try out your implementation**:
   ```bash
python hangman.py
python -m pytest
   ```

6. **Commit and push your work**:
   ```bash
git add hangman.py words.txt
git commit -m "Add hints system"
git push --set-upstream origin hints-system
```

7. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `hints-system`
   - Set **Target branch**: `dev`
   - Add title: "Add hints system"
   - Click **"Create Merge Request"**

**Your task is complete!** 
<!-- /ROLE: B -->

<!-- ROLE: C -->

Now that the basic hangman game is working, we'll add new features. 
However, this time, features will cause several team members to edit the same parts of the same file. 
This will demonstrate how **merge conflicts** happen -- and help you understand how to solve them.
## Team Member C: Add Daily Word Feature

### What You'll Build
A "word of the day" feature where the random word is seeded by the current date, so that everyone gets the same word on the same day.

### Implementation Steps

1. **Switch to development branch**:
   ```bash
git checkout dev
git pull
   ```

2. **Create your feature branch**:
   ```bash
git branch daily-word
git checkout daily-word
   ```

3. **Implement the function**:
   
   - Add the import at the top of the file:
```python
from datetime import date
```
   
   - Modify `pick_random_word()` with a new boolean argument `today=False` (**make sure you put a default value**), so that before calling `random.choice()`, we do the following (make sure to adapt this to the code that Member A wrote earlier):
```python
if today:
    random.seed(int(date.today().strftime("%Y%m%d")))
```
    which sets the seed of the random number generator with today's date.
   
   - Also modify the beginning of the `game()` function to ask whether the user wants to play the "daily" mode (also adapt it to the code that Member F wrote earlier)
```python
play_today = None
while play_today not in ["yes", "no"]:
    play_today = input("Do you want to guess today's word? [yes/no]")
play_today = True if play_today == "yes" else False
word = pick_random_word(play_today)
```

4. **Manually try out your implementation**:
```bash
python hangman.py
python -m pytest
```

5. **Commit and push your work**:
```bash
git add hangman.py
git commit -m "Add daily word feature"
git push --set-upstream origin daily-word
```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `daily-word`
   - Set **Target branch**: `dev`
   - Add title: "Add daily word feature"
   - Click **"Create Merge Request"**

**Your task is complete!**
<!-- /ROLE: C -->

<!-- ROLE: D -->

Now that the basic hangman game is working, we'll add new features. 
However, this time, features will cause several team members to edit the same parts of the same file. 
This will demonstrate how **merge conflicts** happen -- and help you understand how to solve them.
## Team Member D: Add Pretty Display

### What You'll Build
Enhanced visual display with screen clearing and colored output using ANSI escape codes.

### Implementation Steps

1. **Switch to development branch**:
```bash
git checkout dev
git pull
```

2. **Create your feature branch**:
```bash
git branch pretty-display
git checkout pretty-display
```

3. **Implement the function**:
   
   - Add color constants at the top of the file:
```python
# ANSI color codes
RESET = "\033[0m"
CYAN = "\033[96m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
BOLD = "\033[1m"
```
   
   - Modify the game loop in `game()` function, so that we clear the console at the beginning of each round: `print("\033[H\033[J", end="")` (these are special characters that clear the console).

   - Modify all the `print()` calls to add the colors you want : `print(CYAN, "text to print in cyan", RESET)`

4. **Manually try out your implementation**:
```bash
python hangman.py
python -m pytest
```

5. **Commit and push your work**:
```bash
git add hangman.py
git commit -m "Add prettier display"
git push --set-upstream origin pretty-display
```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `pretty-display`
   - Set **Target branch**: `dev`
   - Add title: "Add pretty display with colors"
   - Click **"Create Merge Request"**

**Your task is complete!**
<!-- /ROLE: D -->

<!-- ROLE: E -->

Now that the basic hangman game is working, we'll add new features. 
However, this time, features will cause several team members to edit the same parts of the same file. 
This will demonstrate how **merge conflicts** happen -- and help you understand how to solve them.
## Team Member E: Display Guessed Letters

### What You'll Build
Show the list of previously guessed letters next to the word, helping players track their progress.

### Implementation Steps

1. **Switch to development branch**:
```bash
git checkout dev
git pull
```

2. **Create your feature branch**:
```bash
git branch show-guessed-letters
git checkout show-guessed-letters
```

3. **Implement the function**:
   
   - Modify the game loop in `game()` function to display guessed letters on the same line as `format_hidden_word`. You can use `','.join(letters_guessed).

4. **Manually try out your implementation**:
```bash
python hangman.py
python -m pytest
```

5. **Commit and push your work**:
```bash
git add hangman.py
git commit -m "Display guessed letters next to the word"
git push --set-upstream origin show-guessed-letters
```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `show-guessed-letters`
   - Set **Target branch**: `dev`
   - Add title: "Display guessed letters"
   - Click **"Create Merge Request"**

**Your task is complete!**
<!-- /ROLE: E -->

<!-- ROLE: F -->

Now that the basic hangman game is working, we'll add new features. 
However, this time, features will cause several team members to edit the same parts of the same file. 
This will demonstrate how **merge conflicts** happen -- and help you understand how to solve them.
## Team Member F: Visual Remaining Guesses Display

### What You'll Build
Replace the remaining attempts counter with a visual display of heart icons (♥) representing remaining lives.

### Implementation Steps

1. **Switch to development branch**:
```bash
git checkout dev
git pull
```

2. **Create your feature branch**:
```bash
git branch hearts-display
git checkout hearts-display
```

3. **Implement the function**:
   
   - Modify the game loop in `game()` function to show hearts, on the same line as `format_hidden_word`. You can use `"♥ "*remaining_attempts` to create the string.

4. **Manually try out your implementation**:
```bash
python hangman.py
python -m pytest
```

5. **Commit and push your work**:
```bash
git add hangman.py
git commit -m "Add visual hearts display for remaining attempts"
git push --set-upstream origin hearts-display
```

6. **Create a merge request**:
   - Go to your GitLab project page
   - Navigate to **Code > Merge Requests**
   - Click **"New Merge Request"**
   - Set **Source branch**: `hearts-display`
   - Set **Target branch**: `dev`
   - Add title: "Add visual hearts display"
   - Click **"Create Merge Request"**

**Your task is complete!**
<!-- /ROLE: F -->

