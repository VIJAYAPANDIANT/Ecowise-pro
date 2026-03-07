function logUsage(type) {
    let stats = JSON.parse(localStorage.getItem("ecoStats")) || {};
    stats[type] = (stats[type] || 0) + 1;
    localStorage.setItem("ecoStats", JSON.stringify(stats));
}
