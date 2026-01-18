const wasteKnowledge = [
  {
    type: "Plastic Waste",
    keywords: ["plastic", "bottle", "wrapper", "polythene", "container", "jug", "cup", "straw", "bag", "pvc", "nylon", "toy", "bucket"],
    risk: "Medium",
    co2: 1.5,
    advice: [
      "Rinse and clean plastic items",
      "Separate recyclable plastics (PET, HDPE)",
      "Avoid burning plastic (releases toxins)",
      "Prefer reusable alternatives"
    ]
  },
  {
    type: "E-Waste",
    keywords: ["phone", "charger", "laptop", "electronics", "mobile", "desktop", "computer", "pc", "monitor", "keyboard", "mouse", "printer", "tablet", "cable", "battery", "circuit", "tv", "television", "remote", "watch", "camera", "headphone", "earphone"],
    risk: "High",
    co2: 6.2,
    advice: [
      "Do not dispose in household bins",
      "Wipe personal data before disposal",
      "Submit to authorized e-waste centers",
      "Contains toxic heavy metals (lead, mercury)"
    ]
  },
  {
    type: "Organic Waste",
    keywords: ["food", "vegetable", "fruit", "kitchen", "peel", "egg", "shell", "meat", "bone", "flower", "leaf", "plant", "garden", "grass", "coffee", "tea"],
    risk: "Low",
    co2: 0.8,
    advice: [
      "Compost at home if possible",
      "Segregate from dry waste",
      "Reduces methane emissions in landfills",
      "Useful for organic fertilizer"
    ]
  },
  {
    type: "Biomedical Waste",
    keywords: ["mask", "syringe", "medical", "glove", "bandage", "medicine", "pill", "tablet", "needle", "sanitary", "diaper", "tissue", "blood", "cotton"],
    risk: "Critical",
    co2: 3.5,
    advice: [
      "Seal securely in marked bags (yellow/red)",
      "Never mix with household waste",
      "Hand over to certified bio-waste collectors",
      "Do not flush medicines down the toilet"
    ]
  },
  {
    type: "Paper & Cardboard",
    keywords: ["paper", "cardboard", "box", "newspaper", "magazine", "book", "carton", "envelope", "print", "flyer", "notebook"],
    risk: "Low",
    co2: 0.9,
    advice: [
      "Keep dry and clean",
      "Remove plastic tape or metal staples",
      "Recycle prevents deforestation",
      "Shred sensitive documents"
    ]
  },
  {
    type: "Glass Waste",
    keywords: ["glass", "jar", "bottle", "mirror", "window", "pane", "bulb", "tube", "crockery", "plate", "cup"],
    risk: "Medium",
    co2: 1.2,
    advice: [
      "Handle with care to avoid breakage",
      "Rinse recyclable glass jars and bottles",
      "Wrap broken glass in newspaper",
      "Light bulbs often go to e-waste/hazardous"
    ]
  },
  {
    type: "Metal Waste",
    keywords: ["metal", "can", "tin", "aluminum", "foil", "steel", "iron", "copper", "wire", "nail", "screw", "pot", "pan", "cutlery"],
    risk: "Medium",
    co2: 2.0,
    advice: [
      "Rinse food cans clearly",
      "Crush cans to save space",
      "Scrap metal can be sold for recycling",
      "Highly recyclable material"
    ]
  },
  {
    type: "Textile Waste",
    keywords: ["cloth", "fabric", "shirt", "pant", "jeans", "dress", "sock", "shoe", "curtain", "towel", "sheet", "textile", "cotton", "wool"],
    risk: "Low",
    co2: 3.0,
    advice: [
      "Donate wearable items",
      "Repurpose old clothes as cleaning rags",
      "Recycle specific fibers if possible",
      "Avoid landfilling textiles"
    ]
  },
  {
    type: "Hazardous/Chemical",
    keywords: ["paint", "oil", "chemical", "solvent", "glue", "pesticide", "cleaner", "bleach", "varnish", "spray", "aerosol"],
    risk: "Critical",
    co2: 5.0,
    advice: [
      "Never pour down the drain",
      "Keep in original containers",
      "Take to local hazardous waste facility",
      "Flammable and toxic"
    ]
  },
  {
    type: "General/Mixed Waste",
    keywords: ["trash", "garbage", "rubbish", "dust", "dirt", "mixed", "unknown", "other", "wrapper"],
    risk: "Variable",
    co2: 2.5,
    advice: [
      "Segregate whatever is recyclable first",
      "Check local municipal guidelines",
      "Reduce consumption to minimize waste",
      "Dispose in designated municipal bins"
    ]
  }
];
