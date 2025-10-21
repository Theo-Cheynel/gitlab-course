## Cloning Your GitLab Repository

Now that your repository has been created on GitLab, it's time to clone it to your computer.

### Step 1: Get the Repository URL

1. Go to your team's GitLab repository page
2. Click the blue **"Clone"** button (usually in the top-right area)
3. Copy the **SSH URL** (it should look like: `git@your-gitlab-server:username/repository-name.git`)

### Step 2: Choose Your Local Directory

Before cloning, navigate to the place you want to store your project (for instance, Documents/) using `cd`


### Step 3: Clone the Repository

Use the `git clone` command with your repository's SSH URL:

```bash
git clone git@your-gitlab-server:username/repository-name.git
```

### Step 4: Navigate into Your Repository

```bash
cd your-repository-name
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
ls
```

You should see a file named `README.md` (the file that was created during repository setup)


## Troubleshooting

### Permission Denied (SSH)
If you get a "Permission denied" error:
- Verify your SSH key is correctly set up in GitLab
- Test SSH connection: `ssh -T git@your-gitlab-server`
- Make sure you're using the SSH URL, not HTTPS

### Repository Not Found
- Double-check the repository URL
- Ensure you have access to the repository
- Verify the repository name and username are correct

#### Directory Already Exists
If you get "destination path already exists":
- Either delete the existing folder: `rm -rf folder-name`
- Or clone with a different name: `git clone <url> new-folder-name`
