export const paddy = (n, p, c) => {
  const padChar = typeof c !== 'undefined' ? c : '0'
  const pad = new Array(1 + p).join(padChar)
  return (pad + n).slice(-pad.length)
}

export const timestampToString = (t, fmt) => {
  if (!t) return ''

  let date = (typeof (t) === 'object') ? t : new Date()
  if (t.toString().length === 10) date.setTime(t*1000)
  if (t.toString().length === 13) date.setTime(t)
  if (t.toString().length > 18) date = new Date(t)
  const yyyy = date.getFullYear()
  const M = date.getMonth() + 1
  const MM = paddy(M, 2)
  const d = date.getDate()
  const dd = paddy(d, 2)
  const hh = paddy(date.getHours(), 2)
  const mm = paddy(date.getMinutes(), 2)
  const ss = paddy(date.getSeconds(), 2)
  switch (fmt) {
    case 'dateTime': return `${yyyy}年${MM}月${dd}日 ${hh}:${mm}:${ss}`
    case 'shortDateTime': return `${yyyy}-${MM}-${dd} ${hh}:${mm}`
    case 'date': return `${yyyy}年${MM}月${dd}日`
    case 'shortDate': return `${yyyy}-${MM}-${dd}`
    case 'yyyy/M/d': return `${yyyy}/${M}/${d}`
    case 'month': return `${yyyy}年${MM}月`
    case 'shortMonthOnly': return `${MM}`
    case 'year': return `${yyyy}年`
    case 'timeOnly': return `${hh}:${mm}:${ss} `
    case 'hourMinute': return `${hh}:${mm}`
    case 'monthToMinutes': return `${MM}月${dd}日 ${hh}:${mm}`
    case 'shortMonthToMinutes': return `${MM}/${dd} ${hh}:${mm}`
    case 'mouthWithDay': return `${MM}月${dd}日`
    case 'dateEn': return `${dd}/${MM}/${yyyy}`
    default: return `${yyyy}-${MM}-${dd}`
  }
}

export const formatSeconds = (s) => {
  const hh = paddy(Math.floor(s / 3600), 2)
  const mm = paddy(Math.floor(s % 3600 / 60), 2)
  const ss = paddy(s % 3600 % 60, 2)
  return `${hh}:${mm}:${ss}`
}

export const localizeTimeString = (str) => {
  let parts = str.split('-')
  return `${parts[0]}年${parts[1]}月${parts[2]}日`
}

export const timestampToMonthString = (t) => {
  return timestampToString(t, 'month')
}

export const getDaysInMonth = (d) => {
  const r = new Date(d.getFullYear(), d.getMonth(), 1)
  r.setMonth(r.getMonth() + 1)
  r.setDate(r.getDate() - 1)
  return r.getDate()
}

export const trimByDay = (d) => new Date(d.getFullYear(), d.getMonth, d.getDate())

export const getFirstDayOfMonth = (d) => (new Date(d.getFullYear(), d.getMonth(), 1))

export const clone = (d) => new Date(d.getTime())

export const closedIntervalBetween = (leftBoundary, d, rightBoundary) => {
  return leftBoundary.getTime() <= d.getTime() && d.getTime() <= rightBoundary.getTime()
}

export const openedIntervalBetween = (leftBoundary, d, rightBoundary) => {
  return leftBoundary.getTime() < d.getTime() && d.getTime() < rightBoundary.getTime()
}

export const addMonths = (d, months) => {
  const newDate = clone(d)
  newDate.setMonth(d.getMonth() + months)
  return newDate
}

export const setDay = (d, day) => {
  const newDate = clone(d)
  newDate.setDate(day)
  return newDate
}

export const setMonth = (d, month) => {
  const newDate = clone(d)
  newDate.setMonth(month)
  return newDate
}

export const setYear = (d, year) => {
  const newDate = clone(d)
  newDate.setFullYear(year)
  return newDate
}

export const addColon = (time) => {
  if (!time) return ''
  time = `${time}`
  return `${time.slice(0, time.length-2)}:${time.slice(time.length-2)}`
}

export const getDurationArr = (start, end, fmt) => {
  const result = []
  const st = new Date(start)
  st.setHours(0)
  const et = new Date(end)
  et.setHours(23)
  while(st <= et){
    result.push(timestampToString(st, fmt))
    st.setDate(st.getDate() + 1)
  }
  return result
}