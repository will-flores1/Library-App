export function setupCounter(element: HTMLButtonElement) {
  let counter = Number(JSON.parse(localStorage.getItem("count")!)) || 0
  element.textContent = `count is ${counter}`
  const setCounter = (count: number) => {
    counter = count
    element.textContent = `count is ${counter}`
    localStorage.setItem('count', JSON.stringify(counter))
  }
  element.addEventListener('click', () => setCounter(++counter))
  // setCounter(0)
}
