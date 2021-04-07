import Sidebar from "../components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      {children}
    </div>
  );
}
