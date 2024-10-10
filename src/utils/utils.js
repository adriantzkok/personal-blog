export function dateParser(timestamp) {
  const date = new Date(Number(timestamp)) // Convert the timestamp to a Number and create a Date object

  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0')
  const year = date.getFullYear()

  return `${month}-${day}-${year}`
}

// Example usage:
console.log(dateParser('1728358336084')) // Output: MM-dd-YYYY
