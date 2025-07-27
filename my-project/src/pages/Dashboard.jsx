import CardsOverview from "../components/CardsOverview";
import UsersTable from "../components/UsersTable";
import RecentProducts from "../components/RecentProducts";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <CardsOverview />
      <RecentProducts />
      <UsersTable />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
}

export default Dashboard;