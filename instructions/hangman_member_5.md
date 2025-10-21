### Goal
Your task is to implement the `update_game` function. 

### Instructions
> You have to:
> 1. Run `git checkout dev` to check out the "dev" branch
> 2. Run `git pull` to get the latest version
> 3. Run `git branch update_game` and `git checkout update_game`, in order to create a new branch called "update_game".
> 4. Open the file `hangman.py`, and implement the `update_game` function. To do so, you have to add `new_guess` to the `letters_guessed`, and check whether the `new_guess` is contained inside `word_to_guess` : if not, decrease the `remaining_attempts` counter by 1.
> 5. Run the provided tests. To do so, we will use `pytest`, which is a Python test suite. 
First, install pytest using `python -m pip install pytest` (or `python3` for Mac users). 
Then, run `pytest test_hangman.py -k update_game`
This syntax tells pytest to find the test named `update_game`, and run it. You should get a test report similar to this:
> ![alt text](image-1.png)
> 6. Once your function passes all the tests, you can add, commit and push your changes: `git add hangman.py`, `git commit -m "Implement update_game"`, `git push --set-upstream origin update_game` (since this is the first time pushing this new branch to the remote repository)

Now that we have pushed the branch for the update_game feature, we want to merge this branch into the `dev` branch. However, we won't allow just anyone to merge their code into `dev`: what is someome makes a mistake in their code, and starts merging code with errors? Instead, we are going to use one of Gitlab's powerful tools : "**merge requests**".

### Making a merge request
> You have to:
> 1. Open the Gitlab page of your project, and click on Code > Merge Requests
![alt text](../images/image-12.png)
> 2. Click on "New Merge Request". You should get the following interface:
![alt text](image.png)
> 3. The "Source branch" is the branch containing the new code that we want to merge, in our case, we need to set it to the `update_game` branch.
The "Target branch" is the branch onto which we want to merge those commits, in our case, the `dev` branch.
Set those two branches and click on "Compare branches and continue". You should see this interface:
![Creating a pull request](image-2.png)
> Here, you can provide a description of your merge request, to help the reviewer understand what changes you have made. You can assign a reviewer (and other project management items: labels, milestones etc.)
> Do not assign a reviewer for now, simply add a title and description, and click on "Create Merge Request". We will ask one of your teammates to review it later, once every merge request is created.

