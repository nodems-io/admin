import { useParams } from "next/navigation";

export default function ServerDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Sunucu Detayı</h1>
            <p className="text-gray-600">Sunucu ID: {params.id}</p>
        </div>
    );
}
