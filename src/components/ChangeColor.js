export const randomColor=()=>{
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random () *256);
    const b= Math.floor(Math.random () *256);

    return `rgb{${r}, ${g}, ${b}}`
}

export const generateRandomColor=num => {
    var arr = []
    for (let i=0;i<num;i++){
        arr.push(randomColor())
    }
    return arr
}