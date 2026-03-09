const fs = require("fs");

async function checkGlb() {
  const fileData = fs.readFileSync("public/models/phone.glb");
  console.log("File loaded, size:", fileData.length);
  // Actually, reading GLB directly is hard without a loader.
  // We can just look at the Three.js GLTF loader output cleanly.
}
checkGlb();
