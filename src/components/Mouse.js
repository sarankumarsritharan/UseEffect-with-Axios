import React,{useState,useEffect} from 'react'

function Mouse() {
    const [x,setX]= useState(0)
    const [y,setY]= useState(0)

    const logMousePosition = e =>{
        console.log('mouse Event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Useeffect Called')
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log('Compnent unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }

    },[])


    return (
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}

export default Mouse
