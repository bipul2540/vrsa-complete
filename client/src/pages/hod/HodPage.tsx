import React, { useState } from "react";
import PageLoader from "../../components/PageLoader/PageLoader";

const HodPage = () => {
  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return <>{isLoading ? <PageLoader /> : <div>This is hod page</div>}</>;
};

export default HodPage;
