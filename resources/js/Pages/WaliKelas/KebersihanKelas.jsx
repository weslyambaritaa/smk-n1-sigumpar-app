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
        post(route("wali-kelas.kebersihan.store"), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <WaliKelasLayout>
            <Head title="Kebersihan Kelas – Wali Kelas" />

            <h2 className="text-2xl font-bold mb-1">Kebersihan Kelas</h2>
            <p className="text-sm text-gray-500 mb-6">
                Dokumentasikan kondisi kebersihan dan ketertiban kelas
            </p>

            <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">
                    🧹 Form Kebersihan Kelas
                </p>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                        Tanggal
                    </label>
                    <input
                        type="date"
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                        value={data.tanggal}
                        onChange={(e) => setData("tanggal", e.target.value)}
                    />
                    {errors.tanggal && (
                        <p className="text-red-500 text-xs mt-1">{errors.tanggal}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                        Catatan Kondisi
                    </label>
                    <textarea
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y"
                        rows={5}
                        placeholder="Tuliskan kondisi kebersihan kelas, misalnya: lantai bersih, meja tertata, dll..."
                        value={data.catatan}
                        onChange={(e) => setData("catatan", e.target.value)}
                    />
                    {errors.catatan && (
                        <p className="text-red-500 text-xs mt-1">{errors.catatan}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-1">
                        Upload Foto
                    </label>
                    <div
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
                        onClick={() => fileRef.current?.click()}
                    >
                        <div className="text-3xl mb-2">⬆️</div>
                        <p className="text-sm text-gray-500 font-semibold">
                            {data.foto
                                ? data.foto.name
                                : "Upload Dokumentasi Kebersihan"}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Max. 5 MB</p>
                    </div>
                    <input
                        type="file"
                        ref={fileRef}
                        className="hidden"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => setData("foto", e.target.files[0])}
                    />
                    {errors.foto && (
                        <p className="text-red-500 text-xs mt-1">{errors.foto}</p>
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={processing}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-sm transition-colors disabled:opacity-60"
                >
                    {processing ? "Menyimpan..." : "Selanjutnya"}
                </button>
            </div>
        </WaliKelasLayout>
    );
}
