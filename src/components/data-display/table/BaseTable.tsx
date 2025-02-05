'use client';
import { ITableCol } from '@/interfaces/table/table-col.interface';
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableProps, TableRow } from "@heroui/table"
import React from 'react'

type Props = {
  columns: ITableCol[];
  rows: Record<string, any>[];
  tableProps?: TableProps
}

export const LoggerTable = ({ columns, rows, tableProps }: Props) => {
  return (
    <Table {...tableProps}>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key} >{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={rows} >
        {(item: any) => (
          <TableRow key={item.key} className={item?.className} >
            {(columnKey: any) => <TableCell >{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}