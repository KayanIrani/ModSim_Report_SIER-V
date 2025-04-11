export function getScenarioFile({ a1, a2, a3, a4 }) {
    const key = `${a1}_${a2}_${a3}_${a4}` +'.csv';
    // console.log(key)
    // const scenarioMap = {
    //   "10_5_5_5": "baseline_simulation.csv",
    //   "10_9_3_4": "high_misinformation_simulation.csv",
    //   "10_4_9_3": "strong_campaign_simulation.csv",
    //   "8_8_4_7": "low_trust_simulation.csv",
    //   // Add more mappings as needed
    // };
    return key || "10_5_5_5.csv";
  }
  