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
   
Project Members:
- [Your Full Name] (Team Member A)
```

3. Save the file

### Step 2: Check Git Status

See the changes detected by Git:
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
git commit -m "Initialize project with team member list"
```

You should see the following message:
```
[main 80166e5] Initialize project with team member list
 1 file changed, 4 insertions(+), 93 deletions(-)
```

### Step 5: Push to Remote Repository

Upload your changes to GitLab:
```bash
git push
```

### Step 6: Create .gitignore File

Your teammates will now add their names to the README.md, one by one (tell Team Member B to start).
While your teammates are working, create a `.gitignore` file, which tells Git which files it should NEVER include in commits:

1. Create the file:
   ```bash
touch .gitignore
```

2. Open it (for instance with VSCode):
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

4. Add and commit the changes:
   ```bash
git add .gitignore
git commit -m "Add .gitignore file"
```

5. Push the changes:
   ```bash
git push
```

**You're done!**
<!-- /ROLE: A -->

<!-- ROLE: B -->
## Team Member B: Add Your Name Second

[!WAIT member="A" action="needs to finish and push their changes"]
Please wait before you start.
[/!WAIT]

### Step 1: Pull the Latest Changes

**Important**: Always pull before making changes:
```bash
git pull
```

You should see the updated README.md file.

### Step 2: Edit the README.md

1. Open the README.md file, for instance with VSCode.

2. Add your name to the project members list:
   ```markdown
# Hangman Game Project

Project Members:
- [Team Member A's Name] (Team Member A)
- [Your Full Name] (Team Member B)
```

3. Save the file

### Step 3: Commit and Push Your Changes

```bash
git add README.md
git commit -m "Add Team Member B to project members list"
git push
```

**You're done!** Let Team Member C know they can add their name.
<!-- /ROLE: B -->

<!-- ROLE: C -->
## Team Member C: Add Your Name Third

[!WAIT member="B" action="needs to finish and push their changes"]
Please wait before you start.
[/!WAIT]

### Step 1: Pull the Latest Changes

**Important**: Always pull before making changes:
```bash
git pull
```

You should see the updated README.md file.

### Step 2: Edit the README.md

1. Open the README.md file, for instance with VSCode.

2. Add your name to the project members list:
   ```markdown
# Hangman Game Project

Project Members:
- [Team Member A's Name] (Team Member A)
- [Team Member B's Name] (Team Member B)
- [Your Full Name] (Team Member C)
```

3. Save the file

### Step 3: Commit and Push Your Changes

```bash
git add README.md
git commit -m "Add Team Member C to project members list"
git push
```

**You're done!** Let Team Member D know they can add their name.
<!-- /ROLE: C -->

<!-- ROLE: D -->
## Team Member D: Add Your Name Fourth

[!WAIT member="C" action="needs to finish and push their changes"]
Please wait before you start.
[/!WAIT]

### Step 1: Pull the Latest Changes

**Important**: Always pull before making changes:
```bash
git pull
```

You should see the updated README.md file.

### Step 2: Edit the README.md

1. Open the README.md file, for instance with VSCode.

2. Add your name to the project members list:
   ```markdown
# Hangman Game Project

Project Members:
- [Team Member A's Name] (Team Member A)
- [Team Member B's Name] (Team Member B)
- [Team Member C's Name] (Team Member C)
- [Your Full Name] (Team Member D)
```

3. Save the file

### Step 3: Commit and Push Your Changes

```bash
git add README.md
git commit -m "Add Team Member D to project members list"
git push
```

**You're done!** Let Team Member E know they can add their name.
<!-- /ROLE: D -->

<!-- ROLE: E -->
## Team Member E: Add Your Name Fifth

[!WAIT member="D" action="needs to finish and push their changes"]
Please wait before you start.
[/!WAIT]

### Step 1: Pull the Latest Changes

**Important**: Always pull before making changes:
```bash
git pull
```

You should see the updated README.md file.

### Step 2: Edit the README.md

1. Open the README.md file, for instance with VSCode.

2. Add your name to the project members list:
   ```markdown
# Hangman Game Project

Project Members:
- [Team Member A's Name] (Team Member A)
- [Team Member B's Name] (Team Member B)
- [Team Member C's Name] (Team Member C)
- [Team Member D's Name] (Team Member D)
- [Your Full Name] (Team Member E)
```

3. Save the file

### Step 3: Commit and Push Your Changes

```bash
git add README.md
git commit -m "Add Team Member E to project members list"
git push
```

**You're done!** Let Team Member F know they can add their name.
<!-- /ROLE: E -->

<!-- ROLE: F -->
## Team Member F: Add Your Name Last

[!WAIT member="E" action="needs to finish and push their changes"]
Please wait before you start.
[/!WAIT]

### Step 1: Pull the Latest Changes

**Important**: Always pull before making changes:
```bash
git pull
```

You should see the updated README.md file.

### Step 2: Edit the README.md

1. Open the README.md file, for instance with VSCode.

2. Add your name to the project members list:
   ```markdown
# Hangman Game Project

Project Members:
- [Team Member A's Name] (Team Member A)
- [Team Member B's Name] (Team Member B)
- [Team Member C's Name] (Team Member C)
- [Team Member D's Name] (Team Member D)
- [Team Member E's Name] (Team Member E)
- [Your Full Name] (Team Member F)
```

3. Save the file

### Step 3: Commit and Push Your Changes

```bash
git add README.md
git commit -m "Add Team Member F to project members list"
git push
```

**You're done!** Let everyone know that you can all proceed to the next module.
<!-- /ROLE: F -->