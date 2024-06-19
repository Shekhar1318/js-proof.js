
// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_title, _creator, _creationYear, _artMedium) {
    const NFT = {
        "title": _title,
        "creator": _creator,
        "creationYear": _creationYear,
        "artMedium": _artMedium
    };
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nTitle: \t\t" + NFTs[i].title);
        console.log("Creator: \t" + NFTs[i].creator);
        console.log("Year: \t\t" + NFTs[i].creationYear);
        console.log("Medium: \t" + NFTs[i].artMedium);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs minted: " + NFTs.length);
}

// call your functions below this line
mintNFT("Galactic Voyage", "Eve Dawson", 2023, "Digital Art");
mintNFT("Echoes of Time", "Liam Turner", 2021, "Mixed Media");
mintNFT("Hidden Realms", "Nora Lee", 2022, "Illustration");

listNFTs();
getTotalSupply();
