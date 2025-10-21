### Goal
Your task is to implement the `game` function. 

### Instructions
> You have to:
> 1. Run `git checkout dev` to check out the "dev" branch
> 2. Run `git pull` to get the latest version
> 3. Run `git branch game` and `git checkout game`, in order to create a new branch called "game".
> 4. Open the file `hangman.py`, and implement the `game` function. To do so, you have to call the other functions. The other group members are currently writing these functions, so you can rely on their docstrings without having to wait for their code to be ready.
> 5. Other group members are tasked with writing functions which can be unit tested, but that is not the case for `game()` yet, as this function calls all other functions. So you cannot be sure of your implementation for now : this is quite problematic, and not the optimal way to work. When working on your projects later, try to minimize this situation as much as you can by splitting the work in a smart way before you even start coding.

Now that we have pushed the branch for the game feature, we want to merge this branch into the `dev` branch. However, we won't allow just anyone to merge their code into `dev`: what is someome makes a mistake in their code, and starts merging code with errors? Instead, we are going to use one of Gitlab's powerful tools : "**merge requests**".

### Making a merge request
> You have to:
> 1. Open the Gitlab page of your project, and click on Code > Merge Requests
![alt text](../images/image-12.png)
> 2. Click on "New Merge Request". You should get the following interface:
![alt text](image.png)
> 3. The "Source branch" is the branch containing the new code that we want to merge, in our case, we need to set it to the `game` branch.
The "Target branch" is the branch onto which we want to merge those commits, in our case, the `dev` branch.
Set those two branches and click on "Compare branches and continue". You should see this interface:
![Creating a pull request](image-2.png)
> Here, you can provide a description of your merge request, to help the reviewer understand what changes you have made. You can assign a reviewer (and other project management items: labels, milestones etc.)
> Do not assign a reviewer for now, simply add a title and description, and click on "Create Merge Request". We will ask one of your teammates to review it later, once every merge request is created.

