<template>
    <form>
        <span>
            <label class="lab_text">Id
                <input class="inp_text" v-model="id" type="number" name="id" placeholder="Add Id" required>
            </label><br>
        </span>
        <span>
            <label class="lab_text">Email
                <input class="inp_text" v-model="email" type="email" name="email" placeholder="Add email" required>
            </label><br>
        </span>
        <span>
            <label class="lab_text">Task
                <input class="inp_text" v-model="text" type="text" name="task" placeholder="Add Task" required>
            </label><br>
        </span>
        <span>
            <label class="lab_text">Day & Time
                <input class="inp_text" v-model="day" type="text" name="day&time" placeholder="Add Day & Time" required>
            </label><br>
        </span>
        <span>
            <label class="reminder" for="SetRemider"> Set Remider
            <input type="checkbox" v-model="reminder" id="SetRemider" name="SetRemider" value="True">
            </label><br>
        </span>
        <input type="submit" @click="AddTask()" value="Save Task" class="btn btn-block">
    </form>
</template>

<script>
import axios from 'axios' ;
export default {
    name: 'AddTask',
    data(){
        return{
            id:'',
            email:'',
            text:'',
            day:'',
            reminder: false,
        }
    },
    methods:{
        async AddTask(){
            const result = await axios({
                method: 'post',
                url: "http://localhost:3000/create_update_user?TaskId="+this.id+"&Email="+this.email,
                headers: {}, 
                data: {
                    Task: this.text,
                    Day: this.day
                }
            });

        }
            
     }
}
</script>

<style scoped>
    form{
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
    }
    .lab_text{
        display: flex;
        flex-direction: column;
        margin:-10px 1rem;
    }
    .reminder{
        margin: 0px 1rem;
    }
    .inp_text{
        height: 2rem;
        font-size: 1.3rem;
    }
</style>