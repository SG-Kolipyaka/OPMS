import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { type PaginationProps } from '../../Models/Typescriptmodel'
import Styles from '../../css/projecttable.module.css'

const PaginationCell = (props: PaginationProps): JSX.Element => {
  const { page, pageIncrement, pageDecrement, totalPages, pageCurrentValue } =
    props

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    if (value > page) {
      pageIncrement()
    } else {
      pageDecrement()
    }
    pageCurrentValue(value)
  }
  return (
    <Stack spacing={2} style={{ display: 'flex', justifyContent: 'center' }} className={Styles.page}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        size="small"
        color="primary"
      />
    </Stack>
  )
}

export default PaginationCell
