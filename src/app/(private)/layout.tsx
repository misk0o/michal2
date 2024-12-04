import AuthGuard from "@/components/AuthGuardian";

export const metadata = {
  title: "Protected | peterap",
};

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthGuard>
        {children}
      </AuthGuard>
    </>
  );
}
