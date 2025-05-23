'use client'
import PendingEvents, { Event } from "@/components/PendingEvents";
import ReportedPosts from "@/components/ReportedPosts";
import StatCards from "@/components/StatCards";


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
  { title: "Post Title 2", views: 120 },
  { title: "Post Title 3", views: 120 },
  { title: "Post Title 4", views: 120 },
];

export default function DashboardPage() {


  return (
    <div className="flex min-h-screen relative">
      <main className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <h1 className="col-span-2 text-[30px] font-semibold">
          Admin Dashboard
        </h1>
        <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <StatCards value={8} label="Submissions" />
          <StatCards value={150} label="Total Users" />
          <StatCards value={24} label="Active Posts" />
          <StatCards value={2} label="Reported Content" />
        </div>
        <section className="col-span-2 md:col-span-1">
          <h2 className="text-[30px] font-semibold">
            Pending Suppliers
          </h2>
          <PendingEvents events={pendingSuppliers} />
        </section>
        <section className="col-span-2 md:col-span-1">
          <h2 className="col-span-2 text-[30px] font-semibold">
            Pending Events
          </h2>
          <PendingEvents events={pendingEvents} />
        </section>
        <section className="col-span-2 ">
          <h2 className="col-span-2 text-[30px] font-semibold">
            Reported Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportedPosts.map((post) => {
              return <ReportedPosts post={post} key={post.title}/>;
            })}
            
          </div>
        </section>
      </main>
    </div>
  );
} 