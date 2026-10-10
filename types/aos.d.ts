// The "aos" package ships no type definitions.
declare module "aos" {
  interface AosOptions {
    duration?: number
    easing?: string
    once?: boolean
    offset?: number
    delay?: number
    mirror?: boolean
    [key: string]: unknown
  }
  const AOS: {
    init(options?: AosOptions): void
    refresh(hard?: boolean): void
    refreshHard(): void
  }
  export default AOS
}
