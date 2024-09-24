import React, { useState } from 'react';

interface AgeResult {
  humanYears: number;
  catYears: number;
  dogYears: number;
}

const calculateAge = (humanYears: number): AgeResult => {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears >= 1) {
    // First year
    catYears = 15;
    dogYears = 15;
  }
  if (humanYears >= 2) {
    // Second year
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears > 2) {
    // Subsequent years
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return { humanYears, catYears, dogYears };
};

const AgeCalculator: React.FC = () => {
  const [humanYears, setHumanYears] = useState<number>(1);
  const [result, setResult] = useState<AgeResult | null>(null);

  const handleCalculate = () => {
    const ageResult = calculateAge(humanYears);
    setResult(ageResult);
  };

  return (
    <div className="age-calculator">
      <h1> Yoshi kalkulyatori</h1>
      <input
        type="number"
        min="1"
        value={humanYears}
        onChange={(e) => setHumanYears(Number(e.target.value))}
      />
      <button onClick={handleCalculate}>Hisobla</button>

      {result && (
        <div className="result">
          <p>Inson yili: {result.humanYears}</p>
          <p>Mushuk yili: {result.catYears}</p>
          <p>kuchuk yili: {result.dogYears}</p>
        </div>
      )}
    </div>
  );
};

export default AgeCalculator;
