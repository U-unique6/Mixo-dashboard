import { useEffect, useState } from "react";
import { fetchCampaigns } from "../services/api";
import type { Campaign } from "../types/campaign";
import Header from "../components/Header";
import MatricCard from "../components/MetricCard";
import Filters from "../components/Filters";
import CampaignTable from "../components/CampaignTable";
import ShimmerDashboard from "../components/ShimmerDasboard";
import { STRINGS } from "../components/strings";

const Dashboard = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    fetchCampaigns()
      .then((data)=>setCampaigns(data.campaigns))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ShimmerDashboard/>;
if (error) return (
  <p className="p-6">{STRINGS.ERROR.FETCH_FAILED}</p>
);


  const filtered = campaigns.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) &&
    (status === "all" || c.status === status)
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Header />
      <MatricCard campaigns={campaigns} />
      <Filters
        search={search}
        status={status}
        setSearch={setSearch}
        setStatus={setStatus}
      />
      <CampaignTable campaigns={filtered} />
    </div>
  );
};

export default Dashboard;
