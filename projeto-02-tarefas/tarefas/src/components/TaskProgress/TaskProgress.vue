<template>
    <div class="TaskProgress">
        <span class="progress-value">{{ progress }}%</span>
        <div class="progress-bar" :style="{width: progress + '%'}"></div>
    </div>
</template>

<script>
    export default {
        props: {
            progress: { type: Number, default: 0}
        },
    };
</script>

<style>
    .TaskProgress {
        position: relative;
        width: 80%;
        border: 1px solid #fff;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        margin-bottom: 15px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .progress-bar {
        position: absolute;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        height: 100%;
        background-color: #4CAF50;
        align-self: flex-start;
    }

    .progress-value {
        z-index: 1;
        font-size: 1.5rem;
    }
</style>
