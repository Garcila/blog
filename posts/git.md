# Git - GitHub Notes

## Git

Install Git using oficial guides.
Follow the steps on the official website, [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Configure Git

Associate account **name** and **email**.

```js
git config --global user.name "Pepito Pepitas"
git config --global user.email "pepito@pepitas.com"

// To get the info
git user.email
git use.name
```

## Git Flow

A common flow when using git is:

```js
// Initialize the repo.  Done only once 
git init

// 
git status
git add <file/s  to commit or . to add all>
git commit -m ‘<message describing changes>’
git push
git log
```

## Git - avoid VIM

To configure as default editor something different from **VIM**, in this case **VSCode**:

```js
// command on a mac
git config --global core.editor "code --wait"
```

## Git pretty logs - at least short

```js
// will show the git log in a concise form
git log --oneline
```

## Amend commits

To add one or more files to the **previous** commit:

```js
git commit -m 'some commit'
git add <forgotten_file>
git commit --amend
```

The process will open the previous commit message in the selected (configured) code editor in your machine.

## Ignore files .gitignore

Not everything should be committed.  Private files, operative system files and files that can be generated with your application (i.e node modules), should **NOT** be committed.

```js
// create a file called .gitignore, and include the file and folders not to be committed

.DS_Store
node_modules
```

## Branches intro

Head is where the branch is currently pointing.  It starts pointing to **master/main**.

```js
// list all available branches

git branch
```

## Create a branch and Switch

The current location of the **HEAD** determines where the branch is created.

```js
// create a new branch
git branch <name_of_branch>

// move to the new branch - it used to be git checkout instead of git switch
git switch <name_of_branch>
```

```js
// create a new branch and switch to it
git switch -c <name_of_branch>
```

Git **checkout** <name_of_branch> still exists, but it does more than switch and it is being replaced by Switch.

## Checkout instead of Switch

**Checkout** does more than **switch**, but when used to change branches it can be used just like **switch**.

```js
// rename a branch.  Needs to be on the branch
git checkout  <branch_to_checkout>
```

## Delete and rename a branch

Use the flag -d to delete a branch.  It should be fully merged not to lose information, if still want to delete use **--force**.  Renaming only works affects the current branch.

```js
// delete a branch
git branch  -d <name_of_branch>

// rename a branch.  Needs to be on the branch
git branch -m <new_name_of_branch>
```

## Merge Branch

Merge from the **receiving** branch.

```js
// switch to the branch  to merge into. In this case master
git switch master
git merge <name_of_the_branch_to_merge_into_master>
```

## Merge Conflicts

When there is a conflict, it will be displayed in the terminal.  Resolve the conflict in VSCode, then, **add** and **commit**.

```js
git add
git commit -m ‘<message>’
// Errors will show.  Fix the errors in the code editor and then add and commit the fixed code
```

## Git Diff

List not staged changes.

```js
// with no additional options, it lists changes not staged… escape with ‘q’
git diff
```

## Git Stash

Save changes in a branch to use later without having to commit them at this time.

```js
// git stash saves the changes to use later on
git stash  

// git stash pop uses the stored (stashed) changes to your working branch
git stash pop
```
