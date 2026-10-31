import{useEffect,useState}from'react';
export type Progress={scene:number;opened:boolean;asked:number[];evidence:number[];verdict:string;unlocked:boolean};
const initial:Progress={scene:0,opened:false,asked:[],evidence:[],verdict:'',unlocked:false};
export function useStoryProgress(){
 const[state,setState]=useState<Progress>(()=>{try{return{...initial,...JSON.parse(localStorage.getItem('court-progress')||'{}')}}catch{return initial}});
 useEffect(()=>{try{localStorage.setItem('court-progress',JSON.stringify(state))}catch{/* private browsing */}},[state]);
 const patch=(p:Partial<Progress>)=>setState(s=>({...s,...p}));
 const reset=()=>{setState(initial);try{localStorage.removeItem('court-progress')}catch{/* noop */}};
 return{state,patch,reset};
}
