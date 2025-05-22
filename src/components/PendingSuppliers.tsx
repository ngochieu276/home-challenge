type Supplier = { name: string };

export default function PendingSuppliers({ suppliers }: { suppliers: Supplier[] }) {
  return (
    <div className="bg-gradient-to-tr from-[#23235b] to-[#3a1c71] rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">Pending Suppliers</h3>
      <div className="flex flex-col gap-3">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="flex items-center justify-between bg-[#2d2d6e] rounded-lg px-4 py-2">
            <span>{supplier.name}</span>
            <button className="bg-green-400 text-white px-4 py-1 rounded-lg font-semibold hover:bg-green-500 transition">Approve</button>
          </div>
        ))}
      </div>
    </div>
  );
} 