import React,{useEffect,useRef} from 'react';
import happyMusic from './resource/happyMusic.m4a'

export const HappyMusic =()=>{
    const ref = useRef(false);
    useEffect(() => {
        function goPlay(){
            if(ref.current) return 
            const audio = document.querySelector('#audio');
            audio.play().then(()=>{
                ref.current = true
            })
        }

        // document.addEventListener('click',goPlay)

        return ()=>document.removeEventListener('click',goPlay)
    }, []);

    return <audio 
    id='audio'
    preload="auto"
    autoPlay
    loop
    controls
    src={happyMusic}
    />
}