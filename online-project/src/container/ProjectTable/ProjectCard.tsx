import React, { useState, useEffect, useMemo } from 'react'
import Styles from '../../css/projecttable.module.css'
import PaginationCell from './Pagination'
import { useAppSelector, useAppDispatch } from '../../Redux'
import { getProjects, updateProjects } from '../../Redux/ProjectReducer/action'
import { BiMenuAltLeft } from 'react-icons/bi'
import { type UpdateStatus } from '../../Models/ReduxType/projectType'
import { Box, Button, Typography, ThemeProvider } from '@mui/material'
import themeTable from '../../theme/tableTheme'
import options from './SortOptions'
import ProjectCardCell from './ProjectCardCell'
import { throttle } from 'lodash'

const ProjectCard = (): React.JSX.Element => {
  const [page, setPage] = useState<number>(1)
  const [sortField, setSort] = useState<string>('')
  const [search, setSearch] = useState<string>('')
  const dispatch = useAppDispatch()
  const { projects, totalCount, totalPages } = useAppSelector(
    (store) => store.projectReducer
  )
  const [toggle, setToggle] = useState<boolean>(false)
  const [status, setStatus] = useState<boolean>(false)

  const pageIncrement = (): void => {
    setPage(page + 1)
  }
  const pageDecrement = (): void => {
    setPage(page - 1)
  }
  const pageCurrentValue = (el: number): void => {
    setPage(el)
  }

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

  const handelClick = (e: string): void => {
    setSort(e)
  }

  const projectDates = new Intl.DateTimeFormat('en-us', {
    dateStyle: 'medium'
  })

  const throttledFetchProjects = useMemo(() => {
    return throttle(async () => {
      try {
        const init = {
          search,
          sortField,
          page
        }
        await dispatch(getProjects({ paramsData: init, versioning: 2 }))
      } catch (error) {
        console.error(error)
      }
    }, 1000)
  }, [dispatch, page, sortField, search])

  useEffect(() => {
    void throttledFetchProjects()
  }, [page, sortField, search, status])

  return (
    <ThemeProvider theme={themeTable}>
      <Box>
        <Box className={Styles.projectCard}>
          <input
            className={Styles.searchField}
            type="text"
            placeholder={'🔍  Search'}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <Box>
            <Box className={Styles.projectCard}>
              <Button
                className={Styles.filterButton}
                onClick={() => {
                  setToggle(!toggle)
                }}
              >
                <BiMenuAltLeft className={Styles.filterIcon} />
              </Button>
              <Box
                className={`${Styles.selectContainer} ${
                  toggle ? Styles.open : ''
                }`}
              >
                <Box className={Styles.optionValues}>
                  <Typography className={Styles.sort}>
                    Sort Project By
                  </Typography>
                  {options.map((el) => {
                    return (
                      <Typography
                        key={el.text}
                        onClick={(): void => {
                          handelClick(el.value)
                        }}
                      >
                        {el.text}
                      </Typography>
                    )
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      <ProjectCardCell
          projects={projects}
          projectDates={projectDates}
          handelPatch={handelPatch}
        />
        <Box className={Styles.paginationDiv}>
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
    </ThemeProvider>
  )
}

export default ProjectCard
