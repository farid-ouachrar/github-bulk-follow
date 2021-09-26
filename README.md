# Github bulk follow

### Getting Started

#### Prerequisites

1. Clone the project to your local environment:

```
    git clone git@github.com:farid-ouachrar/github-bulk-follow.git
```

2. You need to define environment variables in a .env file in the root folder:
   ```
   GITHUB_PERSONAL_TOKEN
   ```
   
#### Where to find the personal access token:

[Creating a personal access token tutorial](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**Note**: Make sure to enable `user:follow` permission to allow script to run successfully.


### Installing

Once you have maven installed on your environment, install the project dependencies via:

```
yarn
```

### Add/modify user accounts input file:

To add a custom list of usernames to run the script with, you can either modify or add a new file within the data folder with an array containing usernames.

```
- data
  - example.json
- src
```
### Running

Once you have installed dependencies, this can be run from the terminal by running the following command:
```
yarn start follow <filename>
```

### Contributing

If you have any improvement suggestions please create a pull request and I'll review it.

### License

This project is licensed under the MIT License
