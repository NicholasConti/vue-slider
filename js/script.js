
const { createApp } = Vue;
    
createApp({
    data(){
        return {
            indexImg: 0,
            timeOutTime: 3,
            currentInterval: null,
            slides : [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ]
        }
    },
    methods: {
        //function for previous image
       prevImg(){
        this.indexImg--;
        if(this.indexImg < 0){
            this.indexImg = this.slides.length - 1;
        }
       },
       //function for next image
       nextImg(){
        this.indexImg++;
        if(this.indexImg > this.slides.length - 1){
            this.indexImg = 0;
        }
       },
       //function for clicked image
       selectedImg(index, event){
        this.indexImg = index;
       },
       stopAutoplay(){
            clearInterval(this.currentInterval);
       },
       startAutoplay(){
        this.currentInterval = setInterval(() => {
            this.nextImg();
          }, this.timeOutTime * 1000);
       }
    },
    mounted(){
        this.startAutoplay();
    }
}).mount('#app');