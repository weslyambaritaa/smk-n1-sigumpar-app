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
import Pagination from "@/components/pagination"; // Menggunakan komponen pagination proyek
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
    MoreVertical, 
    Pencil, 
    Trash, 
    Users, // Pastikan 'Users' ada di sini
    ChevronLeft, 
    ChevronRight 
} from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

// Asumsi Anda akan membuat dialog serupa dengan modul Perusahaan
// import ChangeDialog from "./dialogs/change-dialog";
// import DeleteDialog from "./dialogs/delete-dialog";

export default function TataUsahaPage() {
    const { tuList, auth, flash, perPage, search: initialSearch, perPageOptions } = usePage().props;

    const [search, setSearch] = React.useState(initialSearch || "");
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
    const [sorting, setSorting] = React.useState([]);
    const [rowSelection, setRowSelection] = React.useState({});
    
    // State untuk dialog
    const [openChangeDialog, setOpenChangeDialog] = React.useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);

    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(timer);
    }, [search]);

    React.useEffect(() => {
        if (debouncedSearch !== undefined) {
            handlePagination(route("tata-usaha") + `?page=1&perPage=${perPage}&search=${debouncedSearch}`, debouncedSearch);
        }
    }, [debouncedSearch]);

    React.useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    const handlePagination = (urlStr, currentSearch) => {
        const url = new URL(urlStr);
        const p = url.searchParams.get("page") || 1;
        const pp = url.searchParams.get("perPage") || perPage;
        
        router.visit(route("tata-usaha") + `?page=${p}&perPage=${pp}&search=${currentSearch}`, {
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
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem 
                            className="text-yellow-600 cursor-pointer"
                            onClick={() => {
                                setSelectedData(row.original);
                                setOpenChangeDialog(true);
                            }}
                        >
                            <Pencil className="mr-2 h-4 w-4" /> Ubah
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                            className="text-red-600 cursor-pointer"
                            onClick={() => {
                                setSelectedData(row.original);
                                setOpenDeleteDialog(true);
                            }}
                        >
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
        // title="Tata Usaha" di sini akan dikirim ke Sidebar sebagai prop 'active'
        <AppLayout title="Tata Usaha">
            <Head title="Manajemen Tata Usaha" />
            <Card className="flex-1 border-none shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    // Baris 149 (sekitar area Manajemen Tata Usaha)
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <Users className="text-primary h-6 w-6" /> 
                    <span>Manajemen Tata Usaha</span>
                </CardTitle>
                    {/* ... (Header content seperti Search dan tombol Tambah) */}
                </CardHeader>
                <CardContent>
                    {/* ... (Tabel dan Pagination) */}
                </CardContent>
            </Card>
        </AppLayout>
    );
}