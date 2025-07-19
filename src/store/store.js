import { defineStore } from "pinia";

const Storerage_key = 'cart-items'

const cartStore = defineStore('cart', {
        state: () => ({
             listItems: JSON.parse(localStorage.getItem(Storerage_key)) || []
        }),
        getters: {
            sumItems: (state) => state.listItems.length,
            sumPrice: (state) => state.listItems.reduce((sum,item) => sum + item.price, 0)
        },
        actions: {
            addItem(item) {
                this.listItems.push(item);
                  this.saveLocalStorage()
            },
            removeItem(index) {
                this.listItems.splice(index, 1)
                 this.saveLocalStorage()
                
            },
            saveLocalStorage() {
      localStorage.setItem(Storerage_key, JSON.stringify(this.listItems))
    }
        }
})

export default cartStore;