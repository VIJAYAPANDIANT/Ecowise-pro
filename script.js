let lastReasoning = "";

async function analyzeWaste() {
    const inputEl = document.getElementById("userInput");
    const input = inputEl.value.toLowerCase().trim();
    if (!input) return;

    const chat = document.getElementById("chatBox");

    // Add User Message
    chat.innerHTML += `
    <div class="user-message">
      ${inputEl.value}
    </div>
  `;

    inputEl.value = ""; // Clear input
    chat.scrollTop = chat.scrollHeight; // Auto scroll

    // Simulate AI Thinking
    const loadingId = "loading-" + Date.now();
    chat.innerHTML += `
    <div class="bot-message" id="${loadingId}">
      <i class="ph ph-cpu"></i>
      <div class="message-content">Processing...</div>
    </div>
  `;
    chat.scrollTop = chat.scrollHeight;

    // Short artificial delay for "AI feel"
    await new Promise(r => setTimeout(r, 600));

    document.getElementById(loadingId).remove();

    let bestMatch = null;
    let bestScore = 0;

    wasteKnowledge.forEach(item => {
        let score = item.keywords.filter(k => input.includes(k)).length;
        if (score > bestScore) {
            bestScore = score;
            bestMatch = item;
        }
    });

    if (!bestMatch) {
        chat.innerHTML += `
      <div class="bot-message error">
        <i class="ph ph-warning-circle"></i>
        <div class="message-content">
          <strong>Identify Failed.</strong><br>
          System could not confidently classify this object. Please verify spelling or try a related keyword.
        </div>
      </div>`;
        return;
    }

    logUsage(bestMatch.type);

    lastReasoning = `Analyzed "${input}" against ${wasteKnowledge.length} categories. \nDecision Mode: MATCH_FOUND \nConfidence: High \nEnvironmental Risk: ${bestMatch.risk}`;

    const responseHTML = `
    <div class="bot-message">
      <i class="ph-fill ph-check-circle" style="color: var(--secondary-accent)"></i>
      <div class="message-content">
        <strong style="color: white; font-size: 1.05em;">${bestMatch.type}</strong>
        <div style="margin: 8px 0; font-size: 0.9em; opacity: 0.9;">
          <div>⚠️ Risk: <span style="color: ${getRiskColor(bestMatch.risk)}">${bestMatch.risk}</span></div>
          <div>🌍 CO₂ Saved: ${bestMatch.co2} kg</div>
        </div>
        <div style="margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
           ${bestMatch.advice.map(a => `<div>• ${a}</div>`).join('')}
        </div>
      </div>
    </div>
  `;

    chat.innerHTML += responseHTML;
    chat.scrollTop = chat.scrollHeight;

    document.getElementById("impactPanel").innerHTML = `
    <i class="ph-duotone ph-leaf"></i>
    <span>Total Impact: Categorized via EcoWise Neural Engine</span>
  `;
}

function getRiskColor(risk) {
    if (risk === "Critical") return "#ef4444"; // Red
    if (risk === "High") return "#f97316"; // Orange
    if (risk === "Medium") return "#eab308"; // Yellow
    return "#10b981"; // Green
}

function showExplanation() {
    alert(lastReasoning || "Analyze waste first to view explanation.");
}
