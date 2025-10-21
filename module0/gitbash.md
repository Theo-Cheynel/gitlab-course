## For Windows Users Only

**Linux and macOS users**: You can **skip this section** as you already have a built-in terminal with Git support. Proceed directly to the next lesson.

**Windows users**: You need Git Bash to follow along with this course effectively.

## What is Git Bash?

Git Bash is a terminal application for Windows that provides:
- **Git command line tools**: All the Git commands you need for version control
- **Bash shell**: A Unix-like command line interface similar to Linux/macOS terminals
- **SSH support**: Secure connection capabilities for GitLab
- **MINGW environment**: Unix tools that work seamlessly on Windows

Think of it as bringing the Linux/macOS terminal experience to Windows.

## Installation Steps

### Step 1: Download Git for Windows

1. Go to [git-scm.com/download/win](https://git-scm.com/download/win)
2. The download should start automatically
3. If it doesn't start, click **"Click here to download manually"**

### Step 2: Run the Installer

1. **Run the downloaded `.exe` file** (you may need administrator privileges)
2. **Click "Yes"** when Windows asks for permission

### Step 3: Installation Options

You'll see several configuration screens. Here are the recommended settings:

#### License & Information
- Click **"Next"** through the license and information screens

#### Select Components
**Important**: Make sure these are checked:
- ✅ **Git Bash Here** (adds right-click context menu)
- ✅ **Git GUI Here** (graphical interface - optional but useful)
- ✅ **Associate .git* configuration files with the default text editor**
- ✅ **Associate .sh files to be run with Bash**

#### Default Editor
- **Recommended**: Select **"Use Visual Studio Code as Git's default editor"** if you have VSCode installed
- Otherwise, select **"Use Vim"** (default) or your preferred editor

#### Initial Branch Name
- Select **"Override the default branch name for new repositories"**
- Enter **"main"** (this is the modern standard)

#### PATH Environment
**Important**: Select **"Git from the command line and also from 3rd-party software"**
- This allows you to use Git from regular Command Prompt too

#### SSH Executable
- Select **"Use bundled OpenSSH"** (recommended)

#### HTTPS Transport Backend
- Select **"Use the OpenSSL library"**

#### Line Ending Conversions
- Select **"Checkout Windows-style, commit Unix-style line endings"** (recommended for Windows)

#### Terminal Emulator
- Select **"Use MinTTY (the default terminal of MSYS2)"** (better than Windows Console)

#### Git Pull Behavior
- Select **"Default (fast-forward or merge)"**

#### Credential Helper
- Select **"Git Credential Manager"** (helps with authentication)

#### Extra Options
- ✅ **Enable file system caching** (faster operations)
- ✅ **Enable symbolic links** (if you have administrator privileges)

#### Experimental Options
- Leave unchecked unless you want to try new features

### Step 4: Complete Installation

1. Click **"Install"** and wait for the installation to complete
2. Click **"Finish"**

## Verify Installation

### Method 1: Right-click test
1. Open **File Explorer**
2. Navigate to any folder (like Documents)
3. **Right-click** in an empty area
4. You should see **"Git Bash Here"** in the context menu
5. Click it to open Git Bash

### Method 2: Start Menu
1. Click the **Start button**
2. Type **"Git Bash"**
3. Click on **Git Bash** when it appears

### Method 3: Test Git commands
Once Git Bash is open, test these commands:

```bash
git --version
```
Should show something like: `git version 2.x.x.windows.x`

```bash
ssh -V
```
Should show SSH version information

## Using Git Bash

### Key Features:
- **Bash commands**: `ls`, `cd`, `mkdir`, `cp`, `mv`, etc.
- **Git commands**: `git clone`, `git add`, `git commit`, `git push`, etc.
- **SSH commands**: `ssh-keygen`, `ssh`, etc.
- **Text editing**: `nano`, `vim` editors

### Pro Tips:
- **Right-click to paste** (Ctrl+V doesn't work in Git Bash)
- **Shift+Insert** also pastes
- **Middle mouse button** pastes (if you have one)
- **Use Tab completion** for file names and commands
- **Up/Down arrows** to cycle through command history

### Common Bash Commands:
```bash
pwd                 # Show current directory
ls                  # List files and folders
ls -la              # List files with details (including hidden files)
cd folder_name      # Change to folder
cd ..               # Go up one directory
cd ~                # Go to home directory
mkdir folder_name   # Create new folder
```

## Troubleshooting

### "Git Bash Here" doesn't appear
- Try reinstalling Git with administrator privileges
- Make sure "Git Bash Here" was selected during installation

### Git commands not recognized
- Reinstall Git and make sure "Git from the command line" option was selected
- Restart your computer after installation

### Permission issues
- Run Git Bash as administrator: Right-click → "Run as administrator"
- Check if your antivirus is blocking Git

### Slow performance
- Enable "file system caching" if not already enabled
- Add Git installation folder to antivirus exclusions

## What's Next?

Now that you have Git Bash installed, you're ready to:
1. Set up SSH keys for secure GitLab access
2. Clone repositories from GitLab
3. Make commits and collaborate with your team

**macOS/Linux users**: Welcome back! You can continue with the course using your built-in terminal.