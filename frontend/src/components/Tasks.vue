<template>
    <div>
        <div v-for="task in tasks" :key="task.TaskId">
            <Task @delete-task="$emit('delete-task',task.TaskId,task.Email)" :task="task"/>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue'
export default{
    name:'Tasks',
    props:{
        tasks:Array,
    },
    components:{
        Task,
    },
    emits:['delete-task'],
}
</script>

<style scoped>

</style>
