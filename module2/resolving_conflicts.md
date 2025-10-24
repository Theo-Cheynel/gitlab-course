<!-- ROLE: A -->
Now that everyone has created their merge requests, we will try merging them.
However, your commits and those of **Team Members B and C** modified the same functions.
As a consequence, once you merge one of these Merge Requests, it will block the two others.

## What to do

### Merging the first MR
[!WAIT]
Wait until **Team Member B** merges your merge request.
[/!WAIT]

You're the lucky one -- your merge request gets merged first, so you do not have any conflicts to solve yourself. 

### Merging the second MR
Follow along with **Team Member B** the impact that this merge has on their merge request.

### Merging the third MR 
Then, follow along with **Team Member C** as they fix the conflicts with their branch.


Once all three MR are merged, you should see the following git tree:

![Conflict markers](/gitlab-course/assets/images/git_tree_abc.png)

History was rewritten to make it look like each MR was created after the previous one was merged -- even though **Project Member B** didn't **actually** have to wait for **Project Member A**'s `difficulty-level` feature to start working on `hints-system`, and **Project Member C** didn't **actually** have to wait for **Project Member B**'s `hints-system` feature to start working on `daily-word`.

## What we learned

1. When two people modify the same parts of the same file, it causes conflicts, which prevents merging both branch to the same destination (`dev`)
2. To solve the conflicts, we have to perform a `git rebase` to modify the base of our branch, before being able to merge
3. When conflicts cannot be prevented by prior planning, each member should work on their own branch, which allows for parallel work even when changes collide

### Why didn't we use GitLab's conflict resolution ?

GitLab has a built-in web editor to fix conflicts. However, GitLab's behaviour is not a `git rebase` -- istead, it's a `git merge`. The difference is illustrated below:

![Conflict markers](/gitlab-course/assets/images/git_merge.png)

This will lead to a more convoluted git tree, and is usually not recommended.

<!-- /ROLE: A -->















<!-- ROLE: B -->
Now that everyone has created their merge requests, we will try merging them.
However, your commits and those of **Team Members A and C** modified the same functions.
As a consequence, once you merge one of these Merge Requests, it will block the two others.

## What to do

### Merging the first MR
First, review and merge the MR of **Team Member A** (`difficulty-level` -> `dev`).
You can see that this MR changes the same functions as your MR (the `pick_random_word` function).

### Noticing the conflicts
Once it is merged, go back to your MR. You should observe the following error:
![Git conflict](/gitlab-course/assets/images/git_conflict.png)

This is because GitLab has detected that the recent commits on `dev` (caused by the merge) have modified the same parts of the file as the commits on your branch.

## Solving the conflicts
One way to solve the conflicts is to use GitLab's interface. We will talk about this option later -- you first have to learn how to fix the conflicts "manually". 
The image below illustrates how we are going to do this: now that the new commit has been added to `dev`, we want to modify your `hints-system` branch so that its "base" is the curent version of `dev` (and not an outdated one).

![Explanation of git rebase | source: https://www.atlassian.com/fr/git/tutorials/rewriting-history/git-rebase](/gitlab-course/assets/images/git_rebase.png)

### Pull the latest changes
```bash
git checkout dev
git pull
git checkout hints-system
```

### Perform a "rebase" of your branch. 
That command tells git to start from the current state of the `dev` branch, and try applying each one of the commits specific to the `hints-system`, one after the other. It will stop if conflicts appear, tell you to fix the conflicts, and keep going.
```bash
git rebase dev
```

It should tell you:
```bash
Auto-merging hangman.py
CONFLICT (content): Merge conflict in hangman.py
error: could not apply 098af88... Add hints system
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 098af88... Add hints system
```

### Fix the first conflict
Open the `hangman.py` file in VSCode. You will observe conflict markers like the following:

![Conflict markers](/gitlab-course/assets/images/conflicts_member_b.png)

The top part ("Current Change") contains changes that are already part of the `dev` branch, while the bottom part ("Incoming Change") contains changes introduced by your commits. 
In our case, the Current Change adds the call to `calculate_difficulty()` inside a `while` loop, while the Incoming Change adds the call to `split()` to get the hint.
Thus, we want both solutions -- we have to edit the code to fuse both of them together. You can click on "Accept Both Changes" and fix the result until both additions are contained in the code, like in the image below:

![Code after conflicts are solved](/gitlab-course/assets/images/conflicts_member_b_solved.png)

### Fix the second conflict

There might be a second conflict in the `game()` function:

![Conflict markers](/gitlab-course/assets/images/conflicts_member_b2.png)

Similarly, you should fix the conflict to something like this:

![Code after conflicts are solved](/gitlab-course/assets/images/conflicts_member_b2_solved.png)

### Test the code
```bash
python hangman.py
```

### Finish the rebase
Now that you have fixed the conflicts, you can run:
```bash
git add hangman.py
git rebase --continue
```
It will open a temporary file using `nano` or `vim` - to exit, press Ctrl+X, then Y, then Enter (for `nano`) or press Esc, then type `:wq` and press Enter (for `vim`).

If you only had one commit on your branch, then the rebase will immediately stop. If you had several, it will repeat the previous step for every conflict found, until all commits have been applied.

### Push to origin
With `git rebase`, you have rewritten the history of your branch. You will not be able to push it:
```bash
To gitlab-student.centralesupelec.fr:2018cheynelt/test.git
 ! [rejected]        hints-system -> hints-system (non-fast-forward)
error: failed to push some refs to 'gitlab-student.centralesupelec.fr:2018cheynelt/test.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**DO NOT** run `git pull` -- this is a recipe for disaster.
In our case, having rewritten history, we want to force the remote branch (on the GitLab server) to mimic our local branch, so we will use:
```bash
git push --force-with-lease
```

### Check that conflicts have disappeared from GitLab

![Conflict markers](/gitlab-course/assets/images/conflicts_member_b_resolved.png)

Ask **Team Member C** to review, approve and merge your MR.

### Merging the third MR

Follow along with **Team Member C** as they perform the same steps on their branch.

Once all three MR are merged, you should see the following git tree:

![Conflict markers](/gitlab-course/assets/images/git_tree_abc.png)

History was rewritten to make it look like each MR was created after the previous one was merged -- even though **Project Member B** didn't **actually** have to wait for **Project Member A**'s `difficulty-level` feature to start working on `hints-system`, and **Project Member C** didn't **actually** have to wait for **Project Member B**'s `hints-system` feature to start working on `daily-word`.

## What we learned

1. When two people modify the same parts of the same file, it causes conflicts, which prevents merging both branch to the same destination (`dev`)
2. To solve the conflicts, we have to perform a `git rebase` to modify the base of our branch, before being able to merge
3. When conflicts cannot be prevented by prior planning, each member should work on their own branch, which allows for parallel work even when changes collide

### Why didn't we use GitLab's conflict resolution ?

GitLab has a built-in web editor to fix conflicts. However, GitLab's behaviour is not a `git rebase` -- istead, it's a `git merge`. The difference is illustrated below:

![Conflict markers](/gitlab-course/assets/images/git_merge.png)

This will lead to a more convoluted git tree, and is usually not recommended.
<!-- /ROLE: B -->













<!-- ROLE: C -->
Now that everyone has created their merge requests, we will try merging them.
However, your commits and those of **Team Members A and B** modified the same functions.
As a consequence, once you merge one of these Merge Requests, it will block the two others.

## What to do

### Merging the first MR
[!WAIT]
Wait until **Team Member B** has reviewed, approved and merged the MR of **Team Member A** (`difficulty-level` -> `dev`).
[!/WAIT]

Follow along with **Team Member B** the impact that this has on their own MR.

[!WAIT]
Wait until **Team Member B** has rebased and pushed their branch.
[!/WAIT]

### Merging the second MR

Then, review their MR (`hints-system` -> `dev`), approve it and merge it.
You can see that this MR changes the same functions as your MR (the `pick_random_word` function).

### Noticing the conflicts
Once it is merged, go back to your MR. You should observe the following error:
![Git conflict](/gitlab-course/assets/images/git_conflict.png)

This is because GitLab has detected that the recent commits on `dev` (caused by the merge) have modified the same parts of the file as the commits on your branch.

## Solving the conflicts
One way to solve the conflicts is to use GitLab's interface. We will talk about this option later -- you first have to learn how to fix the conflicts "manually". 
The image below illustrates how we are going to do this: now that the new commit has been added to `dev`, we want to modify your `daily-word` branch so that its "base" is the curent version of `dev` (and not an outdated one).

![Explanation of git rebase | source: https://www.atlassian.com/fr/git/tutorials/rewriting-history/git-rebase](/gitlab-course/assets/images/git_rebase.png)

### Pull the latest changes
```bash
git checkout dev
git pull
git checkout daily-word
```

### Perform a "rebase" of your branch. 
That command tells git to start from the current state of the `dev` branch, and try applying each one of the commits specific to the `daily-word`, one after the other. It will stop if conflicts appear, tell you to fix the conflicts, and keep going.
```bash
git rebase dev
```

It should tell you:
```bash
Auto-merging hangman.py
CONFLICT (content): Merge conflict in hangman.py
error: could not apply 098af88... Add daily word feature
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 098af88... Add daily word feature
```

### Fix the first conflict
Open the `hangman.py` file in VSCode. You will observe conflict markers like the following:

![Conflict markers](/gitlab-course/assets/images/conflicts_member_c.png)

The top part ("Current Change") contains changes that are already part of the `dev` branch, while the bottom part ("Incoming Change") contains changes introduced by your commits. 
In our case, the Current Change adds the `import time` and the definition of `calculate_difficulty`, and adds the argument `difficulty_level` to `pick_random_word`. The Incoming Change adds the `from datetime import date` and adds the argument `today` to `pick_random_word`.
Thus, we want both solutions -- we have to edit the code to fuse both of them together. You can click on "Accept Both Changes" and fix the result until both additions are contained in the code, like in the image below:

![Code after conflicts are solved](/gitlab-course/assets/images/conflicts_member_c_solved.png)

### Fix the second conflict

There might be a second conflict in the `game()` function:

![Conflict markers](/gitlab-course/assets/images/conflicts_member_c2.png)

Similarly, you should fix the conflict to something like this:

![Code after conflicts are solved](/gitlab-course/assets/images/conflicts_member_c2_solved.png)

### Test the code
```bash
python hangman.py
```

### Finish the rebase
Now that you have fixed the conflicts, you can run:
```bash
git add hangman.py
git rebase --continue
```
It will open a temporary file using `nano` or `vim` - to exit, press Ctrl+X, then Y, then Enter (for `nano`) or press Esc, then type `:wq` and press Enter (for `vim`).

If you only had one commit on your branch, then the rebase will immediately stop. If you had several, it will repeat the previous step for every conflict found, until all commits have been applied.

### Push to origin
With `git rebase`, you have rewritten the history of your branch. You will not be able to push it:
```bash
To gitlab-student.centralesupelec.fr:2018cheynelt/test.git
 ! [rejected]        daily-word -> daily-word (non-fast-forward)
error: failed to push some refs to 'gitlab-student.centralesupelec.fr:2018cheynelt/test.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**DO NOT** run `git pull` -- this is a recipe for disaster.
In our case, having rewritten history, we want to force the remote branch (on the GitLab server) to mimic our local branch, so we will use:
```bash
git push --force-with-lease
```

### Check that conflicts have disappeared from GitLab

![Conflict markers](/gitlab-course/assets/images/conflicts_member_b_resolved.png)

Ask **Team Member A** to review, approve and merge your MR.

Once all three MR are merged, you should see the following git tree:

![Conflict markers](/gitlab-course/assets/images/git_tree_abc.png)

History was rewritten to make it look like each MR was created after the previous one was merged -- even though **Project Member B** didn't **actually** have to wait for **Project Member A**'s `difficulty-level` feature to start working on `hints-system`, and **Project Member C** didn't **actually** have to wait for **Project Member B**'s `hints-system` feature to start working on `daily-word`.

## What we learned

1. When two people modify the same parts of the same file, it causes conflicts, which prevents merging both branch to the same destination (`dev`)
2. To solve the conflicts, we have to perform a `git rebase` to modify the base of our branch, before being able to merge
3. When conflicts cannot be prevented by prior planning, each member should work on their own branch, which allows for parallel work even when changes collide

### Why didn't we use GitLab's conflict resolution ?

GitLab has a built-in web editor to fix conflicts. However, GitLab's behaviour is not a `git rebase` -- istead, it's a `git merge`. The difference is illustrated below:

![Conflict markers](/gitlab-course/assets/images/git_merge.png)

This will lead to a more convoluted git tree, and is usually not recommended.
<!-- /ROLE: C -->




<!-- ROLE: D -->
Now that everyone has created their merge requests, we will try merging them.
However, your commits and those of **Team Members E and F** modified the same functions.
As a consequence, once you merge one of these Merge Requests, it will block the two others.

## What to do

### Merging the first MR
[!WAIT]
Wait until **Team Member E** merges your merge request.
[/!WAIT]

You're the lucky one -- your merge request gets merged first, so you do not have any conflicts to solve yourself. 

### Merging the second MR
Follow along with **Team Member E** the impact that this merge has on their merge request.

### Merging the third MR 
Then, follow along with **Team Member F** as they fix the conflicts with their branch.


Once all three MR are merged, you should see the following git tree:

![Conflict markers](/gitlab-course/assets/images/git_tree_def.png)

History was rewritten to make it look like each MR was created after the previous one was merged -- even though **Project Member E** didn't **actually** have to wait for **Project Member D**'s `pretty-display` feature to start working on `show-guessed-letters`, and **Project Member F** didn't **actually** have to wait for **Project Member E**'s `show-guessed-letters` feature to start working on `hearts-display`.

## What we learned

1. When two people modify the same parts of the same file, it causes conflicts, which prevents merging both branch to the same destination (`dev`)
2. To solve the conflicts, we have to perform a `git rebase` to modify the base of our branch, before being able to merge
3. When conflicts cannot be prevented by prior planning, each member should work on their own branch, which allows for parallel work even when changes collide

### Why didn't we use GitLab's conflict resolution ?

GitLab has a built-in web editor to fix conflicts. However, GitLab's behaviour is not a `git rebase` -- istead, it's a `git merge`. The difference is illustrated below:

![Conflict markers](/gitlab-course/assets/images/git_merge.png)

This will lead to a more convoluted git tree, and is usually not recommended.

<!-- /ROLE: D -->















<!-- ROLE: E -->
Now that everyone has created their merge requests, we will try merging them.
However, your commits and those of **Team Members D and F** modified the same functions.
As a consequence, once you merge one of these Merge Requests, it will block the two others.

## What to do

### Merging the first MR
First, review and merge the MR of **Team Member D** (`pretty-display` -> `dev`).
You can see that this MR changes the same functions as your MR (the `game` function).

### Noticing the conflicts
Once it is merged, go back to your MR. You should observe the following error:
![Git conflict](/gitlab-course/assets/images/git_conflict.png)

This is because GitLab has detected that the recent commits on `dev` (caused by the merge) have modified the same parts of the file as the commits on your branch.

## Solving the conflicts
One way to solve the conflicts is to use GitLab's interface. We will talk about this option later -- you first have to learn how to fix the conflicts "manually". 
The image below illustrates how we are going to do this: now that the new commit has been added to `dev`, we want to modify your `show-guessed-letters` branch so that its "base" is the curent version of `dev` (and not an outdated one).

![Explanation of git rebase | source: https://www.atlassian.com/fr/git/tutorials/rewriting-history/git-rebase](/gitlab-course/assets/images/git_rebase.png)

### Pull the latest changes
```bash
git checkout dev
git pull
git checkout show-guessed-letters
```

### Perform a "rebase" of your branch. 
That command tells git to start from the current state of the `dev` branch, and try applying each one of the commits specific to the `show-guessed-letters`, one after the other. It will stop if conflicts appear, tell you to fix the conflicts, and keep going.
```bash
git rebase dev
```

It should tell you:
```bash
Auto-merging hangman.py
CONFLICT (content): Merge conflict in hangman.py
error: could not apply 098af88... Display guessed letters next to the word 
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 098af88... Display guessed letters next to the word 
```

### Fix the conflict
Open the `hangman.py` file in VSCode. You will observe conflict markers like the following:

![Conflict markers](/gitlab-course/assets/images/conflicts_member_e.png)

The top part ("Current Change") contains changes that are already part of the `dev` branch, while the bottom part ("Incoming Change") contains changes introduced by your commits. 
In our case, the Current Change adds a print to reset the console, and adds color codes to the beginning / end of each `print` call. The Incoming Change adds the `"Letters guessed"` string to the `print` call.
Thus, we want both solutions -- we have to edit the code to fuse both of them together. You can click on "Accept Both Changes" and fix the result until both additions are contained in the code, like in the image below:

![Code after conflicts are solved](/gitlab-course/assets/images/conflicts_member_e_solved.png)

### Test the code
```bash
python hangman.py
```

### Finish the rebase
Now that you have fixed the conflicts, you can run:
```bash
git add hangman.py
git rebase --continue
```
It will open a temporary file using `nano` or `vim` - to exit, press Ctrl+X, then Y, then Enter (for `nano`) or press Esc, then type `:wq` and press Enter (for `vim`).

If you only had one commit on your branch, then the rebase will immediately stop. If you had several, it will repeat the previous step for every conflict found, until all commits have been applied.

### Push to origin
With `git rebase`, you have rewritten the history of your branch. You will not be able to push it:
```bash
To gitlab-student.centralesupelec.fr:2018cheynelt/test.git
 ! [rejected]        show-guessed-letters -> show-guessed-letters (non-fast-forward)
error: failed to push some refs to 'gitlab-student.centralesupelec.fr:2018cheynelt/test.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**DO NOT** run `git pull` -- this is a recipe for disaster.
In our case, having rewritten history, we want to force the remote branch (on the GitLab server) to mimic our local branch, so we will use:
```bash
git push --force-with-lease
```

### Check that conflicts have disappeared from GitLab

![Conflict markers](/gitlab-course/assets/images/conflicts_member_b_resolved.png)

Ask **Team Member F** to review, approve and merge your MR.

### Merging the third MR

Follow along with **Team Member F** as they perform the same steps on their branch.

Once all three MR are merged, you should see the following git tree:

![Conflict markers](/gitlab-course/assets/images/git_tree_def.png)

History was rewritten to make it look like each MR was created after the previous one was merged -- even though **Project Member E** didn't **actually** have to wait for **Project Member D**'s `pretty-display` feature to start working on `show-guessed-letters`, and **Project Member F** didn't **actually** have to wait for **Project Member E**'s `show-guessed-letters` feature to start working on `hearts-display`.

## What we learned

1. When two people modify the same parts of the same file, it causes conflicts, which prevents merging both branch to the same destination (`dev`)
2. To solve the conflicts, we have to perform a `git rebase` to modify the base of our branch, before being able to merge
3. When conflicts cannot be prevented by prior planning, each member should work on their own branch, which allows for parallel work even when changes collide

### Why didn't we use GitLab's conflict resolution ?

GitLab has a built-in web editor to fix conflicts. However, GitLab's behaviour is not a `git rebase` -- istead, it's a `git merge`. The difference is illustrated below:

![Conflict markers](/gitlab-course/assets/images/git_merge.png)

This will lead to a more convoluted git tree, and is usually not recommended.
<!-- /ROLE: E -->













<!-- ROLE: F -->
Now that everyone has created their merge requests, we will try merging them.
However, your commits and those of **Team Members D and E** modified the same functions.
As a consequence, once you merge one of these Merge Requests, it will block the two others.

## What to do

### Merging the first MR
[!WAIT]
Wait until **Team Member E** has reviewed, approved and merged the MR of **Team Member D** (`pretty-display` -> `dev`).
[!/WAIT]

Follow along with **Team Member E** the impact that this has on their own MR.

[!WAIT]
Wait until **Team Member E** has rebased and pushed their branch.
[!/WAIT]

### Merging the second MR

Then, review their MR (`show-guessed-letters` -> `dev`), approve it and merge it.
You can see that this MR changes the same functions as your MR (the `game` function).

### Noticing the conflicts
Once it is merged, go back to your MR. You should observe the following error:
![Git conflict](/gitlab-course/assets/images/git_conflict.png)

This is because GitLab has detected that the recent commits on `dev` (caused by the merge) have modified the same parts of the file as the commits on your branch.

## Solving the conflicts
One way to solve the conflicts is to use GitLab's interface. We will talk about this option later -- you first have to learn how to fix the conflicts "manually". 
The image below illustrates how we are going to do this: now that the new commit has been added to `dev`, we want to modify your `hearts-display` branch so that its "base" is the curent version of `dev` (and not an outdated one).

![Explanation of git rebase | source: https://www.atlassian.com/fr/git/tutorials/rewriting-history/git-rebase](/gitlab-course/assets/images/git_rebase.png)

### Pull the latest changes
```bash
git checkout dev
git pull
git checkout hearts-display
```

### Perform a "rebase" of your branch. 
That command tells git to start from the current state of the `dev` branch, and try applying each one of the commits specific to the `hearts-display`, one after the other. It will stop if conflicts appear, tell you to fix the conflicts, and keep going.
```bash
git rebase dev
```

It should tell you:
```bash
Auto-merging hangman.py
CONFLICT (content): Merge conflict in hangman.py
error: could not apply 098af88... Add visual hearts display for remaining attempts
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 098af88... Add visual hearts display for remaining attempts
```

### Fix the conflict
Open the `hangman.py` file in VSCode. You will observe conflict markers like the following:

![Conflict markers](/gitlab-course/assets/images/conflicts_member_f.png)

The top part ("Current Change") contains changes that are already part of the `dev` branch, while the bottom part ("Incoming Change") contains changes introduced by your commits. 
In our case, the Current Change adds a print to reset the console, adds color codes to the beginning / end of each `print` call, and displays the `"Letters guessed"` string as well. The Incoming Change adds the `"Remaining attempts"` string to the `print` call.
Thus, we want both solutions -- we have to edit the code to fuse both of them together. You can click on "Accept Both Changes" and fix the result until both additions are contained in the code, like in the image below:

![Code after conflicts are solved](/gitlab-course/assets/images/conflicts_member_f_solved.png)

### Test the code
```bash
python hangman.py
```

### Finish the rebase
Now that you have fixed the conflicts, you can run:
```bash
git add hangman.py
git rebase --continue
```
It will open a temporary file using `nano` or `vim` - to exit, press Ctrl+X, then Y, then Enter (for `nano`) or press Esc, then type `:wq` and press Enter (for `vim`).

If you only had one commit on your branch, then the rebase will immediately stop. If you had several, it will repeat the previous step for every conflict found, until all commits have been applied.

### Push to origin
With `git rebase`, you have rewritten the history of your branch. You will not be able to push it:
```bash
To gitlab-student.centralesupelec.fr:2018cheynelt/test.git
 ! [rejected]        hearts-display -> hearts-display (non-fast-forward)
error: failed to push some refs to 'gitlab-student.centralesupelec.fr:2018cheynelt/test.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

**DO NOT** run `git pull` -- this is a recipe for disaster.
In our case, having rewritten history, we want to force the remote branch (on the GitLab server) to mimic our local branch, so we will use:
```bash
git push --force-with-lease
```

### Check that conflicts have disappeared from GitLab

![Conflict markers](/gitlab-course/assets/images/conflicts_member_b_resolved.png)

Ask **Team Member D** to review, approve and merge your MR.

Once all three MR are merged, you should see the following git tree:

![Conflict markers](/gitlab-course/assets/images/git_tree_def.png)

History was rewritten to make it look like each MR was created after the previous one was merged -- even though **Project Member E** didn't **actually** have to wait for **Project Member D**'s `pretty-display` feature to start working on `show-guessed-letters`, and **Project Member F** didn't **actually** have to wait for **Project Member E**'s `show-guessed-letters` feature to start working on `hearts-display`.

## What we learned

1. When two people modify the same parts of the same file, it causes conflicts, which prevents merging both branch to the same destination (`dev`)
2. To solve the conflicts, we have to perform a `git rebase` to modify the base of our branch, before being able to merge
3. When conflicts cannot be prevented by prior planning, each member should work on their own branch, which allows for parallel work even when changes collide

### Why didn't we use GitLab's conflict resolution ?

GitLab has a built-in web editor to fix conflicts. However, GitLab's behaviour is not a `git rebase` -- istead, it's a `git merge`. The difference is illustrated below:

![Conflict markers](/gitlab-course/assets/images/git_merge.png)

This will lead to a more convoluted git tree, and is usually not recommended.
<!-- /ROLE: F -->
