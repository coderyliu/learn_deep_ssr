export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatP: (price: number) => price.toFixed(2)
    }
  }
})