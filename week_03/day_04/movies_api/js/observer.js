
const launchObserver =() => {
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      console.log("this entry is observed", entry)
      console.log("RATIO", entry.intersectionRatio)
      if (entry.intersectionRatio > 0.5) {
        entry.target.classList.remove("not-visible")
        observer.unobserve(entry.target)
      }
    })

  }
  const options = {
    threshold: [0.5]
  }
  const observer = new IntersectionObserver(callback, options)

  const items = document.querySelectorAll(".movie-card")
  items.forEach(item => {
    observer.observe(item)
  })

}




