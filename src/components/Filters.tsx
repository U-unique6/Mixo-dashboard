import { STRINGS } from "./strings";

interface Props {
  search: string;
  status: string;
  setSearch: (v: string) => void;
  setStatus: (v: string) => void;
}

const Filters = ({ search, status, setSearch, setStatus }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <input
        className="border rounded-lg px-3 py-2 w-full sm:w-1/2"
        placeholder={STRINGS.FILTERS.SEARCH_PLACEHOLDER}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="border rounded-lg px-3 py-2 w-full sm:w-40"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="all">{STRINGS.FILTERS.ALL}</option>
        <option value={STRINGS.STATUS.ACTIVE}>{STRINGS.FILTERS.ACTIVE}</option>
        <option value={STRINGS.STATUS.PAUSED}>{STRINGS.FILTERS.PAUSED}</option>
      </select>
    </div>
  );
};

export default Filters;
