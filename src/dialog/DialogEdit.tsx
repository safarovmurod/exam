import { useAtom } from "jotai"
import { EditUserJ } from "../store/jotai"
import { useZustand } from "../store/zustand"
import { useDispatch } from "react-redux"
import { EditR } from "../store/counterSlice"

export default function DialogEdit({ user, openUser }) {
  const dispatch = useDispatch()
  const [, EditJ] = useAtom(EditUserJ)
  const { EditZ } = useZustand((state) => state)

  if (!user) return null

  function EditUss(obj) {
    EditJ(obj)
    EditZ(obj)
    dispatch(EditR(obj))
  }

  function edit(e) {
    e.preventDefault()
    const editobj = {
      id: user.id,
      name: e.target.name.value,
      age: e.target.age.value,
      status: e.target.status.value === "online",
    }
    EditUss(editobj)
    openUser(null)
  }

  return (
    <dialog open={user}>
      <p>dialogEdit</p>
      <form onSubmit={edit} action="">
        <input defaultValue={user?.name} type="text" name="name" id="" />
        <input defaultValue={user?.age} type="text" name="age" id="" />
        <select defaultValue={user?.status ? "online" : "offline"} name="status" id="">
          <option value="online">online</option>
          <option value="offline">offline</option>
        </select>
        <button type="submit">save</button>
        <button onClick={() => openUser(null)} type="button">
          cancel
        </button>
      </form> 
    </dialog>
  )
}

