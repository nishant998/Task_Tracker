<template>
  <div class="container">
    <Header title = "Task Tracker"/>
    <AddTask/>
    <Tasks @delete-task="DeleteTask" :tasks='tasks'/>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data(){
    return{
      tasks:[]
    }
  },
  methods:{
    async DeleteTask(id,email){
      if (confirm("Are you sure ? ")){
        // this.tasks = this.tasks.filter((task)=>task.TaskId!==id)
        const result = await axios({
                method: 'delete',
                url: "http://localhost:3000/delete_user?TaskId="+id+"&Email="+email,
                headers: {}, 
            });
          }
          window.location.reload(true);
    }
  },
  created(){
    axios.get("http://localhost:3000/get_all")
    .then(response => this.tasks = response.data);
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
