---
title: 'GitHub Notes'
date: '2021-04-15'
---

# GitHub

## SSH Keys

After signing in for an account got to this [LINK](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), and configure your SSH keys.

## From my computer to GitHub

To copy a repository from your computer to GitHub

- Create a new empty repository in GitHub.  To start, give it a name and create the repository.
- The next screen will show a set of instructions on how to proceed.  Use the ‘...or push an existing repository from the command line’.
- Continue on the terminal to connect the existing repository to the new empty one in GitHub.
- Push the repo to GitHub .
- Refresh the page in GitHub to see the uploaded code.

```bash
// tell the local repo the corresponding address in GitHub
git remote add origin <url_provided_by_GitHub_in_the_instructions_page>

// check the new home in GitHub by using ‘git remote -v’
git remote -v

// push up to GitHub
git push <remote> <branch>  // a common pattern is ‘git push origin master/main’
```

At any point push any branch to GitHub

```bash
git push origin <branch>
```

To avoid typing origin master every time use the -u flag. It stands for upstream and can be used to set the upstream branch to push to.  From then on by just typing git push, the contents from the local repository will go to the specified branch in GitHub.

```bash
// Connect the local repo’s branch  with the remote repo in GitHub’s branch
git push -u origin <branch>
```

## Clone

Copy a repository from GitHub to your machine.

```bash
git clone <address_of_the_repository_to_clone>
```

## Switch to remote branch

By switching to a local branch that **exist** in the remote repo, will automatically connect them

```bash
// not only switches to the branch, but if it is in the remote, it will connect them
git switch <branch>
```

## Fetch

Brings changes from GitHub to a local machine **without** merging them to the local repository or updating the HEAD branch.  It updates remote tracking branches.  Git does not automatically search for the remote status of the repo.  Fetch does that for us.

```bash
// defaults to fetching from origin
git fetch <remote_branch_name> 
```

## Pull

Brings changes from GitHub to a local machine updating HEAD.  Gets remote changes and updates the local repository.  It will merge to the branch we are **currently** on.

Common workflow is **pull**, fix potential **conflicts**, **push** to GitHub.

```bash
// Git Pull, works as a combination for Git Fetch and Git Merge
// defaults to the corresponding branch in the remote - <origin > <branch >
git pull <remote> <branch>
```

>💡 Pull before pushing to GitHub to check for changes and potential conflicts </div>

Working with others
Don’t work on master or main, always work on feature branches.  


// Git pull, works as a combination for Git Fetch and Git Merge
git pull <remote> <branch>




PR - Pull requests
Method to merge work between different collaborators.  The person requesting the pull request is asking for his/her code to be pulled to the desired repo/branch.

Work locally on a feature branch.
Push the feature branch to GitHub.
Open a pull request from GitHub.
Other person in the team will review and then approve or point out needed changes before merging.

PR - Conflict resolution outside of GitHub
Small conflicts can be easily fixed inside GitHub’s site, but for more complex conflicts, doing that form the code editor may be better.


// Workflow 
// Switch to the desired branch
git fetch origin
git switch <new_feature>
git merge main/master

// work on your editor to fix conflicts

// Switch to master
git switch main/master
git merge <new_feature>
git push origin main/master





Delete a branch
Once the conflict is fixed and merged to master, the branch can be deleted 


git branch -D <name_of_the_branch>




Fork
Allows multiple collaborators in one project (anybody) without being invited or part of the team.
This is a feature of GitHub and similar services.


Fork button on GitHub




Fork - Workflow
To make a pull requesting the creator/owner of the project to include changes we made.


// common steps with the fork and clone method of working
fork the project
clone the  fork
Set a second remote - one to my fork and the second to the original - upstream remote *
make changes
push to your remote
create a pull request

// * to add a remote 
git remote add <usually_called_upstream> <url_from_original_repo>





Rebase
🚨NEVER REBASE COMMITS THAT HAVE BEEN PUSHED TO GITHUB.  Only rebase what you have not shared.  Rebase only your work.

Alternative to merging, but has some different aspects to consider.  It alters the commit history.

It has two main uses, either to clean up git log history or to replace git merge.


git switch <feature_branch>
git rebase <master_branch,_or_any_branch_to_rebase_on>




Interactive Rebase
Make changes to commits with rebase.  Some of the options available are ‘pick’, ‘reword’, ‘edit’, ‘fixup’, ‘drop’...

First choose how many commits to go back, then follow the instructions in screen to make the changes.


// helps clean commit history
git rebase -i HEAD~<number_of_commits_to_go_back>




