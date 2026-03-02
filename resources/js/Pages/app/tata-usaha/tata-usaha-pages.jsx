import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import AppLayout from "@/layouts/app-layout";
import { router, usePage, Head } from "@inertiajs/react";
import { 
    flexRender, 
    getCoreRowModel, 
    useReactTable 
} from "@tanstack/react-table";
import { 
    Search, 
    Plus, 
    DotsVertical, 
    Pencil, 
    Trash, 
    UserCircle,
    ChevronLeft,
    ChevronRight 
} from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export default function TataUsahaPage() {
    // Mengambil data dari props yang dikirim oleh rute di web.php
    const { tuList, auth, flash, perPage, search: initialSearch } = usePage().props;

    const [search, setSearch] = React.useState(initialSearch || "");
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
    const [sorting, setSorting] = React.useState([]);
    const [rowSelection, setRowSelection] = React.useState({});

    // Logika Debounce untuk Pencarian
    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(timer);
    }, [search]);

    // Eksekusi pencarian otomatis saat input berubah (setelah debounce)
    React.useEffect(() => {
        if (debouncedSearch !== undefined) {
            handlePagination(route("tata-usaha") + `?page=1&search=${debouncedSearch}`, debouncedSearch);
        }
    }, [debouncedSearch]);

    // Menangani Flash Message (Notifikasi)
    React.useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    // Fungsi navigasi halaman dan pencarian
    const handlePagination = (url, currentSearch) => {
        router.visit(url + `&search=${currentSearch}`, {
            preserveState: true,
            replace: true,
            only: ["tuList"],
        });
    };

    const columns = [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                />
            ),
        },
        { accessorKey: "nama", header: "Nama Staf" },
        { accessorKey: "nip", header: "NIP" },
        { accessorKey: "jabatan", header: "Jabatan" },
        {
            id: "actions",
            header: "Tindakan",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <DotsVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-yellow-600 cursor-pointer">
                            <Pencil className="mr-2 h-4 w-4" /> Ubah
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer">
                            <Trash className="mr-2 h-4 w-4" /> Hapus
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            ),
        },
    ];

    const table = useReactTable({
        data: tuList?.data || [],
        columns,
        state: { sorting, rowSelection },
        onSortingChange: setSorting,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: getCoreRowModel(),
        manualPagination: true,
    });

    return (
        <AppLayout title="Data Tata Usaha">
            <Head title="Tata Usaha" />
            <Card className="h-full border-none shadow-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <UserCircle className="text-primary h-6 w-6" /> 
                        <span>Manajemen Tata Usaha</span>
                    </CardTitle>
                    <div className="flex items-center gap-2">
                        <InputGroup>
                            <InputGroupInput 
                                placeholder="Cari staf..." 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                            />
                            <InputGroupAddon><Search className="h-4 w-4"/></InputGroupAddon>
                        </InputGroup>
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" /> Tambah
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {/* Bagian Tabel */}
                    <div className="rounded-md border overflow-hidden">
                        <Table>
                            <TableHeader className="bg-primary hover:bg-primary/90">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id} className="hover:bg-transparent">
                                        {headerGroup.headers.map((header) => (
                                            <TableHead key={header.id} className="text-primary-foreground font-bold">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </TableHead>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow key={row.id}>
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                            Data tidak ditemukan.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    {/* Bagian Pagination (Baru) */}
                    <div className="flex items-center justify-between py-4">
                        <div className="text-sm text-muted-foreground">
                            Menampilkan {tuList?.from || 0} sampai {tuList?.to || 0} dari {tuList?.total || 0} staf.
                        </div>
                        <div className="flex items-center space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handlePagination(tuList?.prev_page_url, debouncedSearch)}
                                disabled={!tuList?.prev_page_url}
                            >
                                <ChevronLeft className="h-4 w-4 mr-1" /> Sebelumnya
                            </Button>
                            <div className="text-sm font-medium">
                                Halaman {tuList?.current_page} dari {tuList?.last_page}
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handlePagination(tuList?.next_page_url, debouncedSearch)}
                                disabled={!tuList?.next_page_url}
                            >
                                Selanjutnya <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </AppLayout>
    );
}