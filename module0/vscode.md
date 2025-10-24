
If you do not have VSCode installed yet, follow these steps to install it and configure it.

## Installation Instructions

### Windows

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the "Download for Windows" button
3. Run the downloaded .exe installer and follow the installation steps
4. Launch VSCode when installation finishes

### macOS

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the "Download for Mac" button
3. Open the downloaded .zip file
4. Drag Visual Studio Code to your Applications folder
5. Launch VSCode from Applications

### Linux (Ubuntu/Debian)

Option 1: Using snap (easiest)
```bash
sudo snap install --classic code
```

Option 2: Using apt
```bash
sudo apt update
sudo apt install software-properties-common apt-transport-https wget
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main"
sudo apt update
sudo apt install code
```

## First Launch Configuration

When you first open VSCode:

1. **Choose a theme**: VSCode will ask if you prefer a light or dark theme. Choose what's comfortable for your eyes.

2. **Install recommended extensions**: For this course, we will only need these extensions:
   - **Python**: Python language support (by Microsoft)
   - **GitLab Workflow**: GitLab integration

To install extensions:
1. Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X`)
2. Search for the extension name
3. Click "Install"

## Setting up your git identity

Before we continue, let's configure Git with your identity:

1. Open VSCode
2. Open the integrated terminal (`View → Terminal`)
3. Run these commands (replace with your information):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```


## Troubleshooting

[!COLLAPSE]
### VSCode won't open on macOS
1. Go to System Preferences → Security & Privacy
2. Click "Open Anyway" for VSCode
[/!COLLAPSE]

[!COLLAPSE]
### Git commands not found in VSCode terminal
1. **Windows**: Install Git from [https://git-scm.com/](https://git-scm.com/)
2. **macOS**: Install Xcode Command Line Tools: `xcode-select --install`
3. **Linux**: Install Git: `sudo apt install git`
[/!COLLAPSE]

[!COLLAPSE]
### Extensions won't install
1. Check your internet connection
2. Try restarting VSCode
3. Manually download from [VSCode Marketplace](https://marketplace.visualstudio.com/vscode)
[/!COLLAPSE]
