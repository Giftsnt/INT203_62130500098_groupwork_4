const app = {
    data() {
        return {
            tasks: [{
                    no: 1,
                    url: '/image/1.jpg',
                    done: false,
                    type: 'Korat'
                },
                {
                    no: 2,
                    url: '/image/2.jpg',
                    done: false,
                    type: 'American Shorthai'
                },
                {
                    no: 3,
                    url: '/image/3.jpg',
                    done: false,
                    type: 'Siamese'
                }
            ],
            isHidden: true,
            searchText: '',
            modal: false,
            imageModal: "",

        }
    },
    methods: {
        toggleDone(no) {
            //this.tasks[index].done = !this.tasks[index].done
            for (let index = 0; index <= this.tasks.length; index++) {
                const element = this.tasks[index];
                if (element.no == no) {
                  this.imageModal = element.url
                  element.done = !element.done;
                  if(element.done){
                    this.modal = !this.modal;
                  }
                  break
                }
              }
        },
        toggleModal(no) {
            this.modal = !this.modal;
        }
    },
    computed: {
        countdone() {
            return this.tasks.filter(t => t.done).length
        },
        searching() {
            return this.tasks.filter((member) => {
                return member.type
                    .toLowerCase()
                    .includes(this.searchText.toLowerCase());
            });
        }
    }

}
Vue.createApp(app).mount('#app')