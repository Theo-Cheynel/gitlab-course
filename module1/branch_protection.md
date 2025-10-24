<!-- ROLE: B -->

In a real-world development environment, the `main` branch should be protected to ensure code quality and prevent accidental or unauthorized changes. This lesson will teach you how to set up branch protection rules and understand why they're essential.

## Setting Up Branch Protection

**You are responsible for configuring main branch protection with approval requirements.**

### Step 1: Navigate to Project Settings

1. In your GitLab project, click on **Settings** in the left sidebar
2. Click on **Repository** from the settings menu
3. Scroll down to find the **Branch Rules** section and expand it

### Step 2: Configure Branch Rules

1. Find the `main` branch and click on the **View details** button
2. In **Allowed to push and merge**, set "No one"

**✅ You're done!** The main branch is now protected.


## Testing Branch Protection (All Team Members)

Once you have completed the setup, **everyone** should test that the protection is working:

### Step 1: Try to Push Directly to Main

1. Switch to the main branch:
```bash
git checkout main
git pull
```

2. Make a small change (like deleting the README.md):
```bash
rm README.md
```

3. Commit and try to push:
```bash
git add README.md
git commit -m "Test: removing README.md"
git push
```

**Expected Result**: You should see an error message like:
```
remote: GitLab: You are not allowed to push code to protected branches on this project
```

4. **Important**: Undo the last commit you did on your local main branch:
```bash
git reset --hard HEAD~1
```


## Your first release: merging `dev` into `main` 

As **Team Member B**, you can now open a merge request to merge `dev` into `main`, which needs two approvals to be merged.

**Team Members C and D** will later approve this pull request and merge it into the `main` branch.

### Step 1: Ensure Dev Branch is Ready

1. Switch to dev branch and pull latest changes:
   ```bash
   git checkout dev
   git pull
   ```

2. Verify all the project files are present:
   ```bash
   ls -la
   ```
   You should see: `hangman.py`, `test_hangman.py`, `words.txt`, `.gitignore`

### Step 2: Create Merge Request

1. Go to your GitLab project web interface
2. Click **Merge requests** in the left sidebar
3. Click **New merge request**
4. Configure the merge request:
   - **Source branch**: `dev`
   - **Target branch**: `main`
   - **Title**: `First working version`
   - **Description**: write a small description to explain what the proposed changes contain.
5. **Important**: Do NOT check "Delete source branch when merge request is accepted"
6. Click **Create merge request**

**✅ You're done!** The merge request is created and waiting for approvals.
<!-- /ROLE: B -->

<!-- ROLE: A,E,F,D -->

In a real-world development environment, the `main` branch should be protected to ensure code quality and prevent accidental or unauthorized changes. This lesson will teach you how to set up branch protection rules and understand why they're essential.

## Setting Up Branch Protection

[!WAIT]
Wait until **Team Member B** finishes configuring the main branch protection rules. This includes:

1. **Branch protection**: Preventing direct pushes to main
2. **Approval requirements**: Requiring 2 team member approvals for merges
3. **Security rules**: Preventing secrets from being committed
[/!WAIT]


## Testing Branch Protection (All Team Members)

Once Team Member B has completed the setup, **everyone** should test that the protection is working:

### Step 1: Try to Push Directly to Main

1. Switch to the main branch:
```bash
git checkout main
git pull
```

2. Make a small change (like deleting the README.md):
```bash
rm README.md
```

3. Commit and try to push:
```bash
git add README.md
git commit -m "Test: removing README.md"
git push
```

**Expected Result**: You should see an error message like:
```
remote: GitLab: You are not allowed to push code to protected branches on this project
```

4. **Important**: Undo the last commit you did on your local main branch:
```bash
git reset --hard HEAD~1
```

## Your first release: merging `dev` into `main` 

**Team Member B** will now open a merge request to merge `dev` into `main`, which needs two approvals to be merged.

**Team Members C and D** will approve this pull request and merge it into the `main` branch.

<!-- /ROLE: A,E,F,D -->


<!-- ROLE: C -->

In a real-world development environment, the `main` branch should be protected to ensure code quality and prevent accidental or unauthorized changes. This lesson will teach you how to set up branch protection rules and understand why they're essential.

## Setting Up Branch Protection

[!WAIT]
Wait until **Team Member B** finishes configuring the main branch protection rules. This includes:

1. **Branch protection**: Preventing direct pushes to main
2. **Approval requirements**: Requiring 2 team member approvals for merges
3. **Security rules**: Preventing secrets from being committed
[/!WAIT]



## Testing Branch Protection (All Team Members)

Once Team Member B has completed the setup, **everyone** should test that the protection is working:

### Step 1: Try to Push Directly to Main

1. Switch to the main branch:
```bash
git checkout main
git pull
```

2. Make a small change (like deleting the README.md):
```bash
rm README.md
```

3. Commit and try to push:
```bash
git add README.md
git commit -m "Test: removing README.md"
git push
```

**Expected Result**: You should see an error message like:
```
remote: GitLab: You are not allowed to push code to protected branches on this project
```

4. **Important**: Undo the last commit you did on your local main branch:
```bash
git reset --hard HEAD~1
```

## Your first release: merging `dev` into `main` 

[!WAIT]
Wait until **Team Member B** has opened a merge request to merge `dev` into `main`, which you will then review and approve before merging.
[/!WAIT]

You will then need to approve it before merging it into the `main` branch.


### Step 1: Review the Merge Request

1. Go to **Merge requests** in your GitLab project
2. Click on the merge request created by Team Member B
3. Review the **Overview** tab to read the description
4. Click on the **Changes** tab to see the file differences
5. Examine the files that were added

### Step 2: Approve the Merge Request

1. If everything looks good, scroll down to the bottom of the merge request
2. Click the **Approve** button
3. Optionally, you could add comments requesting changes.

### Step 3 (after two approvals): Merge the Request into `main`
1. After approving, you should see the **Merge** button becomes available
2. **Important**: Make sure "Delete source branch" is **unchecked**
3. Click **Merge** to complete the process
<!-- /ROLE: C -->

