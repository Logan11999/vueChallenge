const area = (x, y) => { return x * y }

const adder = new Vue({
  el: '#area',
  data: {
    base: 5,
    height: 3
  },
  computed: {
    result: function () {
      const b = parseInt(this.base)
      const h = parseInt(this.height)
      return `The area is ${area(b, h)}.`
    }
  }
})