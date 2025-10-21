## Setting up Python Virtual Environment

A **virtual environment** is an isolated Python environment that keeps your project's dependencies separate from your system Python installation. This prevents conflicts between different projects and ensures everyone on your team uses the same Python packages.

### Step 1: Create Virtual Environment

From inside yout project directory, run the following command to create a new virtual environment:

```bash
python -m venv venv
```

This creates a folder called `venv` containing your isolated Python environment.

### Step 2: Activate Virtual Environment

#### Windows (Git Bash):
```bash
source venv/Scripts/activate
```

#### macOS/Linux:
```bash
source venv/bin/activate
```

**Success indicator**: Your terminal prompt should now show `(venv)` at the beginning:
```
(venv) user@computer:~/hangman-repository$
```

### Step 4: Verify Virtual Environment

Check that you're using the virtual environment's Python:

```bash
which python
```

Should show a path containing your project directory and `venv`.

### Step 5: Upgrade pip

Update pip to the latest version:

```bash
pip install --upgrade pip
```

### Step 6: Create Requirements File

Create a `requirements.txt` file to track your project's dependencies:

```bash
touch requirements.txt
```

For now, this file will be empty. As you install packages, you'll update it.

### Step 7: Add .gitignore Entry

**Important**: Never commit your virtual environment to Git! 

1. Create or edit `.gitignore` file in your repository root:

```bash
echo "venv/" >> .gitignore
```

2. Verify the content:

```bash
cat .gitignore
```

Should show `venv/` listed.

### Step 8: Test Installation

Install a test package to verify everything works:

```bash
pip install requests
```

Then check installed packages:

```bash
pip list
```

### Daily Workflow

**Every time you work on this project:**

1. Navigate to your repository directory
2. Activate the virtual environment:
   - Windows: `source venv/Scripts/activate`
   - macOS/Linux: `source venv/bin/activate`
3. Work on your project
4. When done, deactivate: `deactivate`

### Working with VSCode

1. Open VSCode in your repository directory:

```bash
code .
```

2. VSCode should automatically detect your virtual environment
3. If not, press `Ctrl+Shift+P` and type "Python: Select Interpreter"
4. Choose the interpreter from your `venv` folder

### Managing Dependencies

**Installing packages:**
```bash
pip install package-name
```

**Saving dependencies:**
```bash
pip freeze > requirements.txt
```

**Installing from requirements (for teammates):**
```bash
pip install -r requirements.txt
```

### Troubleshooting

#### Virtual environment not activating on Windows
- Make sure you're using Git Bash, not Command Prompt
- Try: `venv/Scripts/activate` instead of `source venv/Scripts/activate`

#### "python: command not found"
- Check Python installation: `python --version` or `python3 --version`
- Use `python3` instead of `python` if needed

#### VSCode not recognizing virtual environment
- Restart VSCode after creating the virtual environment
- Manually select interpreter: `Ctrl+Shift+P` → "Python: Select Interpreter"

#### Permission errors on Windows
- Run Git Bash as administrator
- Check if antivirus is blocking file creation

### What's Next

With your virtual environment set up:
1. All team members should create their own virtual environments
2. You'll install Python packages for the hangman game
3. The `requirements.txt` file will ensure everyone has the same dependencies
4. You can safely develop without affecting your system Python

**Remember**: Always activate your virtual environment before working on the project!