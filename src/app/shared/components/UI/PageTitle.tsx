import React from "react";

function PageTitle({ title }: { title: string }) {
  return <h3 className="mb-3 text-xl font-bold">{title}</h3>;
}

export default PageTitle;
