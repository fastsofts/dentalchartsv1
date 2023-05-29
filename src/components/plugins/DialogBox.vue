<template>
    <div>
        <div class="h-full w-full fixed top-0 left-0 z-20" v-on:click="hide"></div>
        <div class="bg-white rounded-lg text-lg pt-6 shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">

        </div>
    </div>
</template>

<script>
export default {
    name: "TheModalComponent",
    methods: {
        hide() {
            console.log('click registered');
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.bounce-enter-active {
    animation: bounce-in .5s ease-out both;
}

.bounce-leave-active {
    animation: bounce-in .5s reverse ease-in both;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.10);
    }
    100% {
        transform: scale(1);
    }
}
</style>
