import { atom } from "jotai";

export const dataAtom = atom([
    {
        id:1,
        name:'safar'
    },
    {
        id:2,
        name:'hoji'
    }
])

interface User{
    id:number,
    name:string
}

export const DeleteUserJ =atom(null,(get,set,id)=>{
    set(dataAtom,get(dataAtom).filter((el)=>el.id!==id))
})
export const EditUserJ =atom(null,(get,set,user:User)=>{
    set(dataAtom,get(dataAtom).map((el)=>el.id===user.id?user:el))
})
export const AddUserJ =atom(null,(get,set,user:any)=>{
    set(dataAtom,[...get(dataAtom),user])
})
    
