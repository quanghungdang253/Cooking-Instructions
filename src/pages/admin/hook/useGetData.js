import { ref } from 'vue'

export function useGetData(baseUrl) {
  const users = ref([])
  const orders = ref([])
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async () => {
    loading.value = true
    error.value = null

    try {
      const [usersRes, ordersRes, productsRes] = await Promise.all([
        fetch(`${baseUrl}/api/users`).then(res => res.json()),
        fetch(`${baseUrl}/api/orders`).then(res => res.json()),
        fetch(`${baseUrl}/api/products`).then(res => res.json())
      ])

      users.value = usersRes
      orders.value = ordersRes
      products.value = productsRes
    } catch (err) {
            error.value = err
                console.error('Lỗi khi lấy dữ liệu:', err)
    } finally {
                loading.value = false
    }
  }

  return {
    users,
    orders,
    products,
    loading,
    error,
    fetchData
  }
}