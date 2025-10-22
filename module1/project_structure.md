## Learning to work together

So far, we have only been working on the `main` branch. However, think about what would happen if:
- We always want to have a quick access to a working version of the project (for example, to show the teachers when they come to our table)?
- Two developers modify the same part of the same file, causing conflicts?
- One developer pushes a commit which causes an error or a bug?

To address those issues, we have to use the collaborative tools of Git and GitLab. To illustrate, we are going to build a small hangman game in Python, where the user has to guess a word letter by letter.

First, we are going to create another branch, called "dev", and add some default files to it, which we will fill later on during the project.

---

## Role-Based Instructions

<!-- ROLE: A -->
## Team Member A: Set Up Project Structure

**You are responsible for creating the development branch and project files.**

### Step 1: Prepare the Development Branch

1. Make sure you have the latest version of the code:
   ```bash
   git pull
   ```

2. Create a new branch called "dev":
   ```bash
   git branch dev
   ```

3. Switch to the dev branch:
   ```bash
   git checkout dev
   ```

### Step 2: Create Project Files

Using VSCode, create the following files in your project directory:

#### File 1: hangman.py
Create a new file called `hangman.py` and paste the content from [this file](python/hangman.py). This is a template containing empty functions for the hangman game, which each team member will implement.

#### File 2: test_hangman.py
Create a new file called `test_hangman.py` and paste the content from [this file](python/test_hangman.py). This file contains tests for the functions that your team will implement in hangman.py.

#### File 3: words.txt
Create a new file called `words.txt` and paste the content from [this file](python/words.txt). This text file contains many words that will be used to pick a random word for the hangman game.

#### File 4: .gitignore
Create a file called `.gitignore` and paste the content from [this file](python/.gitignore). This tells Git which files NOT to track (like IDE-generated files).

### Step 3: Commit and Push

1. Add all the new files:
   ```bash
   git add hangman.py test_hangman.py words.txt .gitignore
   ```

2. Commit the files:
   ```bash
   git commit -m "Add template files for hangman project"
   ```

3. Push your changes:
   ```bash
   git push
   ```

**Note:** Since the `dev` branch doesn't exist on the remote repository yet, you'll get this error:
```
fatal: The current branch dev has no upstream branch
```

4. Run this command to create the branch on GitLab:
   ```bash
   git push --set-upstream origin dev
   ```

**✅ You're done!** Let your team know the project structure is ready.
<!-- /ROLE: A -->

<!-- ROLE: B,C,D,E,F -->
## Project Setup in Progress

Team Member A is currently setting up the project structure and creating the development branch.

### What's Being Created:
- **Development branch**: A separate branch for collaborative work
- **Hangman game files**: Python templates for the team project
- **Test files**: Unit tests for the game functions
- **Project configuration**: Git ignore rules and project setup

### What You Should Do:
1. **Wait** for Team Member A to complete the setup
2. **Pull the latest changes** once they're done:
   ```bash
   git pull
   git checkout dev
   ```
3. **Verify** you can see the new files in your project directory

Team Member A will let you know when the project structure is ready for the next steps.
<!-- /ROLE: B,C,D,E,F -->