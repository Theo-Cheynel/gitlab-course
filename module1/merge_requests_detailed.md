<!-- ROLE: A -->
Now that you have implemented your changes on your branch, you want those changes to also apply to the `main` branch. However, your changes need to go through a **review process**: another team member will review your changes, discuss improvements, and give their approval. This review process takes the form of a **merge request** (MR).
## What to do

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes (`pick_random_word`)
   
2. **Target branch**: Select where you want to merge to (`dev`)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

1. **Title**: Write a clear, descriptive title, something like "Implement pick_random_word function for hangman game"

2. **Description**: Include important details that a reviewer should read before reading your code (summary of what was changed and why, etc). In our case, the changes are small, but in your next projects, Merge Requests might contain more complex code.

3. **Assignee**: You can assign yourself to the MR (meaning if someone requests changes, you're the one to implement those changes).

4. **Reviewer**: Select Team Member F to review your code

### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications (green lines = additions, red lines = deletions)
   - Check that the changes look correct, and that they are all relevant to this MR 

3. **Set merge options**:
   - **Delete source branch when merge request is accepted** (for branches implementing one feature, you won't need the branch again once it is merged into `dev`)
   - **Squash commits when merge request is accepted** (optional, keeps history clean if you did several commits on your branch)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## Reviewing your first MR

[!WAIT]
Wait until **Team Member B** has created their Merge Request.
[/!WAIT]

You can then review the MR of **Team Member B** (`format_hidden_word` -> `dev`):
1. **Overview**: You can read their description to get an idea of what the MR contains, in the "Overview" tab
2. **Changes**: You can review the proposed changes to their code in the "Changes" tab (see below)
3. **Discussion**: You can add comments and discussion, request changes, etc
4. **Approval**: You must give your approval by clicking the "Approve" button in the "Overview" tab
5. **Merge**: Once approved, the MR can be merged by clicking the "Merge" button

![Changes of the format_hidden_word merge request](/gitlab-course/assets/images/mr_format_hidden_word.png)

## Wait -- no conflicts?
You'll see that all six merge requests can be merged without any conflicts.

This is because by splitting the code into independent chunks, and having one MR for each chunk, no two people were editing the same part of the file!

Conflicts **only** happen when several people edit the same part of the same file -- which, most of the time, can be prevented by properly planning the development phase.

Below is an illustration of the git tree before and after merging all branches (which you can see in **Code** > **Repository Graph**):

![Illustration of the git tree before the merge operations](/gitlab-course/assets/images/git_graph_after_parallel.png)
![Illustration of the git tree after the merge operations](/gitlab-course/assets/images/git_graph_after_parallel_merge.png)

Every time we merged a branch into `dev`, it created a new **merge commit** on dev with the changes from our branch. We can see that the `main` branch is outdated, as its last commit is the one where **Team Member F** wrote their name in the README.md

<!-- /ROLE: A -->




<!-- ROLE: B -->
Now that you have implemented your changes on your branch, you want those changes to also apply to the `main` branch. However, your changes need to go through a **review process**: another team member will review your changes, discuss improvements, and give their approval. This review process takes the form of a **merge request** (MR).
## What to do

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes (`format_hidden_word`)
   
2. **Target branch**: Select where you want to merge to (`dev`)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

1. **Title**: Write a clear, descriptive title, something like "Implement format_hidden_word function for hangman game"

2. **Description**: Include important details that a reviewer should read before reading your code (summary of what was changed and why, etc). In our case, the changes are small, but in your next projects, Merge Requests might contain more complex code.

3. **Assignee**: You can assign yourself to the MR (meaning if someone requests changes, you're the one to implement those changes).

4. **Reviewer**: Select Team Member A to review your code

### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications (green lines = additions, red lines = deletions)
   - Check that the changes look correct, and that they are all relevant to this MR 

3. **Set merge options**:
   - **Delete source branch when merge request is accepted** (for branches implementing one feature, you won't need the branch again once it is merged into `dev`)
   - **Squash commits when merge request is accepted** (optional, keeps history clean if you did several commits on your branch)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## Reviewing your first MR

[!WAIT]
Wait until **Team Member C** has created their Merge Request.
[/!WAIT]

You can then review the MR of **Team Member C** (`all_letters_guessed` -> `dev`):
1. **Overview**: You can read their description to get an idea of what the MR contains, in the "Overview" tab
2. **Changes**: You can review the proposed changes to their code in the "Changes" tab (see below)
3. **Discussion**: You can add comments and discussion, request changes, etc
4. **Approval**: You must give your approval by clicking the "Approve" button in the "Overview" tab
5. **Merge**: Once approved, the MR can be merged by clicking the "Merge" button

![Changes of the all_letters_guessed merge request](/gitlab-course/assets/images/mr_all_letters_guessed.png)

## Wait -- no conflicts?
You'll see that all six merge requests can be merged without any conflicts.

This is because by splitting the code into independent chunks, and having one MR for each chunk, no two people were editing the same part of the file!

Conflicts **only** happen when several people edit the same part of the same file -- which, most of the time, can be prevented by properly planning the development phase.

Below is an illustration of the git tree before and after merging all branches (which you can see in **Code** > **Repository Graph**):

![Illustration of the git tree before the merge operations](/gitlab-course/assets/images/git_graph_after_parallel.png)
![Illustration of the git tree after the merge operations](/gitlab-course/assets/images/git_graph_after_parallel_merge.png)

Every time we merged a branch into `dev`, it created a new **merge commit** on dev with the changes from our branch. We can see that the `main` branch is outdated, as its last commit is the one where **Team Member F** wrote their name in the README.md

<!-- /ROLE: B -->




<!-- ROLE: C -->
Now that you have implemented your changes on your branch, you want those changes to also apply to the `main` branch. However, your changes need to go through a **review process**: another team member will review your changes, discuss improvements, and give their approval. This review process takes the form of a **merge request** (MR).
## What to do

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes (`all_letters_guessed`)
   
2. **Target branch**: Select where you want to merge to (`dev`)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

1. **Title**: Write a clear, descriptive title, something like "Implement all_letters_guessed function for hangman game"

2. **Description**: Include important details that a reviewer should read before reading your code (summary of what was changed and why, etc). In our case, the changes are small, but in your next projects, Merge Requests might contain more complex code.

3. **Assignee**: You can assign yourself to the MR (meaning if someone requests changes, you're the one to implement those changes).

4. **Reviewer**: Select Team Member B to review your code

### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications (green lines = additions, red lines = deletions)
   - Check that the changes look correct, and that they are all relevant to this MR 

3. **Set merge options**:
   - **Delete source branch when merge request is accepted** (for branches implementing one feature, you won't need the branch again once it is merged into `dev`)
   - **Squash commits when merge request is accepted** (optional, keeps history clean if you did several commits on your branch)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## Reviewing your first MR

[!WAIT]
Wait until **Team Member D** has created their Merge Request.
[/!WAIT]

You can then review the MR of **Team Member D** (`ask_for_valid_input` -> `dev`):
1. **Overview**: You can read their description to get an idea of what the MR contains, in the "Overview" tab
2. **Changes**: You can review the proposed changes to their code in the "Changes" tab (see below)
3. **Discussion**: You can add comments and discussion, request changes, etc
4. **Approval**: You must give your approval by clicking the "Approve" button in the "Overview" tab
5. **Merge**: Once approved, the MR can be merged by clicking the "Merge" button

![Changes of the ask_for_valid_input merge request](/gitlab-course/assets/images/mr_ask_for_valid_input.png)

## Wait -- no conflicts?
You'll see that all six merge requests can be merged without any conflicts.

This is because by splitting the code into independent chunks, and having one MR for each chunk, no two people were editing the same part of the file!

Conflicts **only** happen when several people edit the same part of the same file -- which, most of the time, can be prevented by properly planning the development phase.

Below is an illustration of the git tree before and after merging all branches (which you can see in **Code** > **Repository Graph**):

![Illustration of the git tree before the merge operations](/gitlab-course/assets/images/git_graph_after_parallel.png)
![Illustration of the git tree after the merge operations](/gitlab-course/assets/images/git_graph_after_parallel_merge.png)

Every time we merged a branch into `dev`, it created a new **merge commit** on dev with the changes from our branch. We can see that the `main` branch is outdated, as its last commit is the one where **Team Member F** wrote their name in the README.md

<!-- /ROLE: C -->




<!-- ROLE: D -->
Now that you have implemented your changes on your branch, you want those changes to also apply to the `main` branch. However, your changes need to go through a **review process**: another team member will review your changes, discuss improvements, and give their approval. This review process takes the form of a **merge request** (MR).
## What to do

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes (`ask_for_valid_input`)
   
2. **Target branch**: Select where you want to merge to (`dev`)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

1. **Title**: Write a clear, descriptive title, something like "Implement ask_for_valid_input function for hangman game"

2. **Description**: Include important details that a reviewer should read before reading your code (summary of what was changed and why, etc). In our case, the changes are small, but in your next projects, Merge Requests might contain more complex code.

3. **Assignee**: You can assign yourself to the MR (meaning if someone requests changes, you're the one to implement those changes).

4. **Reviewer**: Select Team Member C to review your code

### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications (green lines = additions, red lines = deletions)
   - Check that the changes look correct, and that they are all relevant to this MR 

3. **Set merge options**:
   - **Delete source branch when merge request is accepted** (for branches implementing one feature, you won't need the branch again once it is merged into `dev`)
   - **Squash commits when merge request is accepted** (optional, keeps history clean if you did several commits on your branch)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## Reviewing your first MR

[!WAIT]
Wait until **Team Member E** has created their Merge Request.
[/!WAIT]

You can then review the MR of **Team Member E** (`update_game` -> `dev`):
1. **Overview**: You can read their description to get an idea of what the MR contains, in the "Overview" tab
2. **Changes**: You can review the proposed changes to their code in the "Changes" tab (see below)
3. **Discussion**: You can add comments and discussion, request changes, etc
4. **Approval**: You must give your approval by clicking the "Approve" button in the "Overview" tab
5. **Merge**: Once approved, the MR can be merged by clicking the "Merge" button

![Changes of the update_game merge request](/gitlab-course/assets/images/mr_update_game.png)

## Wait -- no conflicts?
You'll see that all six merge requests can be merged without any conflicts.

This is because by splitting the code into independent chunks, and having one MR for each chunk, no two people were editing the same part of the file!

Conflicts **only** happen when several people edit the same part of the same file -- which, most of the time, can be prevented by properly planning the development phase.

Below is an illustration of the git tree before and after merging all branches (which you can see in **Code** > **Repository Graph**):

![Illustration of the git tree before the merge operations](/gitlab-course/assets/images/git_graph_after_parallel.png)
![Illustration of the git tree after the merge operations](/gitlab-course/assets/images/git_graph_after_parallel_merge.png)

Every time we merged a branch into `dev`, it created a new **merge commit** on dev with the changes from our branch. We can see that the `main` branch is outdated, as its last commit is the one where **Team Member F** wrote their name in the README.md

<!-- /ROLE: D -->




<!-- ROLE: E -->
Now that you have implemented your changes on your branch, you want those changes to also apply to the `main` branch. However, your changes need to go through a **review process**: another team member will review your changes, discuss improvements, and give their approval. This review process takes the form of a **merge request** (MR).
## What to do

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes (`update_game`)
   
2. **Target branch**: Select where you want to merge to (`dev`)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

1. **Title**: Write a clear, descriptive title, something like "Implement update_game function for hangman game"

2. **Description**: Include important details that a reviewer should read before reading your code (summary of what was changed and why, etc). In our case, the changes are small, but in your next projects, Merge Requests might contain more complex code.

3. **Assignee**: You can assign yourself to the MR (meaning if someone requests changes, you're the one to implement those changes).

4. **Reviewer**: Select Team Member D to review your code


### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications (green lines = additions, red lines = deletions)
   - Check that the changes look correct, and that they are all relevant to this MR 

3. **Set merge options**:
   - **Delete source branch when merge request is accepted** (for branches implementing one feature, you won't need the branch again once it is merged into `dev`)
   - **Squash commits when merge request is accepted** (optional, keeps history clean if you did several commits on your branch)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## Reviewing your first MR

[!WAIT]
Wait until **Team Member F** has created their Merge Request.
[/!WAIT]

You can then review the MR of **Team Member F** (`game` -> `dev`):
1. **Overview**: You can read their description to get an idea of what the MR contains, in the "Overview" tab
2. **Changes**: You can review the proposed changes to their code in the "Changes" tab (see below)
3. **Discussion**: You can add comments and discussion, request changes, etc
4. **Approval**: You must give your approval by clicking the "Approve" button in the "Overview" tab
5. **Merge**: Once approved, the MR can be merged by clicking the "Merge" button

![Changes of the game merge request](/gitlab-course/assets/images/mr_game.png)

## Wait -- no conflicts?
You'll see that all six merge requests can be merged without any conflicts.

This is because by splitting the code into independent chunks, and having one MR for each chunk, no two people were editing the same part of the file!

Conflicts **only** happen when several people edit the same part of the same file -- which, most of the time, can be prevented by properly planning the development phase.

Below is an illustration of the git tree before and after merging all branches (which you can see in **Code** > **Repository Graph**):

![Illustration of the git tree before the merge operations](/gitlab-course/assets/images/git_graph_after_parallel.png)
![Illustration of the git tree after the merge operations](/gitlab-course/assets/images/git_graph_after_parallel_merge.png)

Every time we merged a branch into `dev`, it created a new **merge commit** on dev with the changes from our branch. We can see that the `main` branch is outdated, as its last commit is the one where **Team Member F** wrote their name in the README.md

<!-- /ROLE: E -->




<!-- ROLE: F -->
Now that you have implemented your changes on your branch, you want those changes to also apply to the `main` branch. However, your changes need to go through a **review process**: another team member will review your changes, discuss improvements, and give their approval. This review process takes the form of a **merge request** (MR).
## What to do

### Step 1: Navigate to Merge Requests

1. In your GitLab project, click **Merge requests** in the left sidebar
2. Click the **New merge request** button

### Step 2: Select Source and Target Branches

**Choose your branches carefully:**

1. **Source branch**: Select the branch containing your changes (`game`)
   
2. **Target branch**: Select where you want to merge to (`dev`)

3. Click **Compare branches and continue**

### Step 3: Fill Out Merge Request Details

1. **Title**: Write a clear, descriptive title, something like "Implement game function for hangman game"

2. **Description**: Include important details that a reviewer should read before reading your code (summary of what was changed and why, etc). In our case, the changes are small, but in your next projects, Merge Requests might contain more complex code.

3. **Assignee**: You can assign yourself to the MR (meaning if someone requests changes, you're the one to implement those changes).

4. **Reviewer**: Select Team Member E to review your code

### Step 4: Review Before Creating

Before clicking "Create merge request":

1. **Check the file changes**:
   - Click on **Changes** tab to see your modifications (green lines = additions, red lines = deletions)
   - Check that the changes look correct, and that they are all relevant to this MR 

3. **Set merge options**:
   - **Delete source branch when merge request is accepted** (for branches implementing one feature, you won't need the branch again once it is merged into `dev`)
   - **Squash commits when merge request is accepted** (optional, keeps history clean if you did several commits on your branch)

### Step 5: Create the Merge Request

Click **Create merge request** to submit it for review.

## Reviewing your first MR

[!WAIT]
Wait until **Team Member A** has created their Merge Request.
[/!WAIT]

You can then review the MR of **Team Member A** (`pick_random_word` -> `dev`):
1. **Overview**: You can read their description to get an idea of what the MR contains, in the "Overview" tab
2. **Changes**: You can review the proposed changes to their code in the "Changes" tab (see below)
3. **Discussion**: You can add comments and discussion, request changes, etc
4. **Approval**: You must give your approval by clicking the "Approve" button in the "Overview" tab
5. **Merge**: Once approved, the MR can be merged by clicking the "Merge" button

## Wait -- no conflicts?
You'll see that all six merge requests can be merged without any conflicts.

This is because by splitting the code into independent chunks, and having one MR for each chunk, no two people were editing the same part of the file!

Conflicts **only** happen when several people edit the same part of the same file -- which, most of the time, can be prevented by properly planning the development phase.

Below is an illustration of the git tree before and after merging all branches (which you can see in **Code** > **Repository Graph**):

![Illustration of the git tree before the merge operations](/gitlab-course/assets/images/git_graph_after_parallel.png)
![Illustration of the git tree after the merge operations](/gitlab-course/assets/images/git_graph_after_parallel_merge.png)

Every time we merged a branch into `dev`, it created a new **merge commit** on dev with the changes from our branch. We can see that the `main` branch is outdated, as its last commit is the one where **Team Member F** wrote their name in the README.md

<!-- /ROLE: F -->