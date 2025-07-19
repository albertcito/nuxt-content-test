const r=s=>`https://picsum.photos/id/${(Math.abs(s.split("").reduce((t,e)=>(t<<5)+t+e.charCodeAt(0),0))+"").substring(0,2)}/800/500`;export{r as g};
