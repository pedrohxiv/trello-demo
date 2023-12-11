interface AuthenticationLayoutProps {
  children: React.ReactNode;
}

const AuthenticationLayout = ({ children }: AuthenticationLayoutProps) => {
  return (
    <div className="h-full flex items-center justify-center bg-slate-100">
      {children}
    </div>
  );
};

export default AuthenticationLayout;
