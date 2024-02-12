# Bluesky Profile Cleaner
This tool allows you to delete all of the posts on your profile.

### Instructions
1. Install nodejs, npm and git
```
sudo apt-get install -y nodejs npm git
```
2. download the code to your computer.
```
git clone https://github.com/ssltny/bluesky_profile_cleaner.git
```
3. Locate the code path and install project dependencies
```
cd ./bluesky_profile_cleaner
npm install .
```
4. open .env file and set username and handle like below
```
USERNAME=johndoe.bsky.social
PASSWORD=123456789
```
5. Run script to delete the posts on your profile
```
node index.js
```
if your username and password are true, the posts will be deleted.
