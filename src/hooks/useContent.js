import content from "../data/content.json"
import componentContent from "../data/component-content.json"

const useContent = (page, isComponent = false) => {
  if (!content[page]) {
    console.error(`Could not find page [${page}]`)
  }
  const pageContent = isComponent ? componentContent[page] : content[page]
  const getContent = (keys) => {
    if (typeof keys === "string") {
      return pageContent[keys]
    }
    if (typeof keys === "object") {
      let lastElement = pageContent
      keys.forEach((key) => {
        lastElement = lastElement[key]
        if (!lastElement) {
          console.error(`Could not find key [${key}]`)
        }
      })
      if (
        typeof lastElement === "string" ||
        typeof lastElement === "number" ||
        Array.isArray(lastElement)
      ) {
        return lastElement
      }
      return ""
    }
  }
  return { content: getContent }
}

export default useContent
