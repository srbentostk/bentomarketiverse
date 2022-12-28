import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xA3b58d7D0c3641dcAB058DDb7fed83e528D47b68", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Investor NFT",
        description: "This NFT will give you access to an amazing Semi-Secret Society!",
        image: readFileSync("scripts/assets/234.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();