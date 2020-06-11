<template>
  <v-app>
    <v-app-bar color="indigo" dark fixed app>
      <v-toolbar-title>Fabrica de memes</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-layout xs12 pl-2>
          <v-flex>
            <input type="file" ref="fileInput"
            id="file" @change="processfile($event)">
          </v-flex>
        </v-layout>

        <v-layout xs12 pb-10>
          <v-flex>
            <v-btn color="primary" @click="uploadFile">Enviar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import { firestore } from '@/main'
import { storage } from '@/main.js'

  export default{
    data: () => ({
      file: ''
    }),

    methods: {

      processfile: function(event) {
        this.file = event.target.files[0]
      },

      uploadFile: function() {
        let name = (+new Date()) + '-' + this.file.name
        let metada = {contentType: this.file.type}
        storage.child(name).put(this.file, metada)
        .then(snapshot => snapshot.ref.getDownloadURL())
      }
    }
  }
</script>
