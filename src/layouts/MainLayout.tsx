import Navbar from "../components/navbar/Navbar";

interface MainLayoutProps {
  children: React.ReactNode;    
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}