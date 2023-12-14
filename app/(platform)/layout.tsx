import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <ClerkProvider>
      <Toaster richColors />
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
