import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { ModalProvider } from "@/components/providers/modal-provider";
import { QueryProvider } from "@/components/providers/query-provider";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

const PlatformLayout = ({ children }: PlatformLayoutProps) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster richColors />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
