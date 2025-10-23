# Branch Protection and Deployment

## Understanding Branch Protection

In a real-world development environment, the `main` branch should be protected to ensure code quality and prevent accidental or unauthorized changes. This lesson will teach you how to set up branch protection rules and understand why they're essential.

<!-- ROLE: B -->
## Team Member B: Set Up Branch Protection

**You are responsible for configuring main branch protection with approval requirements.**

### Step 1: Navigate to Project Settings

1. In your GitLab project, click on **Settings** in the left sidebar
2. Click on **Repository** from the settings menu
3. Scroll down to find the **Push Rules** section and expand it

### Step 2: Configure Push Rules

1. Look for the **Branch protection** or **Push Rules** section
2. Find the option for **Restrict pushes to main branch**
3. Enable the following settings:
   - ☑️ **Prevent committing secrets to Git**
   - ☑️ **GitLab will reject any files that are likely to contain secrets**

### Step 3: Set Up Merge Request Approvals

1. Go to **Settings** → **Merge requests**
2. In the **Merge request approvals** section, configure:
   - **Required approvals**: Set to `2`
   - ☑️ **Prevent approval by merge request author**
   - ☑️ **Prevent approval by merge request committer**
   - ☑️ **Remove all approvals when commits are added to the source branch**

### Step 4: Configure Branch Protection Rules

1. Go to **Settings** → **Repository** 
2. Expand **Protected branches**
3. Select `main` from the branch dropdown
4. Set the protection level:
   - **Allowed to merge**: `Developers + Maintainers`
   - **Allowed to push**: `No one`
   - ☑️ **Code owner approval required**

5. Click **Protect** to save the settings

**✅ You're done!** The main branch is now protected and requires 2 approvals for any merge requests.
<!-- /ROLE: B -->

<!-- ROLE: A,C,D,E,F -->
## Team Member B is Setting Up Protection

**Team Member B** is currently configuring the main branch protection rules. This includes:

1. **Branch protection**: Preventing direct pushes to main
2. **Approval requirements**: Requiring 2 team member approvals for merges
3. **Security rules**: Preventing secrets from being committed

**Wait for Team Member B to complete the setup before proceeding.**
<!-- /ROLE: A,C,D,E,F -->

## Testing Branch Protection (All Team Members)

Once Team Member B has completed the setup, **everyone** should test that the protection is working:

### Step 1: Try to Push Directly to Main

1. Switch to the main branch:
   ```bash
   git checkout main
   git pull
   ```

2. Make a small change (like deleting a line from README.md):
   ```bash
   echo "# Testing protection" >> README.md
   ```

3. Commit and try to push:
   ```bash
   git add README.md
   git commit -m "Test: trying to push to main"
   git push
   ```

**Expected Result**: You should see an error message like:
```
remote: GitLab: You are not allowed to push code to protected branch main
```

4. **Important**: Undo your test change:
   ```bash
   git reset --hard HEAD~1
   ```

<!-- ROLE: C -->
## Team Member C: Create Dev to Main Merge Request

**You are responsible for creating the first merge request from dev to main.**

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
   - **Title**: `Initial project setup: Add hangman game template`
   - **Description**: 
     ```
     This MR adds the initial project structure for our hangman game:
     
     - `hangman.py`: Template with empty functions for team implementation
     - `test_hangman.py`: Unit tests for all game functions
     - `words.txt`: Word list for the hangman game
     - `.gitignore`: Git ignore rules for Python projects
     
     This sets up the foundation for collaborative development.
     ```

5. **Important**: Do NOT check "Delete source branch when merge request is accepted"
6. Click **Create merge request**

**✅ You're done!** The merge request is created and waiting for approvals.
<!-- /ROLE: C -->

<!-- ROLE: A,B,D,E,F -->
## Team Member C is Creating Merge Request

**Team Member C** is creating a merge request to merge the dev branch into main. This will be our first experience with the approval process.

**Wait for Team Member C to create the merge request.**
<!-- /ROLE: A,B,D,E,F -->

<!-- ROLE: D -->
## Team Member D: First Approval

**You will provide the first approval for Team Member C's merge request.**

### Step 1: Review the Merge Request

1. Go to **Merge requests** in your GitLab project
2. Click on the merge request created by Team Member C
3. Review the **Overview** tab to understand what changes are being made
4. Click on the **Changes** tab to see the file differences
5. Examine each file that was added:
   - Check that `hangman.py` contains the expected function templates
   - Verify `test_hangman.py` has comprehensive test cases
   - Confirm `words.txt` contains a good word list
   - Check `.gitignore` has appropriate Python exclusions

### Step 2: Approve the Merge Request

1. If everything looks good, scroll down to the bottom of the merge request
2. Click the **Approve** button
3. Optionally, add a comment like: "LGTM! Project structure looks good to go."

**✅ You're done!** One approval down, one more needed.
<!-- /ROLE: D -->

<!-- ROLE: A,B,C,E,F -->
## Team Member D is Reviewing

**Team Member D** is currently reviewing and approving Team Member C's merge request.

**Wait for Team Member D to complete the first approval.**
<!-- /ROLE: A,B,C,E,F -->

<!-- ROLE: E -->
## Team Member E: Second Approval and Merge

**You will provide the second approval and complete the merge.**

### Step 1: Review and Approve

1. Go to **Merge requests** in your GitLab project
2. Click on Team Member C's merge request
3. Review the changes in the **Changes** tab
4. Click **Approve**

### Step 2: Complete the Merge

1. After approving, you should see the **Merge** button becomes available
2. **Important**: Make sure "Delete source branch" is **unchecked**
3. Click **Merge** to complete the process

### Step 3: Verify the Merge

1. Go to the **Repository** → **Files** section
2. Confirm you're viewing the `main` branch
3. Verify all the new files are now in main:
   - `hangman.py`
   - `test_hangman.py` 
   - `words.txt`
   - `.gitignore`

**✅ You're done!** The dev branch has been successfully merged into main with proper approvals.
<!-- /ROLE: E -->

<!-- ROLE: A,B,C,D,F -->
## Team Member E is Completing the Merge

**Team Member E** is providing the second approval and completing the merge from dev to main.

**Wait for Team Member E to complete the merge process.**
<!-- /ROLE: A,B,C,D,F -->

## All Team Members: Sync with Main

Once the merge is complete, **everyone** should update their local main branch:

```bash
git checkout main
git pull
```

You should now see all the hangman project files in your main branch!

## What We Learned

1. **Branch Protection**: Main branch is protected from direct pushes
2. **Approval Process**: Changes require review and approval from team members
3. **Merge Requests**: Formal process for integrating changes
4. **Code Quality**: Protection rules help maintain code quality and security

**Next**: We'll learn about implementing individual features and handling merge requests for each team member's contributions.