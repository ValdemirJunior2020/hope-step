import React, { useState } from 'react';
import { getHopePlan } from '../services/gemini';
import PlanCard from '../components/PlanCard';

const cardColors = ['#6c757d', '#007bff', '#28a745']; // Day 1, 2, 3

function Plan() {
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userFeeling, setUserFeeling] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const rawPlan = await getHopePlan(userFeeling);

    // Split the result into Day blocks
    const dayChunks = rawPlan.split(/Day\s+\d:/gi).filter(Boolean);

    const formatted = dayChunks.map((text, idx) => ({
      title: `Day ${idx + 1}`,
      content: text.trim(),
      color: cardColors[idx % cardColors.length]
    }));

    setPlan(formatted);
    setLoading(false);
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Receive Your Hope Steps Plan</h2>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          type="text"
          placeholder="How are you feeling?"
          value={userFeeling}
          onChange={(e) => setUserFeeling(e.target.value)}
          className="form-control mb-3"
          required
        />
        <button type="submit" className="btn btn-success">
          {loading ? 'Generating...' : 'Get My Plan'}
        </button>
      </form>

      <div className="mt-4">
        {plan.map((day, idx) => (
          <PlanCard
            key={idx}
            title={day.title}
            content={day.content}
            bgColor={day.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Plan;
