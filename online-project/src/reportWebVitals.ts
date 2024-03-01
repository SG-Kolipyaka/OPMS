import { type ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  if (onPerfEntry !== null && onPerfEntry !== undefined && typeof onPerfEntry === 'function') {
    const webVitalsModule = await import('web-vitals')
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitalsModule
    getCLS(onPerfEntry)
    getFID(onPerfEntry)
    getFCP(onPerfEntry)
    getLCP(onPerfEntry)
    getTTFB(onPerfEntry)
  }
}

export default reportWebVitals
