export interface ProjectCount {
  text: string
  counts: number
}

export interface countData {
  total: number
  closed: number
  running: number
  closureDelay: number
  cancelled: number
}
export const createProjectCounts = (count: countData): ProjectCount[] => {
  return [
    { text: 'Total Projects', counts: count.total },
    { text: 'Closed', counts: count.closed },
    { text: 'Running', counts: count.running },
    { text: 'Clouser Delay', counts: count.closureDelay },
    { text: 'Cancelled', counts: count.cancelled }
  ]
}
