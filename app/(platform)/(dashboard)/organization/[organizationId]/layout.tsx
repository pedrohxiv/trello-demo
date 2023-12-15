import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";

import { OrgControl } from "./_components/org-control";

interface OrganizationLayoutProps {
  children: React.ReactNode;
}

export const generateMetadata = async () => {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization"),
  };
};

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationLayout;
