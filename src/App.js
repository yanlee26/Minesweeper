import React ,{useState,useEffect} from 'react';
import {GOOD_LUCK_TIMES,BG,mineNDimensionBgArray} from './data'
import {HappyMusic} from './music'
import './app.css'
import { Modal } from './modal';
const NDimension= 8;
export const App =()=>{
   const [mineArray, setMineArray] = useState(()=>mineNDimensionBgArray(NDimension));
   const [times, setTimes] = useState(0);
   const [showError,setShowError] = useState(false);
   const [boom,setBoom] = useState(false);
   const onClick=(k,t)=>{
      const item = mineArray[k][t];
      setTimes(times+1)
      if(item.value === BG){
         setShowError(true);
         const newArray = mineArray.map(i=>i.map(t=>{
            t.value=BG;
            t.clicked=true;
            setBoom(true)
            return t
         }));
         setMineArray(newArray);
         return
      }
      let newLine ={};
      if(item.clicked && item.value !== BG){
         newLine = {...item,clicked:false};
      } else {  
         newLine = {...item,clicked:true};
      }
      mineArray[k].splice(t,1,newLine);
      setMineArray([...mineArray]);
   }
   useEffect(() => {
     if(GOOD_LUCK_TIMES.includes(times)){
      window.alert(`你真优秀，已经得分${times}！`)
     }
   }, [times]);
   const reset = ()=>{
      setMineArray(mineNDimensionBgArray(NDimension));
      setShowError(false);
      setTimes(0);
      setBoom(false)
   }
   const handleHide = ()=>{
      setBoom(!boom)
   }
   return<div className='outer'>
            <div className='outer_button'>
               <button onClick={reset}>
                  restart</button>
            </div>
            {showError && <div>Woo...,第{times} 次击中炸弹！</div>}
            <div className='outer_frame'>
            {mineArray.map((array,k)=>{
               return <div className={boom ?'outer_line boom':'outer_line'} key={k}>
                     { array.map((i,t)=>(<div key={t} 
                     className={i.clicked ? 'inner_row clicked':'inner_row'} 
                     onClick={(i)=>onClick(k,t)}>
                  { !i.clicked && <span aria-label={i.title}>{i.title}</span>}
                     <div className={i.clicked ?'':'emoji'}>{i.value}</div>
                     </div>)
                     )}
                  </div>
            })}
            </div>
            <HappyMusic/>
            {/* add modal */}
            {boom &&
               <Modal>
               <div className="modal">
               <div>
                  With a portal, we can render content into a different
                  part of the DOM, as if it were any other React child.
               </div>
               This is being rendered inside the #modal-container div.
               <button onClick={handleHide}>Hide modal</button>
               </div> 
            </Modal>
            }
            
         </div>
 
}