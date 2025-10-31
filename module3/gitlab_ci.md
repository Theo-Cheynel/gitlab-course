<!-- ROLE: D -->

In this part, we'll explore a really useful aspect of GitLab: CI (Continuous Integration).

To illustrate the importance: every time you approved a MR, did you **really** take the time to pull the branch and run the tests to ensure they worked ? Or did you **blindly trust** the MR's author?

There's a third solution to this: we can ask the GitLab seerver to **automate** the testing process, and run the tests everytime we open a MR or push new commits.

## Creating Your First Pipeline

**You will set up the basic CI pipeline for the team.**

1. **Create the CI configuration file**:
```bash
git checkout dev
git pull
```

2. **Create a file named `.gitlab-ci.yml` at the root of your project, and paste the following content**:
```yaml
stages: [test, quality, deploy]

test_hangman:
  stage: test
  image: python:3.9
  tags:
    - docker
  before_script:
    - python -m pip install --upgrade pip
    - python -m pip install pytest pytest-cov flake8
  script:
    - echo "Running hangman game tests..."
    - python -m pytest -v --cov=hangman --cov-report=xml:coverage.xml --junitxml=report.xml
  artifacts:
    reports:
      junit: report.xml
      coverage_report:
        coverage_format: cobertura
        path: coverage.xml
    expire_in: 1 week
  only:
    - dev
    - main
    - merge_requests
```

3. **Commit and push the CI configuration**:
```bash
git add .gitlab-ci.yml
git commit -m "Add GitLab CI pipeline config"
git push origin dev
```
<!-- /ROLE: D -->

<!-- ROLE: B,C,D,E,F -->

In this part, we'll explore a really useful aspect of GitLab: CI (Continuous Integration).

To illustrate the importance: every time you approved a MR, did you **really** take the time to pull the branch and run the tests to ensure they worked ? Or did you **blindly trust** the MR's author?

There's a third solution to this: we can ask the GitLab seerver to **automate** the testing process, and run the tests everytime we open a MR or push new commits.

## Creating Your First Pipeline

[!WAIT]
**Team Member D is setting up the CI pipeline**

Team Member D is creating a file named `.gitlab-ci.yml`, which contains configuration for GitLab's CI pipeline.

Once setup is complete, every push and merge request will automatically trigger the pipeline.
[/!WAIT]

## Checking that the pipeline works

In your browser, open the GitLab project. Switch to the `dev` branch. You should see the latest commit:
![Last commit with the green checkmark](/gitlab-course/assets/images/gitlab-ci.png)
The green checkmark indicates that the CI pipeline has finished running without any errors.

If you click on it, you can explore the results of the pipeline in more detail (investigate any failed tests, etc.)

Now, every time you open a MR, a server will run your pipeline, allowing you to quickly check that the code still runs fine!

## Some more things you could do with CI pipelines

Here are some other things you could perform in a CI pipeline:
1. Automating linting/formatting (e.g. ![flake8](https://flake8.pycqa.org/en/latest/), ![black](https://github.com/psf/black))
2. Scanning for vulnerabilities in the code (e.g. )
3. Building a documentation website (e.g. ![sphinx](https://www.sphinx-doc.org/en/master/))
4. Build artifacts (compiling into a binary .exe file, etc)
<!-- /ROLE: B,C,D,E,F -->
