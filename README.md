# NFT Minting and Listing

This project is a simple JavaScript application for minting and listing NFTs (Non-Fungible Tokens) with metadata.

## Description

The application allows you to:
- Mint new NFTs by providing title, creator, creation year, and art medium.
- List all minted NFTs and their metadata.
- Display the total number of NFTs minted.


2. **Open the `nft.js` file** in a text editor to view or modify the code.

3. **Run the code** using Node.js (if installed):
    ```sh
    node nft.js
    ```

## Example Usage

Here is an example of how to use the functions in the `nft.js` file:

```javascript
// Mint new NFTs
mintNFT("Galactic Voyage", "Eve Dawson", 2023, "Digital Art");
mintNFT("Echoes of Time", "Liam Turner", 2021, "Mixed Media");
mintNFT("Hidden Realms", "Nora Lee", 2022, "Illustration");

// List all minted NFTs
listNFTs();

// Get the total number of NFTs minted
getTotalSupply();
