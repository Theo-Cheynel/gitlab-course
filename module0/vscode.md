
Visual Studio Code (VSCode) is a free, open-source code editor that works great with Git and GitLab. It provides syntax highlighting, Git integration, debugging tools, and many useful extensions.

## Why VSCode?

- **Built-in Git integration**: See changes, commit, push, and pull without leaving the editor
- **GitLab extension**: Direct integration with GitLab merge requests and issues
- **Cross-platform**: Works on Windows, macOS, and Linux
- **Free and open-source**: No license required
- **Large ecosystem**: Thousands of extensions for different programming languages and tools

## Installation Instructions

### Windows

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the "Download for Windows" button
3. Run the downloaded installer (VSCodeUserSetup-{version}.exe)
4. Follow the installation wizard:
   - Accept the license agreement
   - Choose installation location (default is fine)
   - **Important**: Check these boxes:
     - ✅ "Add 'Open with Code' action to Windows Explorer file context menu"
     - ✅ "Add 'Open with Code' action to Windows Explorer directory context menu"
     - ✅ "Add to PATH"
5. Click "Install" and wait for completion
6. Launch VSCode when installation finishes

### macOS

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the "Download for Mac" button
3. Open the downloaded .zip file
4. Drag Visual Studio Code to your Applications folder
5. Launch VSCode from Applications
6. If you see a security warning, right-click VSCode and select "Open"

### Linux (Ubuntu/Debian)

Option 1: Using snap (easiest)
```bash
sudo snap install --classic code
```

Option 2: Using apt
```bash
# Update package index
sudo apt update

# Install dependencies
sudo apt install software-properties-common apt-transport-https wget

# Add Microsoft GPG key
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -

# Add VSCode repository
sudo add-apt-repository "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main"

# Install VSCode
sudo apt update
sudo apt install code
```

## First Launch Configuration

When you first open VSCode:

1. **Choose a theme**: VSCode will ask if you prefer a light or dark theme. Choose what's comfortable for your eyes.

2. **Install recommended extensions**: For this course, install these essential extensions:
   - **GitLens**: Enhanced Git capabilities
   - **Python**: Python language support (by Microsoft)
   - **GitLab Workflow**: GitLab integration

To install extensions:
1. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search for the extension name
3. Click "Install"

## Verifying Installation

To verify VSCode is properly installed:

1. Open a terminal/command prompt
2. Type: `code --version`
3. You should see version information

If the command is not found:
- **Windows**: Restart your computer and try again
- **macOS**: Open VSCode, press `Cmd+Shift+P`, type "shell command", and select "Install 'code' command in PATH"
- **Linux**: The command should work immediately after installation

## Basic Git Configuration in VSCode

Before we continue, let's configure Git with your identity:

1. Open VSCode
2. Open the integrated terminal (`Ctrl+` ` or `View → Terminal`)
3. Run these commands (replace with your information):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

> **Note**: Use the same email address you'll use for your GitLab account!

## Troubleshooting

### VSCode won't open on macOS
- Go to System Preferences → Security & Privacy
- Click "Open Anyway" for VSCode

### Git commands not found in VSCode terminal
- **Windows**: Install Git from [https://git-scm.com/](https://git-scm.com/)
- **macOS**: Install Xcode Command Line Tools: `xcode-select --install`
- **Linux**: Install Git: `sudo apt install git`

### Extensions won't install
- Check your internet connection
- Try restarting VSCode
- Manually download from [VSCode Marketplace](https://marketplace.visualstudio.com/vscode)
