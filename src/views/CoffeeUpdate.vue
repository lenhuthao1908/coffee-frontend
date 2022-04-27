<template>
    <div v-if="coffee" class="page">
        <h4>Chỉnh sửa sản phẩm</h4>
        <CoffeeForm
            :coffee="coffee"
            @submit:coffee="updateCoffee"
            @delete:coffee="deleteCoffee"
        />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import CoffeeForm from "@/components/CoffeeForm.vue";
import CoffeeService from "@/services/coffee.service";

export default {
    components: {
        CoffeeForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            coffee: null,
            message: "",
        };
    },
    methods: {
        async getCoffee(id) {
            try {
                this.coffee = await CoffeeService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },

        async updateCoffee(data) {
            try {
                await CoffeeService.update(this.coffee.id, data);
                this.message = "Sản phẩm được cập nhật thành công.";
            } catch (error) {
                console.log(error);
            }
        },

        async deleteCoffee() {
            if (confirm("Bạn muốn xóa Sản phẩm này?")) {
                try {
                    await CoffeeService.delete(this.coffee.id);
                    this.$router.push({ name: "home" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getCoffee(this.id);
        this.message = "";
    },
};
</script>