
export interface Message {
  readonly title: string
  readonly type: 'success' | 'error' | 'info' | 'warning' | 'loading'
}
