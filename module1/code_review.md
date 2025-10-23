# Code Review Process

Code review is one of the most important practices in software development. It improves code quality, shares knowledge across the team, and catches bugs before they reach production.

## Understanding Code Review

### What is Code Review?

Code review is the process where team members examine each other's code changes before they're merged. Reviewers look for:
- **Correctness**: Does the code do what it's supposed to do?
- **Quality**: Is the code well-written and maintainable?
- **Style**: Does it follow team conventions?
- **Security**: Are there any security issues?
- **Performance**: Are there any obvious performance problems?

### Why Review Code?

1. **Catch bugs early**: Easier and cheaper to fix before merge
2. **Share knowledge**: Team learns from each other's approaches
3. **Maintain consistency**: Ensure code follows team standards
4. **Improve quality**: Multiple eyes spot issues single developer might miss
5. **Mentoring**: Senior developers can guide junior ones

## Review Assignments

For this exercise, each team member will review one other member's work:

- **Team Member A** reviews **Team Member B's** merge request
- **Team Member B** reviews **Team Member C's** merge request  
- **Team Member C** reviews **Team Member D's** merge request
- **Team Member D** reviews **Team Member E's** merge request
- **Team Member E** reviews **Team Member F's** merge request
- **Team Member F** reviews **Team Member A's** merge request

<!-- ROLE: A -->
## Team Member A: Review Team Member B's Code

**You are reviewing Team Member B's implementation of `format_hidden_word`.**

### Your Review Process

1. **Find the merge request**:
   - Go to **Merge requests** in GitLab
   - Look for Team Member B's MR (should mention `format_hidden_word`)

2. **Examine the changes**:
   - Click on the **Changes** tab
   - Review the implementation in `hangman.py`
   - Check if the logic makes sense

3. **Check against requirements**:
   - Does it replace unguessed letters with underscores?
   - Does it preserve guessed letters in correct positions?
   - Does it handle edge cases (empty input, no guesses)?

4. **Test the implementation mentally**:
   - Word: "hello", Guessed: "el" → Should show: "_ell_"
   - Word: "test", Guessed: "" → Should show: "____"

5. **Look for code quality**:
   - Is the code readable?
   - Are variable names clear?
   - Is the logic efficient?

### Provide Your Review

**If the code looks good:**
```markdown
LGTM! The implementation correctly handles the formatting logic:
- ✅ Replaces unguessed letters with underscores
- ✅ Preserves guessed letters in correct positions  
- ✅ Clean, readable code

Approved for merge.
```

**If you find issues:**
```markdown
Great start! I found a few things to address:

1. **Line 23**: The loop logic doesn't handle the case where `letters_guessed` is empty
2. **Suggestion**: Consider using a list comprehension for cleaner code:
   ```python
   return ''.join(letter if letter in letters_guessed else '_' for letter in word_to_guess)
   ```

Please fix the empty input case and then I'll approve.
```

**Click "Approve" if ready, or request changes if needed.**
<!-- /ROLE: A -->

<!-- ROLE: B -->
## Team Member B: Review Team Member C's Code

**You are reviewing Team Member C's implementation of `all_letters_guessed`.**

### Your Review Process

1. **Find the merge request**:
   - Go to **Merge requests** in GitLab
   - Look for Team Member C's MR (should mention `all_letters_guessed`)

2. **Examine the changes**:
   - Click on the **Changes** tab
   - Review the implementation in `hangman.py`

3. **Check the logic**:
   - Does it check if ALL letters of the word are in the guessed letters?
   - Does it return `True` only when the word is completely guessed?
   - Does it handle edge cases correctly?

4. **Test cases to consider**:
   - Word: "hello", Guessed: "helo" → Should return: `True`
   - Word: "hello", Guessed: "hel" → Should return: `False`
   - Word: "test", Guessed: "testing" → Should return: `True`

### Provide Your Review

**Leave a comment with your findings and either approve or request changes.**
<!-- /ROLE: B -->

<!-- ROLE: C -->
## Team Member C: Review Team Member D's Code  

**You are reviewing Team Member D's implementation of `ask_for_valid_input`.**

### Your Review Process

1. **Find Team Member D's merge request**
2. **Examine the input validation logic**:
   - Does it check for single character input?
   - Does it validate lowercase letters only?
   - Does it prevent re-guessing the same letter?
   - Does it use a proper loop to re-ask for input?

3. **Check error handling**:
   - Are error messages helpful to the user?
   - Does it handle edge cases gracefully?

4. **Test scenarios**:
   - Input: "a" (valid) → Should return: "a"
   - Input: "A" (uppercase) → Should re-ask
   - Input: "1" (number) → Should re-ask
   - Input: "ab" (multiple chars) → Should re-ask
   - Input: "a" when "a" already guessed → Should re-ask

### Provide Your Review

**Focus on user experience and input validation completeness.**
<!-- /ROLE: C -->

<!-- ROLE: D -->
## Team Member D: Review Team Member E's Code

**You are reviewing Team Member E's implementation of `update_game`.**

### Your Review Process

1. **Find Team Member E's merge request**
2. **Examine the game state update logic**:
   - Does it add the new guess to `letters_guessed`?
   - Does it only decrease attempts for wrong guesses?
   - Does it return the correct tuple format?

3. **Check the logic flow**:
   - Right guess: letters updated, attempts unchanged
   - Wrong guess: letters updated, attempts decreased by 1

4. **Test scenarios**:
   - Word: "hello", guess: "h", attempts: 5 → ("h", 5)
   - Word: "hello", guess: "x", attempts: 5 → ("x", 4)

### Provide Your Review

**Focus on game logic correctness and return value handling.**
<!-- /ROLE: D -->

<!-- ROLE: E -->
## Team Member E: Review Team Member F's Code

**You are reviewing Team Member F's implementation of `game`.**

### Your Review Process

1. **Find Team Member F's merge request**
2. **Examine the main game loop**:
   - Does it pick a random word at the start?
   - Does it initialize attempts to 8 and letters_guessed to empty string?
   - Does it have the correct while loop condition?
   - Does it display the formatted word and attempts each turn?
   - Does it get user input and update game state?
   - Does it display win/lose message correctly?

3. **Check the game flow**:
   - Game continues while attempts > 0 AND not all letters guessed
   - Proper win/lose conditions

### Provide Your Review

**Focus on the complete game experience and loop logic.**
<!-- /ROLE: E -->

<!-- ROLE: F -->
## Team Member F: Review Team Member A's Code

**You are reviewing Team Member A's implementation of `pick_random_word`.**

### Your Review Process

1. **Find Team Member A's merge request**
2. **Examine the file reading and random selection**:
   - Does it read from the correct file (`words.txt`)?
   - Does it handle file reading properly?
   - Does it return a random word from the list?
   - Does it handle potential errors (file not found, empty file)?

3. **Check implementation details**:
   - File path handling
   - Random selection method
   - Error handling for edge cases

### Provide Your Review

**Focus on file I/O correctness and error handling.**
<!-- /ROLE: F -->

## General Review Guidelines

### What to Look For

1. **Correctness**:
   - Does the code do what the function is supposed to do?
   - Are all test cases likely to pass?

2. **Code Quality**:
   - Is the code readable and well-organized?
   - Are variable names descriptive?
   - Is the logic clear and efficient?

3. **Edge Cases**:
   - Empty inputs
   - Invalid inputs  
   - Boundary conditions

4. **Style Consistency**:
   - Follows Python conventions
   - Consistent with team's coding style

### How to Give Good Feedback

**Be Constructive:**
- ✅ "Consider using a list comprehension here for better readability"
- ❌ "This code is bad"

**Be Specific:**
- ✅ "Line 15: This condition doesn't handle empty strings"
- ❌ "Something's wrong with the logic"

**Explain Why:**
- ✅ "This could cause a bug because..."
- ✅ "This approach is cleaner because..."

**Suggest Solutions:**
- ✅ "Try this instead: `[code example]`"
- ✅ "What if we used X instead of Y?"

### Review Outcomes

After reviewing, you should:

1. **Approve**: If code is ready to merge
2. **Request Changes**: If issues need to be fixed
3. **Comment Only**: If you have suggestions but no blocking issues

## Checkout and Test Locally (Optional)

For thorough review, you can test the code locally:

```bash
# Fetch the latest branches
git fetch

# Checkout the reviewer's branch
git checkout feature/their-branch-name

# Run the tests
python -m pytest test_hangman.py -v

# Test their specific function
python -c "from hangman import their_function; print(their_function('test', 'args'))"

# Switch back to your branch
git checkout your-branch
```

## What Makes a Good Reviewer

- **Thorough but timely**: Review carefully but don't delay the team
- **Helpful**: Provide suggestions, not just criticism
- **Learning-focused**: Help teammates improve
- **Consistent**: Apply the same standards to everyone
- **Respectful**: Remember you're reviewing code, not the person

**Remember**: Good code review makes the whole team stronger!