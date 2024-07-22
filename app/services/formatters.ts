export const cepFormatMask = (ev: any) => {
    ev.target.maxLength = 9
    let { value } = ev.target
  
    value = value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  
    ev.target.value = value
}