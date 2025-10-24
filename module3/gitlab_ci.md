# GitLab CI Setup

Now that you've successfully deployed your hangman game through manual processes, it's time to automate testing and deployment using **Continuous Integration (CI)**. GitLab CI automatically runs tests, checks code quality, and can deploy your application whenever changes are made.

## Understanding GitLab CI

### What is Continuous Integration?

**Continuous Integration (CI)** automatically:
- ✅ **Runs tests** on every commit
- ✅ **Checks code quality** and style
- ✅ **Validates builds** across different environments  
- ✅ **Prevents broken code** from reaching main branch
- ✅ **Provides immediate feedback** to developers

### GitLab CI Components

1. **`.gitlab-ci.yml`**: Configuration file defining your CI pipeline
2. **Runners**: Servers that execute your CI jobs
3. **Pipelines**: Collection of jobs that run automatically
4. **Jobs**: Individual tasks (test, build, deploy)
5. **Stages**: Groups of jobs that run in sequence

## Creating Your First Pipeline

<!-- ROLE: A -->
### Team Member A: Create CI Configuration

**You will set up the basic CI pipeline for the team.**

1. **Create the CI configuration file**:
   ```bash
   git checkout dev
   git pull
   ```

2. **Create `.gitlab-ci.yml` in your project root**:
   ```yaml
   # GitLab CI Pipeline for Hangman Game
   
   stages:
     - test
     - quality
     - deploy
   
   # Define the Python environment
   image: python:3.9
   
   # Install dependencies before jobs
   before_script:
     - pip install --upgrade pip
     - pip install pytest pytest-cov flake8
   
   # Test Stage: Run all unit tests
   test_hangman:
     stage: test
     script:
       - echo "Running hangman game tests..."
       - python -m pytest test_hangman.py -v --cov=hangman
     artifacts:
       reports:
         coverage: coverage.xml
       expire_in: 1 week
     only:
       - dev
       - main
       - merge_requests
   
   # Quality Stage: Check code style
   code_quality:
     stage: quality
     script:
       - echo "Checking code quality..."
       - flake8 hangman.py --max-line-length=100
       - echo "Code quality check completed"
     only:
       - dev  
       - main
       - merge_requests
   
   # Deploy Stage: Validate deployment readiness
   deploy_validation:
     stage: deploy
     script:
       - echo "Validating deployment readiness..."
       - python -c "import hangman; print('✅ Module imports successfully')"
       - python -c "from hangman import pick_random_word; print('✅ Functions available')"
       - echo "✅ Deployment validation completed"
     only:
       - main
   ```

3. **Commit and push the CI configuration**:
   ```bash
   git add .gitlab-ci.yml
   git commit -m "Add GitLab CI pipeline configuration

   - Added test stage with pytest and coverage reporting
   - Added code quality checks with flake8
   - Added deployment validation stage
   - Pipeline runs on dev, main, and merge requests"
   
   git push origin dev
   ```

4. **Create merge request for CI setup**:
   - Go to GitLab → **Merge requests** → **New merge request**
   - Source: `dev`, Target: `main`  
   - Title: `Add GitLab CI/CD pipeline`
   - Description: `Initial CI setup with automated testing and code quality checks`
<!-- /ROLE: A -->

<!-- ROLE: B,C,D,E,F -->
### Understanding the Pipeline

[!WAIT]
**Team Member A is setting up the CI pipeline**

Team Member A is creating the `.gitlab-ci.yml` configuration file that will automate testing and quality checks for your hangman game.

Once setup is complete, every push and merge request will automatically trigger the pipeline.
[/!WAIT]
<!-- /ROLE: B,C,D,E,F -->

## Pipeline Stages Explained

### 1. Test Stage (`test_hangman`)

**Purpose**: Verify all functionality works correctly
- Runs `pytest` on your test suite
- Generates code coverage reports
- Fails if any tests fail
- Stores test results as artifacts

### 2. Quality Stage (`code_quality`)

**Purpose**: Ensure code follows Python standards
- Runs `flake8` for style checking
- Checks line length, imports, syntax
- Enforces consistent code formatting
- Prevents low-quality code from merging

### 3. Deploy Stage (`deploy_validation`)

**Purpose**: Validate code is ready for production
- Tests module imports work correctly
- Verifies key functions are available
- Only runs on main branch
- Catches deployment issues early

## Viewing Pipeline Results

### Accessing Pipelines

1. **Go to your GitLab project**
2. **Click "CI/CD" → "Pipelines"** in the left sidebar
3. **View pipeline status**:
   - 🟢 **Passed**: All jobs successful
   - 🔴 **Failed**: One or more jobs failed
   - 🟡 **Running**: Pipeline in progress
   - ⚪ **Canceled**: Pipeline was stopped

### Reading Job Details

1. **Click on a pipeline** to see individual jobs
2. **Click on a job name** to see detailed logs
3. **Review any failures**:
   - Test failures show which tests failed
   - Quality failures show style violations
   - Deploy failures show import/validation errors

### Example: Successful Pipeline

```
Pipeline #42 - ✅ Passed (2m 34s)

Stages:
├─ test      ✅ test_hangman      (1m 12s)
├─ quality   ✅ code_quality      (0m 45s)  
└─ deploy    ✅ deploy_validation (0m 37s)
```

### Example: Failed Pipeline

```
Pipeline #43 - ❌ Failed (1m 18s)

Stages:
├─ test      ❌ test_hangman      (1m 18s)
├─ quality   ⏸️ code_quality      (skipped)
└─ deploy    ⏸️ deploy_validation (skipped)
```

**Click on failed job to see error details**

## Fixing Pipeline Failures

### Common Test Failures

**Symptom**: Test stage fails
**Cause**: Code changes broke existing functionality
**Solution**: 
```bash
# Run tests locally to debug
python -m pytest test_hangman.py -v

# Fix the failing code
# Commit and push the fix
git add hangman.py
git commit -m "Fix failing test: handle empty word list"
git push
```

### Common Quality Failures

**Symptom**: Code quality stage fails
**Cause**: Code style violations
**Example Error**:
```
hangman.py:25:101: E501 line too long (105 > 100 characters)
hangman.py:30:1: E302 expected 2 blank lines, found 1
```

**Solution**:
```bash
# Run flake8 locally
flake8 hangman.py --max-line-length=100

# Fix style issues
# Break long lines, add blank lines, etc.
git add hangman.py
git commit -m "Fix code style: break long lines and add spacing"
git push
```

### Common Deploy Failures

**Symptom**: Deploy validation fails
**Cause**: Import errors or missing functions
**Solution**: Ensure all required functions exist and are importable

## Benefits of CI Pipeline

### 1. Automatic Quality Assurance
- **No more "it works on my machine"** problems
- **Consistent testing** across all team members
- **Early detection** of integration issues

### 2. Improved Collaboration
- **Immediate feedback** on merge requests
- **Prevents broken code** from reaching main
- **Enforces coding standards** automatically

### 3. Deployment Confidence
- **Validated builds** before deployment
- **Reduced risk** of production issues  
- **Faster development** with automated checks

## Pipeline Configuration Tips

### 1. Fail Fast
Place most critical tests first to catch issues quickly:
```yaml
stages:
  - lint      # Fast syntax/style checks
  - test      # Unit tests  
  - integration # Slower integration tests
```

### 2. Use Artifacts
Save important outputs for later review:
```yaml
artifacts:
  reports:
    junit: test-results.xml
    coverage: coverage.xml
  expire_in: 1 week
```

### 3. Branch-Specific Rules
Different rules for different branches:
```yaml
# Only run on main branch
only:
  - main

# Skip certain branches  
except:
  - experimental
```

## Next Steps

Once your CI pipeline is working:
1. **Monitor pipeline results** for all commits
2. **Fix any failures** immediately
3. **Learn advanced pipeline features** like parallel jobs
4. **Add deployment automation** to staging/production environments

**Remember**: A green pipeline means your code is ready for collaboration and deployment! 🚀