
SSH (Secure Shell) keys provide a secure way to authenticate with GitLab without having to enter your username and password every time you push or pull code. The private key stays on your computer, and you give the public key to GitLab, which allows GitLab to verify your identity.

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

```bash
ssh-keygen
```

### During key generation:

1. **File location**: Press Enter to accept the default location (`/home/your-username/.ssh/id_ed25519`)
2. **Passphrase**: You can either:
   + Press Enter for no passphrase (less secure, but easier to use)
   + Enter a passphrase (more secure, but you'll need to enter it every time) -- your passphrase won't show up on screen, it's normal!

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

Now we need to get your **public** key to add it to GitLab. The public key is the `.pub` file that was generated.
(If your key uses another protocol than ed25519, replace the name of the key in the commands below)

```bash
cat ~/.ssh/id_ed25519.pub
```

This will display your public key. It should look something like:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGbPhiQgg... NameOfYourLaptop
```

**Copy the entire output** (even ssh-ed25519 and NameOfYourLaptop).

## Step 4: Add the key to GitLab

1. Go to your GitLab server and sign in
2. Click on your avatar (colored circle) in the top-right corner of the left menu
3. Select **"Preferences"**
4. In the left sidebar, click **"SSH Keys"**
5. In the "Key" field, paste your public key (the one you just copied)
6. Give your key a title (e.g., "My Laptop")
7. Set an expiration date (optional)
8. Click **"Add key"**

## Step 5: Test your SSH connection

Let's verify that everything is working (replace with the address of your gitlab server, like `gitlab.com`):

```bash
ssh -T git@[address of the gitlab server]
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

### "ssh-keygen: command not found"
1. **Windows**: Make sure you have opened GitBash.
2. **macOS**: Install Xcode Command Line Tools: `xcode-select --install`
3. **Linux**: Install OpenSSH: `sudo apt install openssh-client`

### Key already exists
If you get "already exists", either:
- Use the existing key (recommended)
- Delete the old key and create a new one: `rm ~/.ssh/id_ed25519*`

### Different key types
If you used RSA instead of Ed25519, replace `id_ed25519` with `id_rsa` in all commands.

## Security Best Practices
1. **Never share your private key** (the file without `.pub`)
2. **Keep your private key secure** - don't copy it to shared computers
3. **Use a passphrase** for additional security (especially on shared computers)
4. **Set expiration dates** on your keys
5. **Remove old keys** from GitLab when you stop using a computer

## What's happening behind the scenes?

When you use SSH:
1. GitLab sends a challenge to your computer
2. Your computer uses the private key to sign the challenge
3. GitLab verifies the signature using your public key
4. If it matches, you're authenticated!

This is why you can safely share the public key but must keep the private key secret.
