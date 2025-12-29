import type { Campaign } from "../types/campaign";
import { STRINGS } from "./strings";

const CampaignTable = ({ campaigns }: { campaigns: Campaign[] }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">{STRINGS.TABLE.NAME}</th>
            <th>{STRINGS.TABLE.STATUS}</th>
            <th>{STRINGS.TABLE.PLATFORM}</th>
            <th>{STRINGS.TABLE.BUDGET}</th>
            <th>{STRINGS.TABLE.DAILY}</th>
            <th>{STRINGS.TABLE.CREATED}</th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map(c => (
            <tr key={c.id} className="border-t">
              <td className="p-3 font-medium">{c.name}</td>

              <td>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  c.status === STRINGS.STATUS.ACTIVE
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {c.status}
                </span>
              </td>

              <td>{c.platforms.join(", ")}</td>
              <td>${c.budget}</td>
              <td>${c.daily_budget}</td>
              <td>{new Date(c.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
