import Sidebar from "./Sidebar";
import StatCards from "./StatCards"
import PendingSuppliers from "./PendingSuppliers";
import PendingEvents from "./PendingEvents";
import ReportedPosts from "./ReportedPosts";

const statData = [
  { label: "Submissions", value: 8 },
  { label: "Total Users", value: 150 },
  { label: "Active Posts", value: 24 },
  { label: "Reporter Content", value: 2 },
];

const submissions = 8;
const totalUsers = 150;
const activePosts = 24;
const reportedContent = 2;

const pendingSuppliers = [
  { name: "Supplier One" },
  { name: "Supplier Two" },
];

const pendingEvents = [
  { name: "Event One", status: "pending" },
  { name: "Event Two", status: "pending" },
];

const reportedPosts = [
  { title: "Post Title 1", views: 120 },
  { title: "Post Title 2", views: 80 },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#23235b] to-[#3a1c71] text-white">
      <Sidebar />
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3 flex flex-wrap gap-4 mb-4">
          <StatCards data={statData} />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-[#2d2d6e] rounded-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold">{submissions}</span>
            <span>Submissions</span>
          </div>
          <div className="bg-[#2d2d6e] rounded-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold">{totalUsers}</span>
            <span>Total Users</span>
          </div>
          <div className="bg-[#2d2d6e] rounded-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold">{activePosts}</span>
            <span>Active Posts</span>
          </div>
          <div className="bg-[#2d2d6e] rounded-xl p-6 flex flex-col items-center">
            <span className="text-3xl font-bold">{reportedContent}</span>
            <span>Reported Content</span>
          </div>
        </div>
        <div className="md:col-span-2">
          <PendingSuppliers suppliers={pendingSuppliers} />
        </div>
        <div className="md:col-span-1">
          <PendingEvents events={pendingEvents} />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ReportedPosts posts={reportedPosts} />
          <ReportedPosts posts={reportedPosts} />
        </div>
      </main>
    </div>
  );
} 