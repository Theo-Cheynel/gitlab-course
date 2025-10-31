<!-- ROLE: A -->
## Creating the MR

**You are responsible for creating the MR to deploy from `dev` to `main`.**
[!WAIT]
Wait for **Team Member B** to review, approve and merge the MR.
[/!WAIT]

## Tagging the release

In order to identify this version of `main` as our first complete version of the "hangman" project, we will **tag** it. This is like attaching a tag to the commit.

We will create a tag `v1.0.0`, which will stay attached to the merge commit on `main`. 
This way, it will be easy to identify the version, and `git checkout v1.0.0` will instantly bring us to this version (useful for showcasing your progression to a teacher, for instance.)


[!WAIT]
Wait for **Team Member C** to create the tag.
[/!WAIT]

## Using the tag

If you're working on a branch (and have un-staged changes), you can easily switch to a tag to showcase a running version of your work:
```bash
git stash  # Save current work in a "stash" stack
git checkout v1.0.0  # Switch to stable version
python hangman.py  # Show teacher the working game
git checkout -  # Return to the previous branch
git stash apply  # Restore your work from the latest "stash"
```

<!-- /ROLE: A -->

<!-- ROLE: B -->
## Creating the MR

[!WAIT]
Wait for **Team Member A** to create the deployment merge request.
[/!WAIT]

**You are responsible for reviewing, approving and merging the MR from `dev` to `main`.**

## Tagging the release

In order to identify this version of `main` as our first complete version of the "hangman" project, we will **tag** it. This is like attaching a tag to the commit.

We will create a tag `v1.0.0`, which will stay attached to the merge commit on `main`. 
This way, it will be easy to identify the version, and `git checkout v1.0.0` will instantly bring us to this version (useful for showcasing your progression to a teacher, for instance.)


[!WAIT]
Wait for **Team Member C** to create the tag.
[/!WAIT]

## Using the tag

If you're working on a branch (and have un-staged changes), you can easily switch to a tag to showcase a running version of your work:
```bash
git stash  # Save current work in a "stash" stack
git checkout v1.0.0  # Switch to stable version
python hangman.py  # Show teacher the working game
git checkout -  # Return to the previous branch
git stash apply  # Restore your work from the latest "stash"
```



<!-- /ROLE: B -->


<!-- ROLE: C -->
## Creating the MR

[!WAIT]
Wait for **Team Member A** to create the deployment merge request, and for **Team Member B** to review, approve and merge it.
[/!WAIT]

## Tagging the release

In order to identify this version of `main` as our first complete version of the "hangman" project, we will **tag** it. This is like attaching a tag to the commit.

We will create a tag `v1.0.0`, which will stay attached to the merge commit on `main`. 
This way, it will be easy to identify the version, and `git checkout v1.0.0` will instantly bring us to this version (useful for showcasing your progression to a teacher, for instance.)


**You are responsible for creating the tags.**

### What to do
1. **In your browser, open the home page of your GitLab repository**
2. **Make sure you are looking at the `main` branch**
3. **Click on the `+` button, then on "New tag"**
4. **Fill in the details**:
   - **Tag name**: `v1.0.0`
   - **Create from**: `main` (branch)
   - **Message**: `Release version 1.0: Complete hangman game (difficulty switch, clues, today's word, and pretty display)`
5. **Click "Create tag"**


## Using the tag

If you're working on a branch (and have un-staged changes), you can easily switch to a tag to showcase a running version of your work:
```bash
git stash  # Save current work in a "stash" stack
git checkout v1.0.0  # Switch to stable version
python hangman.py  # Show teacher the working game
git checkout -  # Return to the previous branch
git stash apply  # Restore your work from the latest "stash"
```

<!-- /ROLE: C -->

<!-- ROLE: D,E,F -->
## Creating the MR

[!WAIT]
Wait for **Team Member A** to create the deployment merge request, and for **Team Member B** to review, approve and merge it.
[/!WAIT]

## Tagging the release

In order to identify this version of `main` as our first complete version of the "hangman" project, we will **tag** it. This is like attaching a tag to the commit.

We will create a tag `v1.0.0`, which will stay attached to the merge commit on `main`. 
This way, it will be easy to identify the version, and `git checkout v1.0.0` will instantly bring us to this version (useful for showcasing your progression to a teacher, for instance.)


[!WAIT]
Wait for **Team Member C** to create the tag.
[/!WAIT]

## Using the tag

If you're working on a branch (and have un-staged changes), you can easily switch to a tag to showcase a running version of your work:
```bash
git stash  # Save current work in a "stash" stack
git checkout v1.0.0  # Switch to stable version
python hangman.py  # Show teacher the working game
git checkout -  # Return to the previous branch
git stash apply  # Restore your work from the latest "stash"
```

<!-- /ROLE: D,E,F -->
