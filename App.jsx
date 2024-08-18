import { useState } from "react";

function Suqare({value,onSuClick}){
  return(
    <>
    <button className="h-16 w-16 border border-blue-950 m-1 leading-9 text-lg text-black font-bold hover:bg-green-600 hover:rounded-xl" onClick={onSuClick}>{value}</button>
    </>
  )
}


export default function Board() {

const[scure,setScure]=useState(Array(9).fill(null))
const [nextO,setNextO]=useState(true)
const winner = cW(scure);
let status;
if(winner){
 status = `winnner:${winner}`;
}else{
  status =" "+
  (nextO ? "x":"0");
}

function handClick(i){
  if(scure[i] || cW(scure)){
    return
  }
  const nextSq = scure.slice();
 if(nextO){
  nextSq[i]="X"
 }else{
  nextSq[i]="O"
 }
  setScure(nextSq)
  setNextO(!nextO)
}

  return (
   <>
    <h1 className="text-red-600 text-center text-[50px]  font-bold  ">next player <br/> ({status}-) </h1>
   <div className=" ml-48">
      
   <div className="flex">
    <Suqare   value={scure[0]} onSuClick={()=>handClick(0)}/>
    <Suqare   value={scure[1]} onSuClick={()=>handClick(1)}/>
    <Suqare   value={scure[2]} onSuClick={()=>handClick(2)}/>
   </div>
   <div className="flex">
   <Suqare   value={scure[3]} onSuClick={()=>handClick(3)}/>
    <Suqare   value={scure[4]} onSuClick={()=>handClick(4)}/>
    <Suqare   value={scure[5]} onSuClick={()=>handClick(5)}/>
   </div>
   <div className="flex">
   <Suqare   value={scure[6]} onSuClick={()=>handClick(6)}/>
    <Suqare   value={scure[7]} onSuClick={()=>handClick(7)}/>
    <Suqare   value={scure[8]} onSuClick={()=>handClick(8)}/>
   </div>
   </div>

   </>
  )
}

function cW(scure){
  const lines = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

  ];
  for (let i =0 ; i<lines.langth;i++){
    const[a,b,c]=lines[i];
    if(scure[a]===scure[b]&&scure[a]===scure[c]){
      return scure[a]
    }
  }
  return null
}