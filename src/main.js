import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import firebase from 'firebase'
import VueFire from 'vuefire'
import router from './router/index.js'

Vue.config.productionTip = false

  var firebaseConfig = {
    apiKey: "AIzaSyAk_LR63zIxjZKG8c2S1ywDxy97DXISM7A",
    authDomain: "my-project-7ed15.firebaseapp.com",
    databaseURL: "https://my-project-7ed15.firebaseio.com",
    projectId: "my-project-7ed15",
    storageBucket: "my-project-7ed15.appspot.com",
    messagingSenderId: "826556909925",
    appId: "1:826556909925:web:209920c7d416eeac19b98c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firestore = firebaseApp.firestore();
  export const storage = firebase.storage().ref('/images');

Vue.use(VueFire)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: { App }
}).$mount('#app')
