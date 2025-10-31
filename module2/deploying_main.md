# Deploying to Main

After resolving conflicts and ensuring your features work together, it's time to deploy the completed game to the main branch. This lesson covers the process of preparing, validating, and deploying your collaborative work to production.

## Understanding Deployment to Main

### Why Deploy to Main?

The **main branch** represents your production-ready code:
- ✅ **Stable**: Thoroughly tested and conflict-free
- ✅ **Complete**: All features integrated and working
- ✅ **Documented**: Changes are properly documented  
- ✅ **Reviewed**: Code has been peer-reviewed

### Deployment Checklist

Before deploying to main, ensure:
- [ ] All merge conflicts resolved
- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] Features working as expected
- [ ] Documentation updated

## Pre-Deployment Validation

### Step 1: Final Integration Testing

Test the complete game with all features:

```bash
# Switch to dev branch
git checkout dev
git pull

# Test the complete game
python hangman.py
```

**Manual Test Cases:**
1. **Start game**: Does it pick a random word?
2. **Guess letters**: Do correct/incorrect guesses work?
3. **Win condition**: Does it detect when word is complete?
4. **Lose condition**: Does it end after 8 wrong guesses?
5. **Difficulty levels**: Try different difficulty settings
6. **Edge cases**: Test with unusual inputs

### Step 2: Run Full Test Suite

Ensure all automated tests pass:

```bash
# Run all tests
python -m pytest test_hangman.py -v

# Check test coverage (if available)
python -m pytest test_hangman.py --cov=hangman
```

Expected output:
```
test_hangman.py::test_pick_random_word PASSED
test_hangman.py::test_format_hidden_word PASSED  
test_hangman.py::test_all_letters_guessed PASSED
test_hangman.py::test_ask_for_valid_input PASSED
test_hangman.py::test_update_game PASSED
test_hangman.py::test_game PASSED

========================= 6 passed in 0.15s =========================
```

### Step 3: Code Quality Check

Review the final implementation:

```bash
# Check Python syntax
python -m py_compile hangman.py

# Review the final code structure
cat hangman.py
```

## Creating the Deployment Merge Request

<!-- ROLE: D -->
### Team Member D: Create Main Deployment MR

**You are responsible for creating the final merge request to deploy to main.**

Simply create a MR from dev to main:

1. Go to GitLab → **Merge requests**
2. Click **New merge request**
3. **Source branch**: `dev`
4. **Target branch**: `main`
5. **Title**: `Deploy hangman game v1.0 to production`
6. **Do NOT merge yet** - wait for team review and approval
<!-- /ROLE: D -->

<!-- ROLE: A,B,C,E,F -->
### Wait for Deployment MR

[!WAIT]
**Team Member D is creating the deployment merge request**

Team Member D is preparing the final merge request to deploy the completed hangman game from dev to main branch.

Once created, you'll all participate in the final review and approval process.
[/!WAIT]
<!-- /ROLE: A,B,C,E,F -->

## Team Review Process

### Final Code Review

**All team members should review the deployment MR:**

1. **Go to the merge request** created by Team Member A
2. **Review the Changes tab** to see all accumulated changes
3. **Check each team member's contribution**:
   - Are all promised features included?
   - Does the code look clean and well-structured?
   - Are there any obvious issues?

### Testing the Deployment

**Each team member should test locally:**

```bash
# Check out the dev branch to test final version
git fetch
git checkout dev
git pull

# Test the game thoroughly
python hangman.py
```

### Approval Requirements

Due to branch protection rules:
- ✅ **2 approvals required** before merge
- ✅ **All discussions resolved**
- ✅ **No merge conflicts**
- ✅ **All checks passing**

## Deployment Execution

<!-- ROLE: A,B -->
### Team Members A & B: Approve and Deploy

**You are responsible for the final approvals and deployment.**

1. **Review thoroughly** and click **Approve** 
2. **Once both have approved**, Team Member D clicks **Merge**
3. **Verify successful deployment**:
   ```bash
   git checkout main
   git pull
   python hangman.py  # Test in main branch
   ```
<!-- /ROLE: A,B -->

<!-- ROLE: C,E,F -->
### Other Team Members: Final Verification

**Once deployment is complete:**

1. **Switch to main branch**:
   ```bash
   git checkout main
   git pull
   ```

2. **Verify your feature is deployed**:
   ```bash
   python hangman.py
   # Test your specific contribution
   ```

3. **Celebrate!** 🎉 Your collaborative project is now in production
<!-- /ROLE: C,E,F -->

## Post-Deployment Activities

### 1. Update Documentation

Update the README.md to reflect the completed game:

```markdown
# Hangman Game

A collaborative implementation of the classic word-guessing game.

## Features
- Multiple difficulty levels
- Interactive user interface  
- Comprehensive input validation
- Complete game state management

## How to Play
1. Run: `python hangman.py`
2. Choose difficulty level
3. Guess letters to reveal the hidden word
4. Win by guessing all letters before 8 wrong attempts

## Development
This game was built collaboratively by 6 team members using Git/GitLab workflows.
```

### 2. Creating Tags and Releases

<!-- ROLE: D -->
**Team Member D: Create Version Tags and Releases**

Now that the code is in main, you'll learn how to create tags and releases using GitLab's interface.

#### Understanding Tags and Releases

**Tags** mark specific points in your project's history, typically used for releases:
- **v1.0, v1.1, v2.0**: Version numbers for releases
- **Immutable**: Tags point to specific commits and don't change
- **Reference points**: Easy way to find and checkout specific versions

**Releases** are GitLab's way of packaging tags with additional information:
- **Release notes**: What changed in this version
- **Downloadable assets**: Compiled binaries, documentation
- **User-friendly**: Non-technical users can easily find stable versions

#### Creating a Tag via GitLab Interface

1. **Navigate to Repository → Tags**
2. **Click "New tag"**
3. **Fill in the details**:
   - **Tag name**: `v1.0`
   - **Create from**: `main` (branch)
   - **Message**: `Release version 1.0: Complete hangman game`
4. **Click "Create tag"**

#### Creating a Release from the Tag

1. **Go to Deployments → Releases**
2. **Click "New release"**
3. **Select your tag**: `v1.0`
4. **Release title**: `Hangman Game v1.0`
5. **Release notes**:
   ```markdown
   ## 🎮 Hangman Game v1.0
   
   First stable release of our collaborative hangman game!
   
   ### Features
   - Multiple difficulty levels
   - Interactive gameplay
   - Input validation
   - Win/lose detection
   - Complete test suite
   
   ### How to Play
   1. Download the source code
   2. Run `python hangman.py`
   3. Choose your difficulty and start guessing!
   
   ### Contributors
   Built collaboratively by Team Members A-F using Git workflows.
   ```
6. **Click "Create release"**
<!-- /ROLE: D -->

#### Why Version Tags Matter

**Showing Working Versions to Teachers:**
Tags allow you to demonstrate stable versions even while developing new features:

```bash
# If you're working on new features and code is broken:
git stash  # Save current work
git checkout v1.0  # Switch to stable version
python hangman.py  # Show teacher the working game

# Return to development:
git checkout main
git stash pop  # Restore your work
```

**Benefits:**
- ✅ **Stable demos**: Always have a working version to show
- ✅ **Progress tracking**: Clear milestones in development
- ✅ **Easy rollback**: Can return to any previous version
- ✅ **Professional workflow**: Industry standard practice

<!-- ROLE: A,B,C,E,F -->
### Wait for Tag Creation

[!WAIT]
**Team Member D is creating the version tag and release**

Team Member D is learning how to create tags and releases using GitLab's interface. This creates an official v1.0 release of your hangman game.

Once complete, you'll all be able to reference this stable version.
[/!WAIT]
<!-- /ROLE: A,B,C,E,F -->

### 3. Clean Up Branches

Remove feature branches that are no longer needed:

```bash
# Delete merged feature branches
git branch -d feature/difficulty-level
git branch -d feature/word-formatting
# etc.

# Delete remote branches (if desired)
git push origin --delete feature/difficulty-level
```

## Lessons Learned

### Collaboration Success Factors

1. **Clear task division**: Each member had a specific function to implement
2. **Regular communication**: Coordinated overlapping work
3. **Code review culture**: Peer review improved quality  
4. **Systematic conflict resolution**: Methodical approach to merging changes
5. **Testing discipline**: Ensured quality at each step

### Git/GitLab Workflow Benefits

1. **Branch protection**: Prevented accidental main branch corruption
2. **Merge requests**: Formal review process improved code quality
3. **Conflict resolution**: Learned to handle overlapping changes
4. **Version control**: Complete history of all changes
5. **Team coordination**: Structured process for collaborative development

## What's Next

Now that you've successfully deployed a collaborative project, you're ready to learn about:
- **Continuous Integration (CI)**: Automated testing and deployment
- **Advanced Git workflows**: Rebasing, cherry-picking, and more
- **Production monitoring**: Tracking deployed applications
- **Iterative development**: Planning and implementing new features

**Congratulations!** You've completed the collaborative development lifecycle from initial setup through production deployment. 🚀