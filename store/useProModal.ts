import { defineStore } from 'pinia'
const useProModal = defineStore('ProModal', {
    state: () => ({ isOpen: false, }),

    actions: {

        onOpen() {

            this.isOpen = true
        },
        onClose() {

            this.isOpen = false
        }


    },
})

export default useProModal