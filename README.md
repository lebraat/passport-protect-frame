# Passport -- Protect access to a Farcaster Frame

This module, `PassportProtectFrame`, is designed to protect access to engage with Farcaster Frames using users' Passport humanity score .

## Installation

To use this module in your project, follow these steps:

```bash
npm install passport-protect-frame
```

## Authentication

To properly authenticate your Passport API request, you will need to generate a scorer ID and API key. 

We've included instructions on how to do this here:
https://docs.passport.xyz/building-with-passport/passport-api/getting-access

Once you've set up an API key and Scorer ID, you will need to plug those into the .env file in this repo. We've included an example of what this file should look like in the .env.example file. 

## Example App

To help you get started with the PassportProtectFrame package, we have provided an example application that demonstrates how to use the package to gate NFT minting based on Passport scores.

### Mint NFT Example

Located in the `/examples/mintNFT.js`, this script shows how to authenticate a user's wallet address and conditionally mint an NFT based on their Passport score.

**Usage**:

1. Navigate to the examples directory:
   ```bash
   cd examples
   ```
2. Run the script (make sure you have configured your `.env` with all necessary credentials):
   ```bash
   node mintNFT.js
   ```

Make sure to review the script and adjust the environment variables and contract details as per your setup.


## Contributing Guidelines

We'd love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

### How to Contribute

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Issue that pull request!

### Any contributions you make will be under the MIT Software License
When you submit code changes, your submissions are understood to be under the same MIT License that covers the project.
