import{useEffect,useState}from'react';
export function useReducedMotion(){const[m,setM]=useState(false);useEffect(()=>{const q=matchMedia('(prefers-reduced-motion: reduce)');setM(q.matches);const f=()=>setM(q.matches);q.addEventListener('change',f);return()=>q.removeEventListener('change',f)},[]);return m}
