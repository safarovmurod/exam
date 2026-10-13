import { useAtom } from "jotai"
import { AddUserJ } from "../store/jotai"
import { useZustand } from "../store/zustand"
import { useDispatch } from "react-redux"
import { AddR } from "../store/counterSlice"

export default function DialogAdd({ open, setOpen }) {
  const dispatch = useDispatch()
  const [, AddJ] = useAtom(AddUserJ)
  const { AddZ } = useZustand((state) => state)

  if (!open) return null

  function AddUss(obj) {
    AddJ(obj)
    AddZ(obj)
    dispatch(AddR(obj))
  }

  function add(e) {
    e.preventDefault()
    const newobj = {
      id: Date.now(),
      name: e.target.name.value,
      age: e.target.age.value,
      status: e.target.status.value === "online",
    }
    AddUss(newobj)
    setOpen(false)
  }

  return (
    <dialog open={open}>
      <p>dialogAdd</p>
      <form onSubmit={add} action="">
        <input type="text" name="name" id="" />
        <input type="text" name="age" id="" />
        <select name="status" id="">
          <option value="online">online</option>
          <option value="offline">offline</option>
        </select>
        <button type="submit">save</button>
        <button onClick={() => setOpen(false)} type="button">
          cancel
        </button>
      </form>
    </dialog>
  )
}
