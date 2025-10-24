<!-- ROLE: A -->

## Learning to work together

So far, we have only been working on the `main` branch. However, think about what would happen if:
- We always want to have a quick access to a working version of the project (for example, to show the teachers when they come to our table)?
- Two developers modify the same part of the same file, causing conflicts?
- One developer pushes a commit which causes an error or a bug?

To address those issues, we have to use branches and proper planning, using the tools provided by Git and GitLab. To illustrate, we are going to build a small hangman game in Python, where the user has to guess a word letter by letter.

First, we are going to create another branch, called "dev", and add some default files to it, which we will fill later on during the project.


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
Create a new file called `hangman.py` and paste the content from [this file](../python/hangman.py.html). This is a template containing empty functions for the hangman game, which each team member will implement.

#### File 2: test_hangman.py
Create a new file called `test_hangman.py` and paste the content from [this file](../python/test_hangman.py.html). This file contains tests for the functions that your team will implement in hangman.py.

#### File 3: words.txt
Create a new file called `words.txt` and paste the content from [this file](../python/words.txt.html). This text file contains many words that will be used to pick a random word for the hangman game.

#### File 4: .gitignore
Create a new file called `.gitignore` and paste the content from [this file](../python/.gitignore.html). This file tells Git to ignore certain files that shouldn't be committed (like the virtual environment folder).

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

4. Run this command to push while also creating the remote branch `dev` on GitLab:
   ```bash
   git push --set-upstream origin dev
   ```

**You're done!** Let your team know the project structure is ready.
<!-- /ROLE: A -->

<!-- ROLE: B,C,D,E,F -->

## Learning to work together

So far, we have only been working on the `main` branch. However, think about what would happen if:
- We always want to have a quick access to a working version of the project (for example, to show the teachers when they come to our table)?
- Two developers modify the same part of the same file, causing conflicts?
- One developer pushes a commit which causes an error or a bug?

To address those issues, we have to use branches and proper planning, using the tools provided by Git and GitLab. To illustrate, we are going to build a small hangman game in Python, where the user has to guess a word letter by letter.

## What to do

[!WAIT]
Wait for **Team Member A** to finish setting up the project structure. They are currently performing the following tasks:
1. **Development branch**: Creating a separate `dev` branch for collaborative work
2. **Hangman game file**: Adding a python file that we will use for the team project
3. **Test file**: Adding a unit tests which will allow us to individually test the game functions
[/!WAIT]

 Once the setup is complete, you need to:
1. **Pull the latest changes** once they're done:
   ```bash
   git pull
   git checkout dev
   ```
3. **Verify** you can see the new files in your project directory
<!-- /ROLE: B,C,D,E,F -->