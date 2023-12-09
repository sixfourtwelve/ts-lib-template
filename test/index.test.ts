import { createMessage } from '@message/index'
import { describe, expect, it } from 'vitest'

describe('message type tests', () => {
  it('createMessage', () => {
    const message = createMessage('title', 'content')
    expect(message.title).toBe('title')
    expect(message.content).toBe('content')
    expect(message.date).toBe(new Date().toLocaleDateString())
  })
})
