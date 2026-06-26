# React and TypeScript

## Code updates

### Scenario one:

You're fine with using our code for day two and don't need to save any code you may have written yesterday.

```
git switch instructor
git pull
git switch student
git merge instructor
```

You should be fine but let me know if you have any conflicts, we can always resolve them.

### Scenario two:

You have code that you wrote yesterday that you want to keep

Make sure you're on the student branch

```shell
#should indicate you're on the student branch
git branch

#Add any changes you've made
git add .

# commit your changes, choose your own commit message, of course
git commit -m "Commit message"
git switch instructor
git pull

# or student-day-two or whatever you'd like
git switch --create dev
```

Now you're on a branch called `dev` which has today's code. You can update or modify as you see fit.
