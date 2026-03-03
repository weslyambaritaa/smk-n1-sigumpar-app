import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head, useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function Parenting({ siswaList = [] }) {
    const fileRef = useRef(null);
    const { data, setData, post, processing, reset, errors } = useForm({
        tanggal: "", ringkasan: "", presentase: "", foto: null,
    });

    const defaultSiswa = siswaList.length ? siswaList : [
        { id: 1, nama: "Ayu Hutasoit",      kehadiran: "75%" },
        { id: 2, nama: "Ayu Mentari",        kehadiran: "75%" },
        { id: 3, nama: "Bintang Silalahi",   kehadiran: "50%" },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("wali-kelas.parenting.store"), { forceFormData: true, onSuccess: () => reset() });
    };

    return (
        <WaliKelasLayout>
            <Head title="Parenting - Wali Kelas" />

            <h2 className="text-2xl font-bold mb-6">Parenting</h2>

            <div className="bg-white rounded-xl shadow p-6 mb-8 max-w-2xl">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Tanggal</label>
                    <input type="date" className="w-full border rounded px-3 py-2 text-sm" value={data.tanggal} onChange={(e) => setData("tanggal", e.target.value)} />
                    {errors.tanggal && <p className="text-red-500 text-xs mt-1">{errors.tanggal}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Ringkasan</label>
                    <textarea className="w-full border rounded px-3 py-2 text-sm resize-y" rows={4} placeholder="Catatan" value={data.ringkasan} onChange={(e) => setData("ringkasan", e.target.value)} />
                    {errors.ringkasan && <p className="text-red-500 text-xs mt-1">{errors.ringkasan}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Presentase</label>
                    <input type="number" min={0} max={100} className="w-full border rounded px-3 py-2 text-sm" placeholder="Masukkan Presentase" value={data.presentase} onChange={(e) => setData("presentase", e.target.value)} />
                    {errors.presentase && <p className="text-red-500 text-xs mt-1">{errors.presentase}</p>}
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-semibold mb-1">Upload Foto</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400" onClick={() => fileRef.current?.click()}>
                        <p className="text-sm text-gray-500">{data.foto ? data.foto.name : "Upload Dokumen Surat Panggilan"}</p>
                        <p className="text-xs text-gray-400 mt-1">Max. 5 MB</p>
                    </div>
                    <input ref={fileRef} type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => setData("foto", e.target.files[0])} />
                </div>

                <button onClick={handleSubmit} disabled={processing} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-sm disabled:opacity-60">
                    {processing ? "Menyimpan..." : "Selanjutnya"}
                </button>
            </div>

            <div className="bg-white rounded-xl shadow overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center">No</th>
                            <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center">Nama</th>
                            <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center">Kehadiran</th>
                            <th className="border px-4 py-3 bg-blue-600 text-white text-sm text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {defaultSiswa.map((s, i) => (
                            <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="border px-4 py-3 text-sm text-center">{i + 1}</td>
                                <td className="border px-4 py-3 text-sm text-center font-semibold">{s.nama}</td>
                                <td className="border px-4 py-3 text-sm text-center">{s.kehadiran}</td>
                                <td className="border px-4 py-3 text-sm text-center">
                                    <button className="text-blue-500 hover:text-blue-700 text-xs font-bold underline">detail</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </WaliKelasLayout>
    );
}
