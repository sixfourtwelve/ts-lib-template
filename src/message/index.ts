type Message = {
  title: string
  content: string
  date: string
}

export function createMessage(title: string, content: string): Message {
  return {
    title,
    content,
    date: new Date().toLocaleDateString(),
  }
}
