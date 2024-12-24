const map = {
    101: "John Doe",
    102:"Jane Smith",
    103:"Peter Johnson"
} 

const entries = Object.entries(map)

const sortedEntries = entries.sort((a,b)=> a[1].localeCompare(b[1]))
const sortedMap = Object.fromEntries(sortedEntries)
console.log(sortedMap)