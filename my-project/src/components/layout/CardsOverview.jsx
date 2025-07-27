function CardsOverview() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Total Users" value="116" icon={Users} />
        <Card title="Total Products" value="100" icon={Package} />
        <Card title="Assigned Products" value="10" icon={ClipboardCheck} />
        <Card title="Unassigned Products" value="90" icon={PackageOpen} />
      </div>
    );
  }
  
  export default CardsOverview;