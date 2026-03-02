import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import {
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import AppLayout from "@/layouts/app-layout";
import { router, usePage, Head } from "@inertiajs/react";
import { Select, SelectValue } from "@radix-ui/react-select";
import * as Icon from "@tabler/icons-react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import dayjs from "dayjs";
import { ChevronDown, Plus, Search, DotsVertical, Pencil, Trash, UserCircle } from "lucide-react";
import * as React from "react";
import { toast } from "sonner";

export default function TataUsahaPage() {
    const {
        tuList, // Asumsi data dikirim dari controller dengan nama tuList
        auth,
        flash,
        isEditor,
        perPage,
        search: initialSearch,
        perPageOptions,
    } = usePage().props;

    const [search, setSearch] = React.useState(initialSearch || "");
    const [debouncedSearch, setDebouncedSearch] = React.useState("");
    const [sorting, setSorting] = React.useState([]);
    const [rowSelection, setRowSelection] = React.useState({});

    // ============================ EFFECTS ============================
    React.useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(search), 500);
        return () => clearTimeout(timer);
    }, [search]);

    React.useEffect(() => {
        if (debouncedSearch !== undefined) {
            handlePagination(route("tata-usaha") + `?page=1&search=${debouncedSearch}`, debouncedSearch);
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

    // ============================ COLUMNS ============================
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
        {
            accessorKey: "nama",
            header: "Nama Staf",
            cell: ({ row }) => <div className="font-medium">{row.original.nama}</div>,
        },
        {
            accessorKey: "nip",
            header: "NIP",
        },
        {
            accessorKey: "jabatan",
            header: "Jabatan",
        },
        {
            id: "actions",
            header: "Tindakan",
            cell: ({ row }) => (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0"><DotsVertical size={16}/></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem className="text-yellow-500"><Pencil size={16} className="mr-2"/> Ubah</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500"><Trash size={16} className="mr-2"/> Hapus</DropdownMenuItem>
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
        pageCount: tuList?.last_page || 1,
    });

    return (
        <AppLayout title="Data Tata Usaha">
            <Head title="Tata Usaha" />
            <Card className="h-full border-none shadow-none">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <UserCircle className="text-primary" />
                        Manajemen Tata Usaha
                    </CardTitle>
                    <div className="flex items-center gap-2">
                        <InputGroup>
                            <InputGroupInput 
                                placeholder="Cari staf..." 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} 
                            />
                            <InputGroupAddon><Search size={16}/></InputGroupAddon>
                        </InputGroup>
                        <Button onClick={() => {}} className="gap-2">
                            <Plus size={16} /> Tambah
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader className="bg-primary hover:bg-primary">
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id} className="hover:bg-transparent">
                                        {headerGroup.headers.map((header) => (
                                            <TableHead key={header.id} className="text-primary-foreground">
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
                                        <TableCell colSpan={columns.length} className="h-24 text-center">
                                            Data tidak ditemukan.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    {/* Pagination control serupa dengan PerusahaanPage */}
                </CardContent>
            </Card>
        </AppLayout>
    );
}