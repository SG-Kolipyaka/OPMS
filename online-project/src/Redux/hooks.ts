import type { RootState, AppDispatch } from './store'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>(); // eslint-disable-line
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
