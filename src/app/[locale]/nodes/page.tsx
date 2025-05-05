import Link from "next/link";
import { Server } from "@/types/server";

const servers: Server[] = [
    {
        id: "1",
        name: "node-istanbul-01",
        os: "Ubuntu 22.04",
        datacenter: "İstanbul",
        ip: "192.168.1.10",
    },
    {
        id: "2",
        name: "node-ankara-02",
        os: "AlmaLinux 9",
        datacenter: "Ankara",
        ip: "10.0.0.5",
    },
];

export default function ServerListPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Sunucular</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servers.map((server) => (
                    <Link
                        href={`/tr/nodes/${server.id}`}
                        key={server.id}
                        className="block bg-white rounded-2xl shadow-sm hover:shadow-md p-5 border hover:border-blue-400 transition-all"
                    >
                        <div className="text-sm text-gray-500">{server.os}</div>
                        <div className="text-lg font-semibold text-gray-800">{server.name}</div>
                        <div className="text-sm text-gray-600 mt-1">📍 {server.datacenter}</div>
                        <div className="text-sm text-gray-600">🌐 {server.ip}</div>
                    </Link>
                ))}
            </div>

            <div className="mt-8 flex justify-center space-x-2">
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        className="px-3 py-1 rounded-md border border-gray-300 text-sm hover:bg-blue-100"
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}
