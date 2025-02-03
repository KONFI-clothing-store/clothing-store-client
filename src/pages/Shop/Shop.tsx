import React from "react";

import { Breadcrumb, Container } from "@/components/ui";
import { FilterBar } from "./components";

export const Shop: React.FC = () => {
  return (
    <Container>
      <hr className="mb-6" />

      <Breadcrumb />

      <div className="flex mt-6">
        <FilterBar />
      </div>
    </Container>
  );
};
