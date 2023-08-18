export const calcIMC= (h,w)=>{

  const result = (w /(h/100)**2)
  return result.toFixed(2)

}