<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Room  
        <b-link href="/add-room">(Add Room)</b-link>
      </h2>
      <b-table striped hover :items="rooms" :fields="fields">
    
        <template #cell(actions)="row">
          <b-btn size="sm" @click.stop="join(row.item._id)">Join</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors" :key=error>
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'RoomList',
  data () {
    return {
     fields: [
        { key: "room_name",label : '룸이름', sortable: true, 'class': 'text-center' },
        {
          key: "created_date",
          label: "만든 날짜",
          sortable: true
        },
        {
          key: 'actions',
          label: "Action",
          'class': 'text-center' ,
         
        }
      ],
      rooms: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:4000/api/room`)
      .then(response => {
        
        this.rooms = response.data
        console.log(this.rooms)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    join (id) {
      console.log(id)
      this.$router.push({
        name: 'JoinRoom',
        params: { id: id }
      })
    }
  }
}
</script>
