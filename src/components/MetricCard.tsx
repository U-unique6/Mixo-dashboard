import type { Campaign } from "../types/campaign";
import { STRINGS } from "./strings";

const MatricCard = ({ campaigns }: { campaigns: Campaign[] }) => {
  const totalBudget = campaigns.reduce((a, c) => a + c.budget, 0);
  const totalDaily = campaigns.reduce((a, c) => a + c.daily_budget, 0);
  const active = campaigns.filter(
    c => c.status === STRINGS.STATUS.ACTIVE
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-gray-500">{STRINGS.STATS.TOTAL_BUDGET}</p>
        <p className="text-xl font-semibold">${totalBudget}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-gray-500">{STRINGS.STATS.DAILY_BUDGET}</p>
        <p className="text-xl font-semibold">${totalDaily}</p>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <p className="text-gray-500">{STRINGS.STATS.ACTIVE_CAMPAIGNS}</p>
        <p className="text-xl font-semibold">{active}</p>
      </div>
    </div>
  );
};

export default MatricCard;
