<template>
    <div class="TaskGrid">
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks"
                  @taskDeleted="$emit('taskDeleted', i)"
                  :key="task.name"
                  :task="task"
                  @taskStateChanged="$emit('taskStateChanged', i)">
            </Task>
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>
    </div>
</template>

<script>
    import Task from '../Task/Task.vue';

    export default {
        components: { Task },
        props: {
            tasks: { type: Array, required: true}
        },
    };
</script>

<style scoped>
    .TaskGrid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .TaskGrid .Task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
