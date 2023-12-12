import { OrgControl } from "./_components/org-control";

interface OrganizationLayoutProps {
  children: React.ReactNode;
}

const OrganizationLayout = ({ children }: OrganizationLayoutProps) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationLayout;
