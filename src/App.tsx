// name jotai
// age zustand
//status redax

import { useAtom } from "jotai"
import { dataAtom, DeleteUserJ } from "./store/jotai"
import { useDispatch, useSelector } from "react-redux"
import { useZustand } from "./store/zustand"
import { DeleteR } from "./store/counterSlice"
import { useState } from "react"
import DialogEdit from "./dialog/DialogEdit"
import Dialoginfo from "./dialog/Dialoginfo"
import DialogAdd from "./dialog/DialogAdd"

export default function App() {
  //jotai
  const [dataJ] = useAtom(dataAtom)
  const dispatch = useDispatch()
  const [,DeleteJ] = useAtom(DeleteUserJ)
  //redux
  const { data } = useSelector((state) => state.data)
  //zustand
  const {dataZ,DeleteZ} = useZustand((state) => state)
  //user
  const user = data.map((el) => {
    const Z = dataZ.find((e) => e.id==el.id)
    const J = dataJ.find((e) => e.id==el.id)
    return { ...el, ...Z, ...J }
  })
  // dialog edit
  const [useropen,setUser] = useState(null)
  // dialog add
  const [openAdd,setOpenAdd] = useState(false)
  //delete
 function deleteUser(id:number) {
   DeleteJ(id)
   DeleteZ(id)
   dispatch(DeleteR(id))
 }  
 const [info,setInfo] = useState(null)
  return (
    <>
    <Dialoginfo info={info} setInfo={setInfo}/>
      <div>
         <button onClick={()=>setOpenAdd(true)}>add</button>
         <DialogEdit user={useropen}  openUser={setUser}/>
         <DialogAdd open={openAdd} setOpen={setOpenAdd}/>
         
        <div>
          {user.map((el) => {
            return (
              <div style={{width:"200px",height:"200px",border:'1px solid gray'}} key={el.id}>
                <h4>{el.name}</h4>
                <h4>{el.age}</h4>
                <h2>{el.status ? "online" : "offline"}</h2>
                <button style={{color:'black'}} onClick={()=>deleteUser(el.id)}>delete</button>
                <button style={{color:'black'}} onClick={()=>setUser(el)}>edit</button>
                <button onClick={()=>setInfo(el)}>info</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
