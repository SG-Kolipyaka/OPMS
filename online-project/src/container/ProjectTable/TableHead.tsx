import React from 'react'
import { TableCell, TableRow, TableHead } from '@mui/material'
import Styles from '../../css/projecttable.module.css'

interface TableHeaderProps {
  initialState: string[]
  order: 'asc' | 'desc'
  handleRequestSort: (key: string) => void
}

const TableHeader: React.FC<TableHeaderProps> = ({
  initialState,
  order,
  handleRequestSort
}) => {
  return (
    <TableHead className={Styles.tableHead}>
      <TableRow>
        {initialState.map((key) => (
          <TableCell
            key={key}
            className={Styles.header}
            sortDirection={order === 'asc' ? 'desc' : false}
          >
            <button
              onClick={() => {
                handleRequestSort(key.toLowerCase())
              }}
              className={Styles.sortButton}
            >
              {key}
            </button>
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
