// PassportProtectFrame.js
const axios = require('axios');
require('dotenv').config();

class PassportProtectFrame {
    constructor() {
      this.apiKey = process.env.API_KEY;
      this.scorerId = process.env.SCORER_ID;
      this.scoreThreshold = process.env.SCORE_THRESHOLD;
      this.baseURL = 'https://api.scorer.gitcoin.co/registry';
    }
  
  async authenticate(walletAddress) {
    try {
      // Post to the scoring endpoint and retrieve the score
      const response = await axios.post(`${this.baseURL}/submit-passport`, {
        address: walletAddress,
        scorer_id: this.scorerId
      }, {
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      });

      const { score, status } = response.data;

      // Ensure that the status is 'DONE' and the score meets the score threshold
      if (status === "DONE" && score !== null && score >= this.scoreThreshold) {
        return { isAuthorized: true };
      } else {
        throw new Error(`Access denied. Please build up a Passport Unique Humanity Score of ${this.scoreThreshold} or above at passport.xyz and try again`);
      }
    } catch (error) {
      return { isAuthorized: false, message: error.message || 'Failed to authenticate.' };
    }
  }
}

module.exports = PassportProtectFrame;
