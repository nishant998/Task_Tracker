<template>
    <button @click="onClick()" class="btn" type="submit" :style="{background:color}">{{text}}</button>
</template>

<script>
export default{
    name: 'Button',
    props:{
        text:{
            type:String,
            default:"Add task"
        },
        color:String,
    },
    methods:{
        onClick(){
            console.log("clicked")
        }
    }
}
</script>

<style scoped>

</style>
