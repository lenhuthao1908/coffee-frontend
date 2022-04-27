<script>
export default {
    props: {
        coffee: { type: Object, required: true },
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>{{ coffee.name }}</strong>
            
        </div>
        <div class="p-1">
            <i>{{ coffee.price }}đ</i>
        </div>
        <div class="p-1">
            <p>{{ coffee.description }}</p>
        </div>
        <div class="p-1">
            Số lượng:
            <input type="number" name="quantity" min="1" max="10" value="1" >
        </div>
    </div>

    <div>
        <button class="btn-detail" @click="gotoCart">
                    <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
        </button>
    </div>
</template>

<style>
    .btn-detail{
        background-color: #C8E2B1;
        border: none;
        border-radius: 5px;
        color: #006400;
        margin: 20px 0 0 60px;
    }
    .btn-detail:hover {
        color: #fff;
        background-color: #006400;
    }
</style>
