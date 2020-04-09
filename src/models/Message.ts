
export interface Message {
  readonly content: string
  readonly type: 'success' | 'error' | 'info' | 'warning' | 'loading'
}
