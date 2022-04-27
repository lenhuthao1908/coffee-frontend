<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>

<template>
    <div class="input-group input-css">
        <input
            type="text"
            class="form-control form-control-css"
            placeholder="Nhập sản phẩm cần tìm"
            :value="modelValue"
            @input="updateModelValue"
            @keyup.enter="submit"
        />
        <div class="input-group-append">
            <button
                class="btn btn-outline-secondary btn-css"
                type="button"
                @click="submit"
            >
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
</template>

<style>
    .form-control-css {
        max-width: 250px;
    }
    .form-control-css:hover {
        box-shadow: 1px 1px black;
    }

    .btn-css {
        font-size: 16px;
        background-color: whitesmoke;
    }

    .btn-css:hover {
        background-color: #006400;
    }

    .input-css {
        position: absolute;
        top: -64px;
        right: -240px;
    }
</style>