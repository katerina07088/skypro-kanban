import { useState } from "react";

export const UseDate = ()=>{
    const [selected, setSelected] = useState(new Date);
    const selectedDate = (selected) =>{
        setSelected(selected)
    }
    return {selected, setSelected, selectedDate}
    } 