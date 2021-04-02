var app = new Vue({
    el:'#app',
    
    data: {
        
        contactIndex: 0,
        activeMessage: '',
        searchBar: '',
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: 'img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Filippo',
                avatar: 'img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Allora andiamo a mangiare lì stasera',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Martina',
                avatar: 'img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Andiamo!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Dove?',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Marco',
                avatar: 'img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Chi sei?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Un tuo collega',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Giovanna',
                avatar: 'img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'A che ora torni domani?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Non lo so ti faccio sapere',
                        status: 'received'
                    }
                ],
            }
        ]
        
    },

    methods:  {

        selectedUser: function(i) {
            this.contactIndex = i
        },
        
        displayMessage: function(x) {
            if (x.status === 'sent') {
                return 'sent-message'
            } else {
                return 'received-message'
            }
        },

        botResponse: function() {
            setTimeout(() => {
                this.activeMessage = 'ok';
                this.contacts[this.contactIndex].messages.push({date: this.messageDate(), text: this.activeMessage, status:'received'})
                this.activeMessage='';
            }, 1000);
        },

        messagePush: function() {
            this.contacts[this.contactIndex].messages.push({date: this.messageDate(), text: this.activeMessage, status:'sent'})
            this.activeMessage = '';
            this.botResponse();
        },

        lastLogIn: function(i) {
            const messages = this.contacts[i].messages;
            const lastIndex = messages.length - 1;
            const lastAccess = messages[lastIndex].date;
            return lastAccess;
        },

        searchContact: function() {
            this.contacts.forEach((el) => {
              if (el.name.toLowerCase().startsWith(this.searchBar.toLowerCase())) {
                el.visible = true;
              } else {
                el.visible = false;
              }
            });
        },

        messageDate: function() {
          const date = dayjs().format();
          const actualDate = dayjs(date).format('DD/MM/YYYY HH:mm:ss');
          return actualDate
        },

        infoMenu: function(i) {
            const menu = document.getElementsByClassName('info-menu')[i];
            menu.classList.toggle('show');
        },

        removeMessage: function(index) {
            this.contacts[this.contactIndex].messages.splice(index, 1);
            console.log(index);
        }

    }

})

Vue.config.devtools = true;
