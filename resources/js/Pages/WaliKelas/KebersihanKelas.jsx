import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head, useForm } from "@inertiajs/react";
import { useRef } from "react";

export default function KebersihanKelas() {
    const fileRef = useRef(null);
    const { data, setData, post, processing, reset, errors } = useForm({
        tanggal: "",
        catatan: "",
        foto: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/wali-kelas/kebersihan", {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <WaliKelasLayout>
            <Head title="Kebersihan Kelas - Wali Kelas" />

            <h2 className="text-2xl font-bold mb-6">Kebersihan Kelas</h2>

            <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Tanggal</label>
                    <input
                        type="date"
                        className="w-full border rounded px-3 py-2 text-sm"
                        value={data.tanggal}
                        onChange={(e) => setData("tanggal", e.target.value)}
                    />
                    {errors.tanggal && <p className="text-red-500 text-xs mt-1">{errors.tanggal}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Catatan Kondisi</label>
                    <textarea
                        className="w-full border rounded px-3 py-2 text-sm resize-y"
                        rows={5}
                        placeholder="Catatan"
                        value={data.catatan}
                        onChange={(e) => setData("catatan", e.target.value)}
                    />
                    {errors.catatan && <p className="text-red-500 text-xs mt-1">{errors.catatan}</p>}
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-1">Upload Foto</label>
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400"
                        onClick={() => fileRef.current?.click()}
                    >
                        <p className="text-sm text-gray-500">
                            {data.foto ? data.foto.name : "Upload Dokumentasi kebersihan"}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Max. 5 MB</p>
                    </div>
                    <input
                        ref={fileRef}
                        type="file"
                        className="hidden"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => setData("foto", e.target.files[0])}
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={processing}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-sm disabled:opacity-60"
                >
                    {processing ? "Menyimpan..." : "Selanjutnya"}
                </button>
            </div>
        </WaliKelasLayout>
    );
}