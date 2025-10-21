#!/bin/bash

# Simple helper script for committing and pushing changes
# Usage: ./.commit-helper.sh "commit message"

if [ -z "$1" ]; then
    echo "Error: Please provide a commit message"
    echo "Usage: ./.commit-helper.sh 'Your commit message'"
    exit 1
fi

# Stage all changes
git add -A

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "No changes to commit"
    exit 0
fi

# Show what will be committed
echo "Changes to be committed:"
git status --porcelain

# Commit with the provided message plus our standard footer
git commit -m "$(cat <<EOF
$1

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Push to master
git push origin master

echo "✅ Changes committed and pushed to master"