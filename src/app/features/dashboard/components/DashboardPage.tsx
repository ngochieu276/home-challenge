'use client'
import PendingEvents, { Event } from "../../../../components/PendingEvents";
import ReportedPosts from "../../../../components/ReportedPosts";
import StatCards from "../../../../components/StatCards";


const pendingSuppliers: Event[] = [
  { name: "Supplier One", status: "reject" },
  { name: "Supplier Two", status: "approve" },
];

const pendingEvents: Event[] = [
  { name: "Event One", status: "approve" },
  { name: "Event Two", status: "approve" },
];

const reportedPosts = [
  { title: "Post Title 1", views: 120 },
];

export default function DashboardPage() {


  return (
    <div className="flex min-h-screen relative">
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="col-span-2 text-[30px] font-semibold">
          Admin Dashboard
        </label>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <StatCards value={8} label="Submissions" />
          <StatCards value={150} label="Total Users" />
          <StatCards value={24} label="Active Posts" />
          <StatCards value={2} label="Reported Content" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className=" text-[30px] font-semibold">
            Pending Suppliers
          </label>
          <PendingEvents events={pendingSuppliers} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="col-span-2 text-[30px] font-semibold">
            Pending Events
          </label>
          <PendingEvents events={pendingEvents} />
        </div>
        <div className="col-span-2 ">
          <label className="col-span-2 text-[30px] font-semibold">
            Reported Posts
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReportedPosts posts={reportedPosts} />
            <ReportedPosts posts={reportedPosts} />
            <ReportedPosts posts={reportedPosts} />
            <ReportedPosts posts={reportedPosts} />
          </div>
        </div>
      </main>
    </div>
  );
} 