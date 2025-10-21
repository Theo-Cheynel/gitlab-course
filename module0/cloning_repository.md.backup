## Cloning Your GitLab Repository

Now that your repository has been created on GitLab, it's time to download a local copy to your computer. This process is called **cloning**.

### What is Cloning?

Cloning creates a complete copy of the GitLab repository on your local machine, including:
- All files and folders
- Complete version history
- Connection to the remote repository (for pushing/pulling changes)

### Step 1: Get the Repository URL

1. Go to your team's GitLab repository page
2. Click the blue **"Clone"** button (usually in the top-right area)
3. Copy the **SSH URL** (it should look like: `git@your-gitlab-server:username/repository-name.git`)

**Why SSH?** SSH is more secure and convenient than HTTPS once set up. Since you configured SSH keys in the previous lesson, you won't need to enter your password every time.

### Step 2: Choose Your Local Directory

Before cloning, decide where to store your project. We recommend creating a dedicated folder for your coursework:

#### Windows (Git Bash):
```bash
cd /c/Users/YourUsername/Documents
mkdir git-projects
cd git-projects
```

#### macOS:
```bash
cd ~/Documents
mkdir git-projects
cd git-projects
```

#### Linux:
```bash
cd ~/Documents
mkdir git-projects
cd git-projects
```

### Step 3: Clone the Repository

Use the `git clone` command with your repository's SSH URL:

```bash
git clone git@your-gitlab-server:username/repository-name.git
```

**Example:**
```bash
git clone git@gitlab.com:jdoe/hangman-team-5.git
```

### Step 4: Navigate into Your Repository

```bash
cd your-repository-name
```

**Example:**
```bash
cd hangman-team-5
```

### Step 5: Verify the Clone

Check that everything worked correctly:

```bash
git status
```

You should see output like:
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

Also list the files to see what was cloned:

```bash
ls -la
```

You should see:
- `README.md` (the file that was created during repository setup)
- `.git/` directory (hidden folder containing Git metadata)

### Understanding Your Local Repository

Your local repository now contains:

1. **Working Directory**: The files you can see and edit
2. **Git Repository** (`.git/` folder): Git's internal data and history
3. **Remote Connection**: Link to the GitLab repository called `origin`

Check your remote connection:

```bash
git remote -v
```

Output should show:
```
origin  git@your-gitlab-server:username/repository-name.git (fetch)
origin  git@your-gitlab-server:username/repository-name.git (push)
```

### Common Issues and Solutions

#### Permission Denied (SSH)
If you get a "Permission denied" error:
- Verify your SSH key is correctly set up in GitLab
- Test SSH connection: `ssh -T git@your-gitlab-server`
- Make sure you're using the SSH URL, not HTTPS

#### Repository Not Found
- Double-check the repository URL
- Ensure you have access to the repository
- Verify the repository name and username are correct

#### Directory Already Exists
If you get "destination path already exists":
- Either delete the existing folder: `rm -rf folder-name`
- Or clone with a different name: `git clone <url> new-folder-name`

### Next Steps

<‰ **Congratulations!** You now have a local copy of your team's repository.

In the next lesson, you'll learn how to set up a Python virtual environment for your hangman project, ensuring everyone on your team uses the same Python packages and dependencies.

### Key Concepts Learned

- **Cloning**: Creating a local copy of a remote repository
- **Working Directory**: Your local files that you can edit
- **Remote (origin)**: The connection to your GitLab repository
- **SSH vs HTTPS**: SSH provides secure, password-free access