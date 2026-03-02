import GurumapelLayout from "@/Layouts/GurumapelLayout";
import { Head } from "@inertiajs/react";

export default function GurumapelDashboard() {
    const announcements = [
        {
            id: 1,
            title: "Pengumuman Ketaatan Pangkat Guru Maret 2026",
            date: "Maret 2026",
        },
        {
            id: 2,
            title: "Pembaruan Data Kepegawaian Semester Genap",
            date: "Semester Genap",
        },
        {
            id: 3,
            title: "Imbauan Keteriban dan Disiplin Sekolah",
            date: "Terbaru",
        },
    ];

    return (
        <GurumapelLayout>
            <Head title="Dashboard Guru Mapel" />

            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 gap-8 items-start">
                    {/* Main Content */}
                    <div className="col-span-2">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                Selamat Datang Ivana Pasaribu!
                            </h2>
                        </div>
                    </div>

                    {/* Sidebar - Pengumuman */}
                    <div className="col-span-1">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                Pengumuman
                            </h3>
                            <div className="space-y-4">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="pb-4 border-b border-gray-200 last:border-b-0"
                                    >
                                        <p className="text-sm font-semibold text-gray-800 mb-1">
                                            {announcement.title}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {announcement.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GurumapelLayout>
    );
}
