"use client"
import { Pagination } from '@nextui-org/pagination'
import { Select, SelectItem } from '@nextui-org/select'
import { SharedSelection } from '@nextui-org/system'
import React, { useCallback } from 'react'

type Props = {
    page: number
    setPage: (page: number) => void
    setStart?: (start: number) => void
    rowsPerPage: number
    setRowsPerPage: (rowsPerPage: number) => void
    toggleDetails?: (isOpen: boolean) => void
    recordsFiltered: number
    recordsTotal: number
}
export default function TablePagination({ page, setPage, setStart = () => { }, rowsPerPage, setRowsPerPage, toggleDetails = () => { }, recordsFiltered, recordsTotal }: Props) {
    //Pagination text
    const startIndex = (page - 1) * rowsPerPage + 1;
    const endIndex = Math.min(page * rowsPerPage, recordsFiltered);

    const onPageChange = (page: number) => {
        page > 0 ? setPage(page) : setPage(1)
        const newStart = (page - 1) * rowsPerPage;
        setStart(newStart)
        toggleDetails(false)
    }
    const onRowsPerPageChange = useCallback((val: SharedSelection) => {
        if (val.currentKey) setRowsPerPage(Number(val.currentKey));
        setStart(0)
        setPage(1);
        toggleDetails(false)
    }, [setPage, setRowsPerPage]);

    return (
        <div className="flex w-full  gap-3">
            <div className="flex items-center gap-3">
                <span className="text-xs self-center">
                    Mostrando registros del {startIndex} al {endIndex} de un total de {recordsFiltered} <br />
                    Filtrados de un total de {recordsTotal}
                </span>
                <span className="flex items-center text-xs  text-nowrap pl-3">
                    Filas:
                </span>
                <Select
                    selectionMode='single'
                    disallowEmptySelection
                    aria-label='filas por página'
                    size='sm'
                    className="bg-transparent outline-none text-default-400 text-small w-20"
                    value={rowsPerPage}
                    defaultSelectedKeys={[rowsPerPage.toString()]}
                    onSelectionChange={(e) => onRowsPerPageChange(e)}
                >
                    <SelectItem key={10} value="10">10</SelectItem>
                    <SelectItem key={25} value="25">25</SelectItem>
                    <SelectItem key={50} value="50">50</SelectItem>
                    <SelectItem key={100} value="100">100</SelectItem>
                </Select>
            </div>

            <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={Math.ceil((recordsFiltered || 0) / rowsPerPage)}
                onChange={onPageChange}
            />
        </div>
    )
}