import { STRINGS } from "./strings";

const Header = () => (
  <div className="mb-6">
    <h1 className="text-2xl font-bold">
      {STRINGS.APP.TITLE}
    </h1>
    <p className="text-gray-500">
      {STRINGS.APP.SUBTITLE}
    </p>
  </div>
);

export default Header;
