import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Link, router } from "@inertiajs/react";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import React from "react";

export default function Pagination({ data, onPageChange }) {
    // Fungsi untuk menangani perubahan jumlah data per halaman
    const handlePerPageChange = (value) => {
        const url = new URL(window.location.href);
        url.searchParams.set("perPage", value);
        url.searchParams.set("page", 1); // Reset ke halaman 1
        router.visit(url.toString(), {
            preserveState: true,
            replace: true,
        });
    };

    return (
        <div className="flex items-center justify-between px-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
                Menampilkan {data.from || 0} sampai {data.to || 0} dari{" "}
                {data.total || 0} data.
            </div>
            <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Baris per halaman</p>
                    <Select
                        value={data.per_page?.toString()}
                        onValueChange={handlePerPageChange}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={data.per_page} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Halaman {data.current_page} dari {data.last_page}
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        onClick={() => onPageChange(data.first_page_url)}
                        disabled={data.current_page === 1}
                    >
                        <span className="sr-only">Halaman pertama</span>
                        <ChevronsLeft className="h-4 w-4" />
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        onClick={() => onPageChange(data.prev_page_url)}
                        disabled={!data.prev_page_url}
                    >
                        <span className="sr-only">Halaman sebelumnya</span>
                        <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        onClick={() => onPageChange(data.next_page_url)}
                        disabled={!data.next_page_url}
                    >
                        <span className="sr-only">Halaman selanjutnya</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>
                    <button
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        onClick={() => onPageChange(data.last_page_url)}
                        disabled={data.current_page === data.last_page}
                    >
                        <span className="sr-only">Halaman terakhir</span>
                        <ChevronsRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}