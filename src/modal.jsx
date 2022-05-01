import React,{useEffect} from 'react';

import { createPortal } from 'react-dom';


const modalRootEl = document.querySelector('#modal');

const el = document.createElement('div');

export function Modal(props){
  useEffect(()=>{
    modalRootEl?.appendChild(el);
    return ()=>modalRootEl.removeChild(el);
  },[])

return createPortal(
    props.children,
    el,
);
}
