export default function Dialoginfo({info,setInfo}) {
    if (!info) {
        return null
    }
  return (
    <dialog open={info}>
     <h1>{info.name}</h1>
     <h1>{info.age}</h1>
     <h1>{info.status?"online":"offline"}</h1>
     <button onClick={()=>setInfo(false)}>cancel</button>
    </dialog>
  )
}