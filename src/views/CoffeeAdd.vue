<template>
	<div class="page">
		<div>
			<h4>Thêm Sản Phẩm</h4>
			<CoffeeForm
				:coffee="{}"
				:resetAfterSubmit="false"
				@submit:coffee="saveCoffee"
			/>
		</div>
	</div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import CoffeeForm from "@/components/CoffeeForm.vue";
import CoffeeService from "@/services/coffee.service";

export default {
	components: {
		CoffeeForm,
	},
	methods: {
		async saveCoffee(data) {
			try {
				await CoffeeService.create(data);
				swtoast.success({
					text: "Sản phẩm được thêm thành công.",
				});
			} catch (error) {
				console.log(error);
				swtoast.error({
					text: "Đã có lỗi xảy ra.",
				});
			}
		},
	},
};
</script>
