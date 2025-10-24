# Resolving Merge Conflicts

After implementing overlapping features, you'll encounter **merge conflicts** - situations where Git cannot automatically merge changes because multiple developers modified the same parts of the code. This lesson teaches you how to identify, understand, and resolve these conflicts.

## Understanding Merge Conflicts

### What Are Merge Conflicts?

A merge conflict occurs when:
- Two branches modify the same lines of code
- One branch deletes a file while another modifies it  
- Git cannot determine which changes to keep

### Conflict Markers

When Git encounters a conflict, it adds special markers to the file:

```
<<<<<<< HEAD
# Your current branch's changes
=======
# The incoming branch's changes  
>>>>>>> feature-branch-name
```

## Step-by-Step Conflict Resolution

### Step 1: Identify Conflicts

When a merge fails, Git will show:
```bash
git merge feature-branch
Auto-merging hangman.py
CONFLICT (content): Merge conflict in hangman.py
Automatic merge failed; fix conflicts and then commit the result.
```

Check which files have conflicts:
```bash
git status
```

### Step 2: Open the Conflicted File

Open `hangman.py` in VSCode. You'll see conflict markers:

```python
def pick_random_word(difficulty_level="medium"):
    """Pick a random word from the word list."""
    with open("words.txt", "r") as file:
        words = [word.strip() for word in file.readlines()]
    
<<<<<<< HEAD
    # Team Member A's difficulty-based selection
    while True:
        random_word = random.choice(words)
        if calculate_difficulty(random_word) == difficulty_level:
            return random_word
=======
    # Team Member B's length-based selection
    filtered_words = [word for word in words if 5 <= len(word) <= 8]
    return random.choice(filtered_words)
>>>>>>> feature/word-length-filter
```

### Step 3: Resolve the Conflict

You have three options:

#### Option 1: Keep Only HEAD (Current Branch)
Delete the conflict markers and incoming changes:
```python
def pick_random_word(difficulty_level="medium"):
    """Pick a random word from the word list."""
    with open("words.txt", "r") as file:
        words = [word.strip() for word in file.readlines()]
    
    # Team Member A's difficulty-based selection
    while True:
        random_word = random.choice(words)
        if calculate_difficulty(random_word) == difficulty_level:
            return random_word
```

#### Option 2: Keep Only Incoming Changes
Delete the conflict markers and current changes:
```python
def pick_random_word(difficulty_level="medium"):
    """Pick a random word from the word list."""
    with open("words.txt", "r") as file:
        words = [word.strip() for word in file.readlines()]
    
    # Team Member B's length-based selection
    filtered_words = [word for word in words if 5 <= len(word) <= 8]
    return random.choice(filtered_words)
```

#### Option 3: Combine Both Changes (Recommended)
Create a solution that incorporates both features:
```python
def pick_random_word(difficulty_level="medium"):
    """Pick a random word from the word list with difficulty and length filtering."""
    with open("words.txt", "r") as file:
        words = [word.strip() for word in file.readlines()]
    
    # First filter by length (Team Member B's feature)
    length_filtered = [word for word in words if 5 <= len(word) <= 8]
    
    # Then filter by difficulty (Team Member A's feature)
    while True:
        random_word = random.choice(length_filtered)
        if calculate_difficulty(random_word) == difficulty_level:
            return random_word
```

### Step 4: Test the Resolution

After resolving conflicts:

1. **Run the tests** to ensure your resolution works:
   ```bash
   python -m pytest test_hangman.py -v
   ```

2. **Test the function manually**:
   ```bash
   python -c "from hangman import pick_random_word; print(pick_random_word())"
   ```

### Step 5: Commit the Resolution

Once all conflicts are resolved and tests pass:

```bash
# Add the resolved files
git add hangman.py

# Commit the merge
git commit -m "Resolve merge conflict: combine difficulty and length filtering

- Integrated Team Member A's difficulty-based word selection
- Integrated Team Member B's length-based word filtering  
- Words are now filtered by both length (5-8 chars) and difficulty level
- All tests passing"
```

## Advanced Conflict Resolution

### Using VSCode's Merge Editor

VSCode provides a visual merge editor:

1. **Open conflicted file** in VSCode
2. **Click "Resolve in Merge Editor"** when prompted
3. **Use the three-pane view**:
   - Left: Incoming changes
   - Center: Result
   - Right: Current changes
4. **Click checkboxes** to accept changes
5. **Edit result directly** if needed

### Using Git Merge Tools

Configure a merge tool for complex conflicts:

```bash
# Configure VSCode as merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Use the merge tool
git mergetool
```

## Best Practices

### 1. Communicate with Your Team
- **Discuss overlapping work** before starting
- **Coordinate on shared functions** 
- **Review each other's code** regularly

### 2. Frequent Integration
- **Pull changes often** from the main branch
- **Merge small changes frequently** rather than large batches
- **Keep feature branches short-lived**

### 3. Write Clear Commit Messages
Help future conflict resolution:
```bash
# Good
git commit -m "Add difficulty calculation based on letter frequency"

# Bad  
git commit -m "Update function"
```

### 4. Test After Resolution
- **Always run tests** after resolving conflicts
- **Manual testing** for edge cases
- **Ask teammates to review** complex resolutions

## Common Conflict Scenarios

### 1. Function Signature Changes
When team members change function parameters:
```python
# Conflict between:
def format_hidden_word(word, guessed_letters):  # Original
def format_hidden_word(word_to_guess, letters_guessed, show_spaces=True):  # Modified
```

**Resolution**: Choose the most complete signature and update all callers.

### 2. Import Statement Conflicts
Multiple imports added to the same location:
```python
<<<<<<< HEAD
import random
import string
=======
import random
import sys
>>>>>>> feature-branch
```

**Resolution**: Include all necessary imports:
```python
import random
import string
import sys
```

### 3. Whitespace and Formatting
Different formatting tools or preferences:
- **Configure team formatting standards**
- **Use .editorconfig file**
- **Run formatters before committing**

## Preventing Conflicts

### 1. Good Code Organization
- **Single responsibility functions**
- **Modular design**
- **Clear interfaces between components**

### 2. Team Coordination
- **Assign different files/functions** to different members
- **Use feature branches** for experimental work
- **Regular team check-ins**

### 3. Development Workflow
- **Pull before starting work**: `git pull origin dev`
- **Push frequently**: Don't wait until feature is complete
- **Small, focused commits**: Easier to resolve conflicts

## What's Next

Once you've mastered conflict resolution, you'll learn about deploying your changes to the main branch with proper testing and validation workflows.

**Remember**: Conflicts are normal in collaborative development. The key is resolving them systematically and learning from each experience!