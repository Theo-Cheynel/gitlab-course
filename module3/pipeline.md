# Pipeline Configuration

Now that you have a basic CI pipeline running, let's explore advanced pipeline configurations, optimization techniques, and best practices for professional development workflows.

## Advanced Pipeline Features

### Parallel Jobs

Run multiple jobs simultaneously to speed up your pipeline:

```yaml
# Run tests in parallel for different Python versions
test_python_39:
  stage: test
  image: python:3.9
  script:
    - pip install pytest
    - python -m pytest test_hangman.py -v

test_python_310:
  stage: test  
  image: python:3.10
  script:
    - pip install pytest
    - python -m pytest test_hangman.py -v

test_python_311:
  stage: test
  image: python:3.11
  script:
    - pip install pytest  
    - python -m pytest test_hangman.py -v
```

### Matrix Builds

Test across multiple configurations:

```yaml
test_matrix:
  stage: test
  parallel:
    matrix:
      - PYTHON_VERSION: ["3.9", "3.10", "3.11"]
        OS: ["ubuntu", "alpine"]
  image: python:${PYTHON_VERSION}-${OS}
  script:
    - python -m pytest test_hangman.py -v
```

### Conditional Execution

Run jobs only when specific conditions are met:

```yaml
deploy_production:
  stage: deploy
  script:
    - echo "Deploying to production..."
    - ./deploy.sh production
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_COMMIT_TAG

deploy_staging:
  stage: deploy
  script:
    - echo "Deploying to staging..."
    - ./deploy.sh staging  
  rules:
    - if: $CI_COMMIT_BRANCH == "dev"
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
```

## Enhanced Pipeline for Hangman Game

<!-- ROLE: A -->
### Team Member A: Upgrade Pipeline Configuration

**You will enhance the CI pipeline with advanced features.**

Replace your `.gitlab-ci.yml` with this enhanced version:

```yaml
# Advanced GitLab CI Pipeline for Hangman Game

stages:
  - validate
  - test  
  - quality
  - security
  - build
  - deploy

variables:
  PYTHON_VERSION: "3.9"
  PIP_CACHE_DIR: "$CI_PROJECT_DIR/.cache/pip"

# Cache dependencies for faster builds
cache:
  paths:
    - .cache/pip/
    - venv/

# Validate code syntax and imports
validate_syntax:
  stage: validate
  image: python:${PYTHON_VERSION}
  script:
    - python -m py_compile hangman.py
    - python -c "import hangman; print('✅ Module imports successfully')"
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == "dev"
    - if: $CI_COMMIT_BRANCH == "main"

# Run unit tests with coverage
unit_tests:
  stage: test
  image: python:${PYTHON_VERSION}
  before_script:
    - pip install --upgrade pip
    - pip install pytest pytest-cov pytest-html
  script:
    - echo "Running comprehensive test suite..."
    - python -m pytest test_hangman.py -v --cov=hangman --cov-report=xml --cov-report=html --html=test-report.html
    - echo "Test coverage:"
    - python -m pytest --cov=hangman --cov-report=term
  coverage: '/TOTAL.*\s+(\d+%)$/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage.xml
      junit: test-report.xml
    paths:
      - htmlcov/
      - test-report.html
    expire_in: 1 week
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == "dev"
    - if: $CI_COMMIT_BRANCH == "main"

# Integration tests
integration_tests:
  stage: test  
  image: python:${PYTHON_VERSION}
  script:
    - echo "Running integration tests..."
    - python hangman.py < test_input.txt || echo "Game completed"
    - echo "✅ Integration tests completed"
  artifacts:
    when: on_failure
    paths:
      - integration_errors.log
    expire_in: 1 day
  allow_failure: true
  rules:
    - if: $CI_COMMIT_BRANCH == "dev"
    - if: $CI_COMMIT_BRANCH == "main"

# Code quality and style checks
code_quality:
  stage: quality
  image: python:${PYTHON_VERSION}
  before_script:
    - pip install flake8 black isort mypy
  script:
    - echo "Running code quality checks..."
    - flake8 hangman.py --max-line-length=100 --statistics
    - black --check hangman.py
    - isort --check-only hangman.py  
    - mypy hangman.py --ignore-missing-imports
  artifacts:
    reports:
      codequality: quality-report.json
    when: always
  allow_failure: true
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == "dev"
    - if: $CI_COMMIT_BRANCH == "main"

# Security scanning
security_scan:
  stage: security
  image: python:${PYTHON_VERSION}
  before_script:
    - pip install bandit safety
  script:
    - echo "Running security scans..."
    - bandit -r hangman.py
    - safety check
    - echo "✅ Security scan completed"
  artifacts:
    reports:
      sast: security-report.json
    when: always
  allow_failure: true
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"

# Build application package
build_package:
  stage: build
  image: python:${PYTHON_VERSION}
  before_script:
    - pip install build twine
  script:
    - echo "Building application package..."
    - python -m build
    - echo "✅ Package built successfully"
  artifacts:
    paths:
      - dist/
    expire_in: 1 week
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_COMMIT_TAG

# Deploy to staging
deploy_staging:
  stage: deploy
  image: alpine:latest
  script:
    - echo "Deploying to staging environment..."
    - echo "🚀 Staging deployment completed"
    - echo "Access at: https://hangman-staging.example.com"
  environment:
    name: staging
    url: https://hangman-staging.example.com
  rules:
    - if: $CI_COMMIT_BRANCH == "dev"

# Deploy to production  
deploy_production:
  stage: deploy
  image: alpine:latest
  script:
    - echo "Deploying to production environment..."
    - echo "🚀 Production deployment completed"
    - echo "Access at: https://hangman.example.com"
  environment:
    name: production
    url: https://hangman.example.com
  when: manual
  rules:
    - if: $CI_COMMIT_BRANCH == "main"

# Cleanup old artifacts
cleanup:
  stage: .post
  script:
    - echo "Cleaning up temporary files..."
    - rm -rf .cache/ htmlcov/
  when: always
  rules:
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == "dev"
    - if: $CI_COMMIT_BRANCH == "main"
```

Commit this enhanced pipeline:
```bash
git add .gitlab-ci.yml
git commit -m "Enhance CI pipeline with advanced features

- Added parallel testing across Python versions
- Added integration tests and security scanning
- Added code quality checks with black, isort, mypy
- Added build and packaging stage
- Added staging and production deployment stages
- Added comprehensive artifact collection and caching"

git push origin dev
```
<!-- /ROLE: A -->

<!-- ROLE: B,C,D,E,F -->
### Understanding the Enhanced Pipeline

[!WAIT]
**Team Member A is upgrading the CI pipeline**

Team Member A is implementing an advanced pipeline configuration with multiple stages, security scanning, and deployment automation.

This will provide comprehensive quality checks and automated deployment capabilities.
[/!WAIT]
<!-- /ROLE: B,C,D,E,F -->

## Pipeline Optimization Strategies

### 1. Caching Dependencies

Speed up builds by caching installed packages:

```yaml
cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .cache/pip/
    - node_modules/
    - venv/
```

### 2. Using Docker Images Efficiently

Choose appropriate base images:

```yaml
# Fast, minimal image for basic tests
image: python:3.9-slim

# Full image when you need compilation tools
image: python:3.9

# Custom image with pre-installed dependencies
image: your-registry/python-with-deps:latest
```

### 3. Job Dependencies

Control job execution order:

```yaml
deploy_staging:
  stage: deploy
  needs: 
    - unit_tests
    - code_quality
  # This job runs as soon as its dependencies complete
  # (doesn't wait for entire test stage to finish)
```

### 4. Pipeline Efficiency Rules

```yaml
# Skip pipeline for documentation changes
workflow:
  rules:
    - if: $CI_COMMIT_MESSAGE =~ /\[skip ci\]/
      when: never
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_COMMIT_BRANCH == "dev"
```

## Monitoring and Troubleshooting

### Reading Pipeline Metrics

**Pipeline Duration**: Total time from start to finish
- ✅ **Target**: < 10 minutes for basic pipelines
- ⚠️ **Warning**: > 15 minutes may slow development
- ❌ **Critical**: > 30 minutes needs optimization

**Success Rate**: Percentage of pipelines that pass
- ✅ **Good**: > 90% success rate
- ⚠️ **Warning**: 80-90% success rate  
- ❌ **Poor**: < 80% success rate

### Common Pipeline Issues

#### 1. Slow Pipeline Performance

**Symptoms**: Pipeline takes too long to complete
**Solutions**:
- Add caching for dependencies
- Use smaller Docker images
- Run jobs in parallel
- Skip unnecessary jobs for certain changes

#### 2. Flaky Tests

**Symptoms**: Tests pass/fail randomly
**Solutions**:
- Identify non-deterministic tests
- Fix timing issues in tests
- Add retry mechanisms for external dependencies
- Use more stable test data

#### 3. Resource Limitations

**Symptoms**: Jobs fail due to memory/disk space
**Solutions**:
- Use more efficient algorithms
- Clean up temporary files
- Increase runner resources
- Split large jobs into smaller ones

### Pipeline Debugging

```yaml
debug_job:
  stage: test
  script:
    - echo "Current directory: $(pwd)"
    - echo "Available space: $(df -h)"
    - echo "Environment variables:"
    - env | grep CI_
    - echo "Files in project:"
    - ls -la
  when: manual
```

## Best Practices

### 1. Pipeline as Code

- **Version control** all pipeline configurations
- **Review pipeline changes** like code changes
- **Test pipeline changes** in feature branches
- **Document pipeline behavior** for team members

### 2. Security Considerations

```yaml
# Use secret variables for sensitive data
deploy_production:
  script:
    - deploy.sh --token $DEPLOY_TOKEN --key $SSH_PRIVATE_KEY
  # Never hardcode secrets in pipeline files!
```

### 3. Fail Fast Strategy

```yaml
stages:
  - validate    # Quick syntax checks (30 seconds)
  - test       # Unit tests (2-5 minutes)  
  - quality    # Code quality (1-2 minutes)
  - security   # Security scans (2-3 minutes)
  - deploy     # Deployment (variable)
```

### 4. Environment Consistency

```yaml
# Use exact versions for reproducible builds
before_script:
  - pip install pytest==7.1.2 flake8==5.0.4
  # Instead of: pip install pytest flake8
```

## Advanced Topics

### 1. Multi-Project Pipelines

Trigger pipelines in other projects:

```yaml
trigger_downstream:
  stage: deploy
  trigger:
    project: group/downstream-project
    branch: main
```

### 2. Pipeline Schedules

Run pipelines on a schedule:
- **Go to**: CI/CD → Schedules  
- **Create**: Daily/weekly/monthly schedules
- **Use cases**: Security scans, dependency updates, performance tests

### 3. External Pipeline Integration

Connect with external services:

```yaml
notify_slack:
  stage: .post
  script:
    - curl -X POST -H 'Content-type: application/json' 
      --data '{"text":"Pipeline completed!"}' 
      $SLACK_WEBHOOK_URL
  when: always
```

## Measuring Pipeline Success

### Key Metrics

1. **Lead Time**: Time from commit to deployment
2. **Build Success Rate**: Percentage of successful builds  
3. **Mean Time to Recovery**: Time to fix failed builds
4. **Deployment Frequency**: How often you deploy

### Continuous Improvement

- **Regular pipeline reviews** with the team
- **Optimize slow stages** based on metrics
- **Update tools and dependencies** regularly
- **Learn from pipeline failures** to prevent recurrence

## What's Next

With advanced pipeline configuration, you now have:
- ✅ **Automated quality assurance** for every change
- ✅ **Multi-environment deployment** capabilities  
- ✅ **Security scanning** and compliance checks
- ✅ **Comprehensive monitoring** and debugging tools

**Next steps**: Explore GitLab's advanced features like auto-scaling runners, deployment boards, and integration with external monitoring tools.

**Remember**: A well-configured pipeline is your team's safety net for reliable, high-quality software delivery! 🚀