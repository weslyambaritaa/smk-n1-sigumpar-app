import WaliKelasLayout from "@/Layouts/WaliKelasLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Refleksi({ riwayat = [] }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        perkembangan: "",
        masalah: "",
    });

    const defaultRiwayat = riwayat.length
        ? riwayat
        : [
              {
                  id: 1,
                  bulan: "Februari 2026",
                  perkembangan:
                      "Siswa semakin aktif dalam diskusi kelas dan tugas kelompok.",
                  masalah:
                      "Beberapa siswa masih kesulitan dalam pelajaran Matematika. Dijadwalkan bimbingan tambahan.",
              },
              {
                  id: 2,
                  bulan: "Januari 2026",
                  perkembangan: "Awal semester berjalan lancar, siswa antusias.",
                  masalah:
                      "Tingkat keterlambatan cukup tinggi di minggu pertama.",
              },
          ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("wali-kelas.refleksi.store"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <WaliKelasLayout>
            <Head title="Refleksi – Wali Kelas" />

            <h2 className="text-2xl font-bold mb-1">Refleksi</h2>
            <p className="text-sm text-gray-500 mb-6">
                Catat perkembangan dan masalah yang ada di kelas
            </p>

            {/* Form */}
            <div className="bg-white rounded-xl shadow p-6 max-w-2xl mb-8">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-5">
                    📝 Form Refleksi Kelas
                </p>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">
                        Perkembangan Siswa
                    </label>
                    <textarea
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y"
                        rows={5}
                        placeholder="Tuliskan perkembangan positif yang diamati dari siswa kelas ini..."
                        value={data.perkembangan}
                        onChange={(e) => setData("perkembangan", e.target.value)}
                    />
                    {errors.perkembangan && (
                        <p className="text-red-500 text-xs mt-1">{errors.perkembangan}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-1">
                        Masalah Kelas
                    </label>
                    <textarea
                        className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 resize-y"
                        rows={5}
                        placeholder="Tuliskan permasalahan yang dihadapi dan rencana tindak lanjut..."
                        value={data.masalah}
                        onChange={(e) => setData("masalah", e.target.value)}
                    />
                    {errors.masalah && (
                        <p className="text-red-500 text-xs mt-1">{errors.masalah}</p>
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={processing}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-sm transition-colors disabled:opacity-60"
                >
                    {processing ? "Menyimpan..." : "Simpan Refleksi"}
                </button>
            </div>

            {/* Riwayat */}
            <div>
                <p className="text-sm font-bold mb-3">📚 Riwayat Refleksi</p>
                <div className="space-y-3">
                    {defaultRiwayat.map((r) => (
                        <div
                            key={r.id}
                            className="bg-white rounded-xl shadow p-5 border border-gray-100"
                        >
                            <p className="text-xs text-gray-400 font-semibold mb-2">
                                📅 {r.bulan}
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed mb-1">
                                <span className="font-bold">Perkembangan:</span>{" "}
                                {r.perkembangan}
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <span className="font-bold">Masalah:</span>{" "}
                                {r.masalah}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </WaliKelasLayout>
    );
}
