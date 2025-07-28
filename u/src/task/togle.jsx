import React, { useCallback, useEffect, useState } from "react";

function Togle(){
    const [theme,settheme]=useState(()=>{
        return localStorage.getItem("theme") || "light"
    })

    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])

    
    const toggle= useCallback(()=>{
            settheme(prev=>prev==="light"?"dark":"light");
    },[])
      
    
     
    const themeStyle={
        backgroundColor: theme === "dark" ? "#111" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",  
    }

    return(
        <div  style={themeStyle}>
            <h4>{theme}</h4>
            <button onClick={toggle}> change them to {theme}</button>
        </div>
    )
}
export default Togle