<template>
  <div>
    <v-form>
      <v-flex class="mx-8 my-8" md-auto>
        <v-text-field v-model="note" label="To do :" outlined></v-text-field>
        <v-btn @click="addNote()">Ajouter note</v-btn>
      </v-flex>
    </v-form>

    <v-card class="mx-12" md-auto tile>
      <v-toolbar color="gray" dark>
        <v-spacer></v-spacer>
        <v-toolbar-title class="headline text-uppercase">Notes</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-list-item
        v-for="(todo, i) in todos"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title>{{ todo.content }}</v-list-item-title>
        </v-list-item-content>
        
        <v-list-item-action>
          <v-btn icon @click="deleteNote(i)">
            <v-icon color="grey lighten-1">Supprimer</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import { db } from '@/db'

  export default {
		props: {
      
    },
		data() {
      return {
        todos: [],
        note: ''
      }
    },
    firestore: {
      todos: db.collection('todos'),
    }, 
		methods: {
			addNote(){
        db.collection('todos').add({
          content: this.note
        })
        this.note = ''
      },
      deleteNote(i){
        db.collection('todos')
          .doc(this.todos[i].id)
          .delete()
      }
		}
  }
</script>
