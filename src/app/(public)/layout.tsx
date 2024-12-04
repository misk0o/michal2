export const metadata = {
    title: "Public | peterap",
  };
  
  export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
      <>
        {children} {/* Render public pages */}
      </>
    );
  }
  