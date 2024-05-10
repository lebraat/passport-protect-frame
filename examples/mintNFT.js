// mintNFT.js
const { ethers } = require('ethers');
const PassportProtectFrame = require('./PassportProtectFrame');

const apiKey = process.env.API_KEY;
const scorerId = process.env.SCORER_ID;
const scoreThreshold = process.env.SCORE_THRESHOLD

const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractAddress = process.env.CONTRACT_ADDRESS; // Address of the deployed NFT contract
const contractABI = [...]; // ABI of the NFT contract

const nftContract = new ethers.Contract(contractAddress, contractABI, wallet);

// Instantiate the PassportProtectFrame with the necessary credentials and threshold
const protectFrame = new PassportProtectFrame(apiKey, scorerId, scoreThreshold);

async function mintIfEligible(userWalletAddress) {
  try {
    const { isAuthorized, message } = await protectFrame.authenticate(userWalletAddress);

    if (isAuthorized) {
      const tx = await nftContract.mintNFT(userWalletAddress);
      await tx.wait();
      console.log('NFT minted successfully!');
    } else {
      console.log('Failed to mint NFT:', message);
    }
  } catch (error) {
    console.error('Error during NFT minting process:', error);
  }
}

// Example usage with a specific user's wallet address
const userWalletAddress = '0x...'; // User's wallet address
mintIfEligible(userWalletAddress).catch(console.error);
