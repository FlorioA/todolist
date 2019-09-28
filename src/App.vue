<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">To Do List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title class="font-weight-light">by Adrien Florio</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <TodoList title="toto"/>
    </v-content>
  </v-app>
</template>

<script>

import TodoList from './components/TodoList'

export default {
  name: 'App',
  components: {
    TodoList
  },
  data: () => ({
    //
  }),
};
</script>
