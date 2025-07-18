<template>
  <div class="p-4 border rounded shadow bg-white">
    <table class="w-full border-collapse table-auto text-left">
      <thead>
        <tr>
          <th
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            class="border px-4 py-2 bg-lime-700 text-center text-white font-bold"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td
            v-for="(col, colIndex) in columns"
            :key="colIndex"
            class="border px-4 py-2 text-center"
            contenteditable
            @input="onEdit(rowIndex, colIndex, $event)"
          >
            {{ row[colIndex] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  rows: { type: Number, required: true },
  columns: { type: Array, required: true },
  data: { type: Array, default: () => [] } // dữ liệu ban đầu, có thể ít hơn rows
});

const tableData = ref([]);

// Tạo bảng dựa trên dữ liệu và số hàng/cột
const initTable = () => {
  tableData.value = Array.from({ length: props.rows }, (_, rowIndex) => {
    return props.data[rowIndex]
      ? [...props.data[rowIndex]]
      : Array.from({ length: props.columns.length }, () => '');
  });
};

const onEdit = (rowIndex, colIndex, event) => {
  tableData.value[rowIndex][colIndex] = event.target.innerText;
};

watch(
  () => [props.rows, props.columns, props.data],
  initTable,
  { immediate: true }
);
</script>

<style scoped>
td[contenteditable]:focus {
  outline: 2px solid #3b82f6;
  background-color: #f0f9ff;
}
</style>
