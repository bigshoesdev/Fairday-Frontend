
export const getMessage = (category: string): any => {

  return localStorage.getItem("message") || "[]"

};


export const getMessageFromLocalStorage = (category: string): any => {

  let currentMessageString: string = getMessage(category)
  let currentMessage = getUnrepeatedList(JSON.parse(currentMessageString))

  return currentMessage

};


export const setMessage = (category: string, key: string, value: string): any => {

  let currentMessageString: string = getMessage(category)
  let currentMessageJson = JSON.parse(currentMessageString)

  currentMessageJson.unshift({ [key]: value })

  localStorage.setItem("message", JSON.stringify(getUnrepeatedList(currentMessageJson)))
  return getUnrepeatedList(currentMessageJson)

};

export const removeMessage = (category: string, order: number): any => {
  let currentMessageString: string = getMessage(category)
  
  let currentMessageJson = JSON.parse(currentMessageString).filter((item: any, index: any) => index !== order)
  
  let currentMessageList = JSON.stringify(currentMessageJson)
  localStorage.setItem("message", currentMessageList)

  let bufferCurrentMessageString: string = getMessage(category)

  let bufferCurrentMessageJson = JSON.parse(bufferCurrentMessageString)
  return bufferCurrentMessageJson
};


export const getUnrepeatedList = (list): any => {

  let result = []

  list.forEach((element: any) => {
    if (!result.some((item: any) => item.key === element.key && item.value === element.value)) result.push(element)
  });

  return result

}