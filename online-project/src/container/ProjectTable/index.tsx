import React, { useState, useEffect, useMemo } from 'react'
import { useAppSelector, useAppDispatch } from '../../Redux'
import { getProjects, updateProjects } from '../../Redux/ProjectReducer/action'
import { Navbar, Banner } from '../../components'
import { type UpdateStatus } from '../../Models/ReduxType/projectType'
import themeTable from '../../theme/tableTheme'
import Breaker from '../AddProjects/Breaker'
import { Table, TableContainer, Box, ThemeProvider } from '@mui/material'
import PaginationCell from './Pagination'
import ProjectCard from './ProjectCard'
import Styles from '../../css/projecttable.module.css'
import TableHeader from './TableHead'
import TableBodyCell from './TableBodyCell'
import { options, initialState } from './SortOptions'
import { throttle } from 'lodash'

const ProjectTable = (): React.JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const [sortField, setSort] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const dispatch = useAppDispatch()
  const { projects, totalCount, totalPages } = useAppSelector(
    (store) => store.projectReducer
  )
  const [status, setStatus] = useState(false)

  const handelPatch = useMemo(() => async (userdata: UpdateStatus): Promise<void> => {
    setStatus(!status)
    try {
      const jsonPatch = {
        data: [{
          op: 'replace',
          path: '/status',
          value: userdata.status
        }],
        userinfo: userdata
      }
      await dispatch(updateProjects(jsonPatch))
    } catch (error) {
      console.error(error)
    }
  }, [dispatch, search, sortField, page, status])

  const pageIncrement = (): void => {
    setPage(page + 1)
  }
  const pageDecrement = (): void => {
    setPage(page - 1)
  }

  const pageCurrentValue = (el: number): void => {
    setPage(el)
  }

  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSort(e.target.value)
  }

  const projectDates = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'medium'
  })

  const handleRequestSort = (property: any): void => {
    const isAsc = order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setSort(property)
  }

  const throttledFetchProjects = useMemo(() => {
    return throttle(async () => {
      try {
        const init = {
          search,
          sortField,
          page
        }
        await dispatch(getProjects({ paramsData: init, versioning: 1 }))
      } catch (error) {
        console.error(error)
      }
    })
  }, [dispatch, page, sortField, search])

  useEffect(() => {
    void throttledFetchProjects()
  }, [page, sortField, search, status])

  return (
    <ThemeProvider theme={themeTable}>
      <Box className={Styles.tableContainer}>
        <Navbar />
        <Box className={Styles.tableCell}>
          <Banner name={'Project Listing'} />

          <Breaker />
          <Box className={Styles.smallscreen}>
            <ProjectCard />
          </Box>
          <Box className={Styles.tableTab} id={Styles.tabletag}>
            <Box className={Styles.projectCard}>
              <Box className={Styles.searchSection}>
                <input
                  type="text"
                  placeholder={'🔍  Search'}
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                />
              </Box>
              <div className={Styles.sortSection}>
                <label htmlFor="" style={{ color: 'gray', fontSize: '17px' }}>
                  Sort By:
                </label>
                <select
                  name=""
                  id=""
                  style={{ border: 'none' }}
                  onChange={handelChange}
                >
                  {options.map((el) => {
                    return (
                      <option key={el.text} value={el.value}>
                        {el.text}
                      </option>
                    )
                  })}
                </select>
              </div>
            </Box>
            <TableContainer>
              <Table>
                <TableHeader
                  initialState={initialState}
                  order={order}
                  handleRequestSort={handleRequestSort}
                />
                <TableBodyCell
                  projects={projects}
                  initialState={initialState}
                  handelPatch={handelPatch}
                  projectDate={projectDates}
                />
              </Table>
            </TableContainer>
            <Box className={Styles.paginationClass}>
              <PaginationCell
                page={page}
                pageIncrement={pageIncrement}
                pageDecrement={pageDecrement}
                totalPages={totalPages}
                totalCount={totalCount}
                pageCurrentValue={(e: number) => {
                  pageCurrentValue(e)
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default ProjectTable
