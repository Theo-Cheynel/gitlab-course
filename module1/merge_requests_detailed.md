# Creating Merge Requests

A merge request (MR) is a formal way to propose changes to a project. It allows team members to review code, discuss improvements, and ensure quality before changes are integrated into the main codebase.

## Understanding Merge Requests

### What is a Merge Request?

A merge request is a request to merge changes from one branch into another. It includes:
- **Source branch**: Where your changes are
- **Target branch**: Where you want to merge your changes
- **Description**: What changes you made and why
- **Review process**: Others can examine and approve your changes

### When to Create a Merge Request

Create a merge request when you:
- ✅ Have completed implementing a feature or fixing a bug
- ✅ Want others to review your code before it's merged
- ✅ Need to merge from a feature branch to dev or from dev to main
- ✅ Have tested your changes and they work correctly

## Step-by-Step: Creating a Merge Request

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes
   - Example: `feature/implement-random-word` (your feature branch)
   
2. **Target branch**: Select where you want to merge
   - For feature work: Usually `dev`
   - For releases: Usually `main` (requires special permissions)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

#### Title
Write a clear, descriptive title:
- ✅ Good: "Implement pick_random_word function for hangman game"
- ❌ Bad: "Update file"
- ✅ Good: "Fix format_hidden_word to handle empty letters correctly"
- ❌ Bad: "Bug fix"

#### Description
Include important details:

```markdown
## Summary
Implements the `pick_random_word()` function in hangman.py that:
- Reads words from words.txt file
- Returns a random word for the game
- Handles file errors gracefully

## Changes Made
- Added file reading logic in `pick_random_word()`
- Added error handling for missing words.txt
- All existing tests now pass

## Testing
- Ran `pytest test_hangman.py::test_pick_random_word`
- Manually tested with different words.txt files
- Verified function returns words within expected length range

## Screenshots/Evidence
(Include screenshots of test results if helpful)
```

#### Assignee
- Usually assign to yourself initially
- Can be reassigned during review process

#### Reviewer
- Select 1-2 team members who should review your code
- Choose people familiar with the area you're changing

### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications
   - Ensure only intended files are modified
   - Look for any debugging code you forgot to remove

2. **Verify the diff**:
   - Green lines = additions
   - Red lines = deletions
   - Make sure changes look correct

3. **Set merge options**:
   - ☑️ **Delete source branch when merge request is accepted** (for feature branches)
   - ☑️ **Squash commits when merge request is accepted** (optional, keeps history clean)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## After Creating Your Merge Request

### What Happens Next

1. **Notification**: Reviewers receive notifications about your MR
2. **Review Process**: Team members examine your code
3. **Discussion**: Comments and suggestions may be added
4. **Approval**: Required approvals must be obtained
5. **Merge**: Once approved, the MR can be merged

### Your Responsibilities

While your MR is under review:

1. **Respond to comments**: Address feedback promptly
2. **Make requested changes**: Push additional commits if needed
3. **Test thoroughly**: Ensure your code works as expected
4. **Be available**: Answer questions from reviewers

## Merge Request Statuses

Understanding MR status indicators:

- 🟡 **Draft**: Work in progress, not ready for review
- 🟢 **Open**: Ready for review and approval
- 🔴 **Blocked**: Cannot be merged (conflicts, failed tests, missing approvals)
- ✅ **Merged**: Successfully integrated
- ❌ **Closed**: Rejected or cancelled

## Best Practices

### Writing Good Descriptions
```markdown
## Problem
Describe what issue you're solving

## Solution  
Explain your approach

## Testing
How you verified it works

## Notes
Any special considerations
```

### Commit Messages in MRs
Keep commits focused and well-described:
- ✅ "Add error handling for missing words.txt file"
- ❌ "fix stuff"

### Size Matters
- **Small MRs**: Easier to review, faster to merge
- **Large MRs**: Hard to review, more likely to have issues
- **Rule of thumb**: Under 400 lines of changes when possible

## Common Issues and Solutions

### "Cannot merge due to conflicts"
**Problem**: Your branch conflicts with the target branch
**Solution**: 
```bash
git checkout your-feature-branch
git pull origin dev
# Resolve conflicts in your editor
git add .
git commit -m "Resolve merge conflicts"
git push
```

### "Pipeline failed"
**Problem**: Tests or checks are failing
**Solution**: Check the pipeline logs, fix issues, and push corrections

### "Missing required approvals"
**Problem**: Not enough team members have approved
**Solution**: Ask team members to review, address their feedback

## Next Steps

Once you understand how to create merge requests, you'll learn:
- How to review other people's merge requests
- How to provide constructive feedback
- How to handle merge conflicts
- How to use merge requests for code quality

**Remember**: Merge requests are about collaboration and quality, not just moving code around!