import { create } from "zustand"

export const useZustand = create((set) => ({
  dataZ: [
    {
      id: 1,
      age: 23,
    },
    {
      id: 2,
      age: 21,
    },
  ],
   DeleteZ: (id:number) =>set((state)=>({
   dataZ : state.dataZ.filter((el)=>el.id!==id)
  })),
   EditZ: (user:any) =>set((state)=>({
   dataZ : state.dataZ.map((el)=>el.id===user.id?user:el)
  })),
   AddZ: (user:any) =>set((state)=>({
   dataZ : [...state.dataZ, user]
  }))
}))
