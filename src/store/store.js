import { defineStore } from "pinia";

const Storerage_key = 'cart-items'

const cartStore = defineStore('cart', {
        state: () => ({
             listItems: JSON.parse(localStorage.getItem(Storerage_key)) || []
        }),
        getters: {
                sumItems: (state) => state.listItems.reduce((sum,item) => sum + item.quantity, 0),
            sumPrice: (state) => state.listItems.reduce((sum,item) => {
                      return sum + (item.price * item.quantity)
            }, 0)
        },
        actions: {
            addItem(item) {
                  const found = this.listItems.find(i => i.id === item.id);
                  if(found){
                         found.quantity += item.quantity;
                  }else {
                       
                          this.listItems.push({ ...item });
                  }
               
                  this.saveLocalStorage()
            },
         
            increaseQuantity(index) {
                     this.listItems[index].quantity += 1;
                        this.saveLocalStorage();
            },
            decreaseQuantity(index) {
                 if (this.listItems[index].quantity > 1) {
                             this.listItems[index].quantity -= 1;
                         this.saveLocalStorage();
                     } else {
                             this.removeItem(index);
                }
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