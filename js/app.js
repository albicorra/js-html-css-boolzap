let homePage = document.getElementById('home-page')
 

const app = new Vue ({
    
    el: '#app',
    data: {

        contact: [
            {
                name: 'michele',
                avatar: 'https://doodleipsum.com/300x300/avatar-2?i=03730f4cd3bb280fde679b017fd9fc50',
                active: false,
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
                name: 'fabio',
                avatar: 'https://doodleipsum.com/300x300/avatar-2?i=2fa0df73fe58cc54367f9fdd8d86b073',
                active: false,
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
                name: 'samuele',
                avatar: 'https://doodleipsum.com/300x300/avatar-2?i=a84e32424b61b2c7a0c4e9d6451375c2',
                active: false,
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
                name: 'luisa',
                avatar: 'https://doodleipsum.com/300x300/avatar-2?i=560a7437a5808aa3102849d9e89fa0c5',
                active: false,
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

        ],

        currentIndex: 0,
        newMessageText: '',

        inputSerch: '',

    },

    methods:{

        contactChat: function(index){

            this.currentIndex = index + 1;
            this.inputSerch = ''

        },

        

        sendMessage: function(index){

            console.log(this.newMessageText);
            console.log(this.contact[index].messages);

            const d= new Date()

            if( this.newMessageText.length > 0 ){

                this.contact[index].messages.push(
                    {
                        date: `10/01/2020 15:50:00`,
                        text: this.newMessageText,
                        status: 'sent'
                    }
                )

            }

            this.newMessageText = '';

            setTimeout( ()=> {

                console.log(this)
                this.replyMessage(index)

            }, 1000);

        },

        replyMessage: function(index){

            this.contact[index].messages.push(
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ok!',
                    status: 'received'
                }
            )

        },

        serchContact: function() {

            /* if (!this.contact.name.includes(this.inputSerch)) {
                console.log(this.contact.visible)
            } */

            this.contact.forEach( el => {
                
                if (!el.name.includes(this.inputSerch)) {
                    el.visible = false
                }else{
                    el.visible = true
                }

            });


        }

    },

})