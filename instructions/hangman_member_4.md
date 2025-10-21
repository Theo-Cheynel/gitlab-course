### Goal
Your task is to implement the `ask_for_valid_input` function. 

### Instructions
> You have to:
> 1. Run `git checkout dev` to check out the "dev" branch
> 2. Run `git pull` to get the latest version
> 3. Run `git branch ask_for_valid_input` and `git checkout ask_for_valid_input`, in order to create a new branch called "ask_for_valid_input".
> 4. Open the file `hangman.py`, and implement the `ask_for_valid_input` function. To do so, you have to use the `input("Enter a letter: ")` function to ask the user for a letter in the console. You must check that the string entered has length 1, is a lowercase letter, and is not already in the string of guessed letters. If at least one of these conditions is False, you must ask again until the user gives a valid input.
> 5. Run the provided tests. To do so, we will use `pytest`, which is a Python test suite. 
First, install pytest using `python -m pip install pytest` (or `python3` for Mac users). 
Then, run `pytest test_hangman.py -k ask_for_valid_input`
This syntax tells pytest to find the test named `ask_for_valid_input`, and run it. You should get a test report similar to this:
> ![alt text](image-1.png)
> 6. Once your function passes all the tests, you can add, commit and push your changes: `git add hangman.py`, `git commit -m "Implement ask_for_valid_input"`, `git push --set-upstream origin ask_for_valid_input` (since this is the first time pushing this new branch to the remote repository)

Now that we have pushed the branch for the ask_for_valid_input feature, we want to merge this branch into the `dev` branch. However, we won't allow just anyone to merge their code into `dev`: what is someome makes a mistake in their code, and starts merging code with errors? Instead, we are going to use one of Gitlab's powerful tools : "**merge requests**".

### Making a merge request
> You have to:
> 1. Open the Gitlab page of your project, and click on Code > Merge Requests
![alt text](../images/image-12.png)
> 2. Click on "New Merge Request". You should get the following interface:
![alt text](image.png)
> 3. The "Source branch" is the branch containing the new code that we want to merge, in our case, we need to set it to the `ask_for_valid_input` branch.
The "Target branch" is the branch onto which we want to merge those commits, in our case, the `dev` branch.
Set those two branches and click on "Compare branches and continue". You should see this interface:
![Creating a pull request](image-2.png)
> Here, you can provide a description of your merge request, to help the reviewer understand what changes you have made. You can assign a reviewer (and other project management items: labels, milestones etc.)
> Do not assign a reviewer for now, simply add a title and description, and click on "Create Merge Request". We will ask one of your teammates to review it later, once every merge request is created.

### What next ?
Wait for everyone to finish their part. Once you have six pull requests created (and not before !), follow [these instructions]() on how to merge them.