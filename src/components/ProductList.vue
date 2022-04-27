<script>
export default {
    props: {
        coffees: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex"],
    methods: {
        select(index) {
            this.$emit("update:activeIndex", index);
        }
    }
};
</script>

<template>
    <ul class="list-group">
        <li
            class="list-items"
            v-for="(coffee, index) in coffees"
            :key="coffee.id"
            :class="{ active: index === activeIndex }"
            @click="select(index)"
        >
            <i class="fa-solid " v-bind:class="[coffee.status ? 'fa-mug-saucer' : 'fa-burger']"></i>
            {{ coffee.name }}
            <div class="div-right">
                <i >{{coffee.price}}vnd</i>
            </div>
        </li>
    </ul>
</template>

<style>

    .list-items {
        background-color: #ccc;
        border: solid 1px black;
        border-radius: 5px;
        margin-top:10px;
        list-style-type: none;
        height: 50px;
        line-height: 50px;
        padding: 0px 8px;
    }

    .list-items:hover {
        background-color: #006400;
    }

    
    .div-right {
        float: right;
    }

    .div-right i {
        padding: 8px;
    }
    body {
        background-color: #CCFFFF;
    }

    

</style>