import Greet from "@components/Greet"
import Button from "@components/Button"
import useStore from '@stores/store'

const App = () => {
  const {count, decrement, increment} = useStore()
  return (
    <div>
      <p>{count}</p>
      <Greet />
      <Button onClick={decrement}>dec</Button>
      <Button onClick={increment}>inc</Button>
    </div>
  )
}

export default App