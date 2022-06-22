import cx from 'classnames'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { increment, decrement, counterValue } from '../../redux/slices/counter'
import { TestComponentProps } from './TestComponent.d'
import './TestComponent.scss'

const TestComponent = ({ className }: TestComponentProps) => {
  const counter = useAppSelector(counterValue)
  const dispatch = useAppDispatch()

  return (
    <div className={cx('root', className)}>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  )
}

export default TestComponent
