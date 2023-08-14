# 3DUAPP
3D Universal App: 
Application with 3D models and AR that runs on IOS, Android and Web using Expo, React Native, React Three Fiber, Three JS, React Native Three Fiber, React Native AR, React Native ARKit, React Native ARCore, React Native AR Foundation

## INSTALLATION
- Install NodeJS
- Install Expo 
- Install Yarn `npm install --global yarn`
- Install Gitmoji CLI `yarn global add gitmoji-cli`
- Install Gitmoji Changelog CLI
- Install Expo Go App on your phone

## APP ARQUITECTURE

Client Server Arquitecture Folder Structure

CLIENT: 
- Expo
- Unity
SERVER: 
- Express
- Serverless

## VERSION CONTROL: 
-  [Gitmoji, Gitmoji Changelog](https://www.npmjs.com/package/gitmoji-changelog)
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




