<template>
    <div :class="[task.remainder? 'remainder': 'remainder_0' , 'task']">
        <h2>{{task.TaskId}}</h2>
        <h3>
            {{task.Task}}
            <i @click="OnDelete(task.TaskId,task.Email)" class="fas fa-times">x</i>
        </h3>
        <h3>{{task.Day}}</h3>
        <h5>{{task.Email}}</h5>
    </div>
</template>

<script>
export default {
    name:'Task',
    props:{
        task:Object,
    },
    methods:{
      OnDelete(id){
        this.$emit('delete-task',id)
      }
    }
}
</script>

<style scope>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>