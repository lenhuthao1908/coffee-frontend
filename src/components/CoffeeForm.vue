<template>
    <Form
        @submit="$emit('submit:coffee', coffeeLocal)"
        :validation-schema="coffeeFormSchema"
    >
        <div class="form-group">
            <label for="name">Tên sản phẩm</label>
            <Field
                name="name"
                type="text"
                class="form-control"
                v-model="coffeeLocal.name"
            />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="price">Giá sản phẩm</label>
            <Field
                name="price"
                type="text"
                class="form-control"
                v-model="coffeeLocal.price"
            />
            <ErrorMessage name="price" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="description">Mô tả sản phẩm</label>
            <Field
                name="description"
                type="text"
                class="form-control"
                v-model="coffeeLocal.description"
            />
            <ErrorMessage name="description" class="error-feedback" />
        </div>

        <div class="form-group form-check">
            <input
                name="status"
                type="checkbox"
                class="form-check-input"
                v-model="coffeeLocal.status"
            />
            <label for="status" class="form-check-label">
                <strong>Đồ uống</strong>
            </label>
        </div>

        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button
                v-if="coffeeLocal.id"
                type="button"
                class="ml-2 btn btn-danger"
                @click="$emit('delete:coffee', coffeeLocal.id)"
            >
                Xóa
            </button>
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:coffee", "delete:coffee"],
    props: {
        coffee: { type: Object, required: true }
    },
    data() {
        const coffeeFormSchema = yup.object().shape({
            name: yup
                .string()
                .required("Vui lòng nhập tên sản phẩm."),
            price: yup
                .string()
                .required("Vui lòng nhập giá sản phẩm."),
            description: yup.string().max(1000, "Mô tả sản phẩm tối đa 1000 ký tự."),
        });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            //  để liên kết với các input trên form
            coffeeLocal: this.coffee,
            coffeeFormSchema,
        };
    },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>