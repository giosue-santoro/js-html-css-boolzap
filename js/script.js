var app = new Vue({
    el:'#app',
    
    data: {
        contactIndex: 0,
        activeMessage: '',
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
                this.contacts[this.contactIndex].messages.push({date:'10/01/2020 15:30:55', text: this.activeMessage, status:'received'})
                this.activeMessage='';
            }, 1000);
        },

        messagePush: function() {
            this.contacts[this.contactIndex].messages.push({date:'10/01/2020 15:30:55', text: this.activeMessage, status:'sent'})
            this.activeMessage = '';
            this.botResponse();
        },

        lastLogIn: function(i) {
            const messages = this.contacts[i].messages;
            const lastIndex = messages.length - 1;
            const lastAccess = messages[lastIndex].date;
            return lastAccess;
        }
    }

})

Vue.config.devtools = true;