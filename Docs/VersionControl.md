## VERSION CONTROL: 

### Gitmoji
Gitmoji is an initiative to standardize and explain the use of emojis on GitHub commit messages.

-  [Gitmoji, Gitmoji Changelog](https://docs.gitmoji-changelog.dev/#/)
Workflow
Here the recommended workflow to generate your changelog file using gitmoji-changelog:

Important: Before generating, be sure to have all tags locally (e.g. git fetch origin)

1. Make changes and commit: git commit -m ":sparkles: my awesome feature"
2. Bump version (ex: 1.0.0) in package.json using semver convention
3. Run gitmoji-changelog, then the file CHANGELOG.md is created or updated with all changes
4. You can freely edit the new release in the changelog file, it will not be overwrite with the next generation
5. Commit package.json and CHANGELOG.md file
6. Tag your release: git tag -a v1.0.0 -m "v1.0.0" (or create a Github release)
7. Push to the remote git push

### Branch Naming convention

[Git Branch Naming Convention](
https://hackernoon.com/git-branch-naming-convention-7-best-practices-to-follow-1c2l33g2)

Types of branches
- feat: Feature
- fix: Bug fix
- docs: Documentation
- style: Formatting, missing semi colons, etc; no code change
- refactor: Refactoring production code
- test: Adding tests, refactoring test; no production code change
- chore: Updating build tasks, package manager configs, etc; no production code change

Naming convention
Example: 1-feat-3d_models
- 1: github issue number
- feat: Feature
- 3d_models: Feature name