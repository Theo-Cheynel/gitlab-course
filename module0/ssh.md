---
layout: default
title: "Setting up SSH Keys"
parent: "Module 0: Setting Up the Environment"
nav_order: 2
---

# Setting up SSH Keys for GitLab

SSH (Secure Shell) keys provide a secure way to authenticate with GitLab without having to enter your username and password every time you push or pull code. Think of it as a secure "password" that your computer and GitLab share.

## Why Use SSH Keys?

- **Security**: More secure than password authentication
- **Convenience**: No need to enter credentials for every Git operation
- **Required for some operations**: Some GitLab features require SSH authentication

## Step 1: Check if you already have SSH keys

Before creating new keys, let's check if you already have some:

1. Open a terminal (or Git Bash on Windows)
2. Run this command:

```bash
ls -la ~/.ssh
```

Look for files named:
- `id_rsa` and `id_rsa.pub` (RSA keys)
- `id_ed25519` and `id_ed25519.pub` (Ed25519 keys - newer and recommended)

If you see these files, you already have SSH keys! Skip to **Step 3**.

## Step 2: Generate new SSH keys

If you don't have SSH keys, let's create them:

### Option A: Ed25519 keys (recommended)

```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
```

### Option B: RSA keys (if Ed25519 is not supported)

```bash
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
```

> **Important**: Replace `your.email@example.com` with the email address associated with your GitLab account!

### During key generation:

1. **File location**: Press Enter to accept the default location (`/home/your-username/.ssh/id_ed25519`)
2. **Passphrase**: You can either:
   - Press Enter for no passphrase (easier but less secure)
   - Enter a passphrase (more secure but you'll need to enter it occasionally)

You should see output like:
```
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/username/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/username/.ssh/id_ed25519
Your public key has been saved in /home/username/.ssh/id_ed25519.pub
```

## Step 3: Copy your public key

Now we need to get your **public** key to add it to GitLab. The public key is the `.pub` file.

### Linux/macOS:
```bash
cat ~/.ssh/id_ed25519.pub
```

### Windows (Git Bash):
```bash
cat ~/.ssh/id_ed25519.pub
```

### Windows (PowerShell):
```powershell
Get-Content ~/.ssh/id_ed25519.pub
```

This will display your public key. It should look something like:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGbPhiQgg... your.email@example.com
```

**Copy the entire output** (select all and copy).

## Step 4: Add the key to GitLab

1. Go to [GitLab](https://gitlab.com) and sign in
2. Click on your avatar in the top-right corner
3. Select **"Preferences"** or **"Settings"**
4. In the left sidebar, click **"SSH Keys"**
5. In the "Key" field, paste your public key (the one you just copied)
6. Give your key a title (e.g., "My Laptop", "University Computer")
7. Set an expiration date (optional but recommended - maybe end of semester)
8. Click **"Add key"**

## Step 5: Test your SSH connection

Let's verify that everything is working:

```bash
ssh -T git@gitlab.com
```

You might see a message like:
```
The authenticity of host 'gitlab.com' can't be established.
ECDSA key fingerprint is SHA256:HbW3g8zUjNSksFbqTiUWPWg2Bq1x8xdGUrliXFzSnUw.
Are you sure you want to continue connecting (yes/no)?
```

Type `yes` and press Enter.

If successful, you should see:
```
Welcome to GitLab, @your-username!
```

## Troubleshooting

### "Permission denied (publickey)" error
- Make sure you copied the **public** key (`.pub` file), not the private key
- Verify the key was added correctly to GitLab
- Try regenerating the keys if the problem persists

### "ssh-keygen: command not found"
- **Windows**: Install Git for Windows or use WSL
- **macOS**: Install Xcode Command Line Tools: `xcode-select --install`
- **Linux**: Install OpenSSH: `sudo apt install openssh-client`

### Key already exists
If you get "already exists", either:
- Use the existing key (recommended)
- Delete the old key and create a new one: `rm ~/.ssh/id_ed25519*`

### Different key types
If you used RSA instead of Ed25519, replace `id_ed25519` with `id_rsa` in all commands.

## Security Best Practices

- **Never share your private key** (the file without `.pub`)
- **Keep your private key secure** - don't copy it to shared computers
- **Use a passphrase** for additional security (especially on shared computers)
- **Set expiration dates** on your keys
- **Remove old keys** from GitLab when you stop using a computer

## What's happening behind the scenes?

When you use SSH:
1. GitLab sends a challenge to your computer
2. Your computer uses the private key to sign the challenge
3. GitLab verifies the signature using your public key
4. If it matches, you're authenticated!

This is why you can safely share the public key but must keep the private key secret.

## Next: [Creating a GitLab Repository](./creating_repository.md)