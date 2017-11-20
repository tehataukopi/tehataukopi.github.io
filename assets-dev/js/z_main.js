var config = {
    apiKey: "AIzaSyCoA2BNFYkZy33SUenTFBnWbWkuFyANSoM",
    authDomain: "podcast-tehataukopi.firebaseapp.com",
    databaseURL: "https://podcast-tehataukopi.firebaseio.com",
    projectId: "podcast-tehataukopi",
    storageBucket: "podcast-tehataukopi.appspot.com",
    messagingSenderId: "801137064199"
};

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()
var podcastsRef = db.ref('podcasts')

Vue.component('modal', {
  template: '#modal-template'
})

var vm = new Vue({
    el: "#app",
    data:{
        loading: true,
        activeItemId: '',
        autoplay_status: false,
        podcasts: null,
        current_podcast: null,
        showModal: false
    },
    firebase: {
        podcasts: {
            source: podcastsRef,
            readyCallback:function() {
                this.current_podcast = this.podcasts[this.podcasts.length-1]
                this.activeItemId = this.podcasts.length-1
            }
        }
    },
    methods: {
        playPodcast: function (key) {
            this.current_podcast = this.podcasts[key]
            this.activeItemId = key
            this.autoplay_status = true
        }
    },
    mounted() {
        this.loading = false
    }
})
