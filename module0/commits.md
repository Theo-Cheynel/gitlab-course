## Your First Team Commits

Now that everyone has cloned the repository and set up their virtual environment, it's time to make your first commits as a team. This lesson will teach you the importance of coordinating changes and the basic Git workflow.

### Understanding the Git Workflow

When working in a team, you must follow this sequence:
1. **Pull** the latest changes from the remote repository
2. **Edit** your files locally
3. **Add** your changes to the staging area
4. **Commit** your changes with a descriptive message
5. **Push** your changes to the remote repository

**Important**: Never skip the pull step when working in a team!

---

## Role-Based Instructions

<!-- ROLE: A -->
## Team Member A: Initialize the Project

**You go first!** You'll set up the initial project structure and demonstrate the Git workflow for your team.

### Step 1: Edit the README.md

1. Open the `README.md` file in your text editor or VSCode:
   ```bash
   code README.md
   ```

2. **Delete all existing content** and replace it with:
   ```markdown
   # Hangman Game Project
   
   ## Project Members:
   - [Your Full Name] (Team Member A)
   ```

3. Save the file

### Step 2: Check Git Status

See what Git detected:
```bash
git status
```

You should see that `README.md` is listed as "modified".

### Step 3: Stage Your Changes

Add the file to the staging area:
```bash
git add README.md
```

### Step 4: Make Your First Commit

Create a commit with a descriptive message:
```bash
git commit -m "Initialize project with team member list

- Add project title and structure to README
- Add Team Member A to project members list"
```

### Step 5: Push to Remote Repository

Upload your changes to GitLab:
```bash
git push origin main
```

### Step 6: Create .gitignore File

While your teammates are working, create a `.gitignore` file to exclude the virtual environment:

1. Create the file:
   ```bash
   touch .gitignore
   ```

2. Edit it:
   ```bash
   code .gitignore
   ```

3. Add this content:
   ```
   # Virtual Environment
   venv/
   __pycache__/
   *.pyc
   *.pyo
   
   # IDE files
   .vscode/
   .idea/
   
   # OS files
   .DS_Store
   Thumbs.db
   ```

4. Stage and commit:
   ```bash
   git add .gitignore
   git commit -m "Add .gitignore file

- Exclude virtual environment folder
- Exclude Python cache files
- Exclude IDE and OS specific files"
   ```

5. Push the changes:
   ```bash
   git push origin main
   ```

** You're done!** Let your team know they can start adding their names.
<!-- /ROLE: A -->

<!-- ROLE: B -->
## Team Member B: Add Your Name Second

**Wait for Team Member A to finish and push their changes** before you start.

### Step 1: Pull the Latest Changes

**Important**: Always pull before making changes:
```bash
git pull origin main
```

You should see the updated README.md file.

### Step 2: Verify You Have the Updates

Check the README content:
```bash
cat README.md
```

You should see Team Member A's name in the list.

### Step 3: Edit the README.md

1. Open the README.md file:
   ```bash
   code README.md
   ```

2. Add your name to the project members list:
   ```markdown
   # Hangman Game Project
   
   ## Project Members:
   - [Team Member A's Name] (Team Member A)
   - [Your Full Name] (Team Member B)
   ```

3. Save the file

### Step 4: Commit and Push Your Changes

```bash
git add README.md
git commit -m "Add Team Member B to project members list"
git push origin main
```

** You're done!** Let Team Member C know they can add their name.
<!-- /ROLE: B -->

<!-- ROLE: C -->
## Team Member C: Add Your Name Third

**Wait for Team Member B to finish and push their changes** before you start.

### Step 1: Pull the Latest Changes

```bash
git pull origin main
```

### Step 2: Verify You Have the Updates

Check that both A and B are in the README:
```bash
cat README.md
```

### Step 3: Add Your Name

1. Open README.md:
   ```bash
   code README.md
   ```

2. Add your name to the list:
   ```markdown
   # Hangman Game Project
   
   ## Project Members:
   - [Team Member A's Name] (Team Member A)
   - [Team Member B's Name] (Team Member B)
   - [Your Full Name] (Team Member C)
   ```

### Step 4: Commit and Push

```bash
git add README.md
git commit -m "Add Team Member C to project members list"
git push origin main
```

** You're done!** Let Team Member D know they can add their name.
<!-- /ROLE: C -->

<!-- ROLE: D -->
## Team Member D: Add Your Name Fourth

**Wait for Team Member C to finish and push their changes** before you start.

### Step 1: Pull the Latest Changes

```bash
git pull origin main
```

### Step 2: Add Your Name

1. Open README.md:
   ```bash
   code README.md
   ```

2. Add your name:
   ```markdown
   # Hangman Game Project
   
   ## Project Members:
   - [Team Member A's Name] (Team Member A)
   - [Team Member B's Name] (Team Member B)
   - [Team Member C's Name] (Team Member C)
   - [Your Full Name] (Team Member D)
   ```

### Step 3: Commit and Push

```bash
git add README.md
git commit -m "Add Team Member D to project members list"
git push origin main
```

** You're done!** Let Team Member E know they can add their name.
<!-- /ROLE: D -->

<!-- ROLE: E -->
## Team Member E: Add Your Name Fifth

**Wait for Team Member D to finish and push their changes** before you start.

### Step 1: Pull the Latest Changes

```bash
git pull origin main
```

### Step 2: Add Your Name

1. Open README.md:
   ```bash
   code README.md
   ```

2. Add your name:
   ```markdown
   # Hangman Game Project
   
   ## Project Members:
   - [Team Member A's Name] (Team Member A)
   - [Team Member B's Name] (Team Member B)
   - [Team Member C's Name] (Team Member C)
   - [Team Member D's Name] (Team Member D)
   - [Your Full Name] (Team Member E)
   ```

### Step 3: Commit and Push

```bash
git add README.md
git commit -m "Add Team Member E to project members list"
git push origin main
```

** You're done!** If you have a Team Member F, let them know they can add their name.
<!-- /ROLE: E -->

<!-- ROLE: F -->
## Team Member F: Add Your Name Last

**Wait for Team Member E to finish and push their changes** before you start.

### Step 1: Pull the Latest Changes

```bash
git pull origin main
```

### Step 2: Add Your Name

1. Open README.md:
   ```bash
   code README.md
   ```

2. Add your name:
   ```markdown
   # Hangman Game Project
   
   ## Project Members:
   - [Team Member A's Name] (Team Member A)
   - [Team Member B's Name] (Team Member B)
   - [Team Member C's Name] (Team Member C)
   - [Team Member D's Name] (Team Member D)
   - [Team Member E's Name] (Team Member E)
   - [Your Full Name] (Team Member F)
   ```

### Step 3: Commit and Push

```bash
git add README.md
git commit -m "Add Team Member F to project members list"
git push origin main
```

** You're done!** The team setup is complete.
<!-- /ROLE: F -->

---

## Final Verification

Once everyone has added their name, **everyone should pull the final version**:

```bash
git pull origin main
cat README.md
```

You should see all team members listed in the README.md file.

## What You've Learned

### Key Git Concepts:
- **git pull**: Downloads the latest changes from the remote repository
- **git add**: Stages files for commit
- **git commit**: Creates a snapshot of your changes with a descriptive message
- **git push**: Uploads your commits to the remote repository
- **git status**: Shows the current state of your working directory

### Best Practices:
- **Always pull before making changes** in a team environment
- **Write descriptive commit messages** that explain what and why
- **Work sequentially** when editing the same file to avoid conflicts
- **Use .gitignore** to exclude files that shouldn't be tracked

### Why This Workflow Matters:
- **Prevents conflicts**: By pulling first, you get the latest changes
- **Maintains history**: Each commit creates a checkpoint you can return to
- **Enables collaboration**: Multiple people can work on the same project safely
- **Tracks progress**: Commit messages create a log of what was done and when

<‰ **Congratulations!** You've completed your first collaborative Git workflow. You're now ready to work on more complex features as a team!