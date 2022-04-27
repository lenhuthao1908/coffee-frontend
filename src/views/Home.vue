<template>
    <div class="page row">
        <div class="col-md-6"></div>
        <div class="col-md-6">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                <i class="fa-solid fa-bars"></i>
                Danh Sách Sản Phẩm
            </h4>
            <ProductList
                v-if="filteredCoffeesCount > 0"
                :coffees="filteredCoffees"
                v-model:activeIndex="activeIndex"
            />
            <p v-else>Không có sản phẩm nào.</p>

            <div class="mt-3 row justify-content-around align-items-center">

                <button class="btn btn-sm btn-success" @click="goToAddCoffee">
                    <i class="fas fa-plus"></i> Thêm 
                </button>

                <button
                    class="btn btn-sm btn-danger"
                    @click="removeCoffees"
                >
                    <i class="fas fa-trash"></i> Xóa
                </button>
            </div>
        </div>
        <div id="detail-pro" v-if="activeCoffee">
            <div >
                <h4>
                    <i class="fa-solid fa-circle-info"></i>
                    Chi tiết Sản phẩm
                </h4>
                
                <Product :coffee="activeCoffee" />
                <router-link
                    :to="{
                        name: 'coffee.update',
                        params: { id: activeCoffee.id },
                    }"
                >
                    <span class="mt-2 edit">
                        <i class="fas fa-edit"></i></span
                    >
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Product from "@/components/Product.vue";
import InputSearch from "@/components/InputSearch.vue";
import ProductList from "@/components/ProductList.vue";
import CoffeeService from "@/services/coffee.service";

export default {
    components: {
    Product,
    InputSearch,
    ProductList,
},
    // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
    data() {
        return {
            coffees: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        coffeeStrings() {
            return this.coffees.map((coffee) => {
                const { name, price, description } = coffee;
                return [name, price, description].join("");
            });
        },
        filteredCoffees() {
            if (!this.searchText) return this.coffees;
            return this.coffees.filter((coffee, index) =>
                this.coffeeStrings[index].includes(this.searchText)
            );
        },
        activeCoffee() {
            if (this.activeIndex < 0) return null;
            return this.coffees[this.activeIndex];
        },
        filteredCoffeesCount() {
            return this.filteredCoffees.length;
        },
    },
    methods: {
        async retrieveCoffees() {
            try {
                this.coffees = await CoffeeService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveCoffees();
            this.activeIndex = -1;
        },

        async removeCoffees() {
            if (confirm("Bạn muốn xóa Sản Phẩm?")) {
                try {
                    await CoffeeService.delete(this.coffees[this.activeIndex].id);
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },

        goToAddCoffee() {
            this.$router.push({ name: "coffee.add" });
        },

        
    },
    mounted() {
        this.refreshList();
    },
};
</script>

<style scoped>
.page {
    text-align: left;
    max-width: 750px;
}

#detail-pro {
    margin-top: 62px;
    margin-left: 50px;
    border-radius: 10px;
    width: 300px;
    height:300px;
    padding:10px;
    background-color: #F5F5F5;
    box-shadow: 2px 3px #006400;
}

#detail-pro h4{
    text-align: center;
    color: #006400;
} 

.edit {
    color: red;
    font-size: 20px;
}
</style>