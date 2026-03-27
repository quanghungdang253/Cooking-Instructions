import { ref, watch } from "vue";

const storedUser = localStorage.getItem("user");

const user = ref(storedUser ? JSON.parse(storedUser) : null);

watch(user, (val) => {
  if (val) {
    localStorage.setItem("user", JSON.stringify(val));
  } else {
    localStorage.removeItem("user");
  }
}, { deep: true });

export function useUser() {

  const setUser = (data) => {
    user.value = data;
  };

  const clearUser = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser
  };
}