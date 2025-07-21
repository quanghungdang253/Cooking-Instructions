
<script setup>
    import Swal from 'sweetalert2'

    const props = defineProps({
        nameIcon: {
            type: String,
            required: true
        },
           title: {
            type: String,
            required: true
        },
           text: {
            type: String,
            required: true
        }
    })

Swal.fire({
        toast: true,
        position:'top-end',
         showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
      icon: props.nameIcon, 
       title: `<span style="font-weight:600; font-weight:900 font-size:25px">${props.title}</span>`,
  html: `<span style="color:#444;font-size:13px">${props.text}</span>`,
  title: props.title,
  text: props.text,
    customClass: {
    popup: 'custom-toast',
    timerProgressBar: 'custom-progress'
  },
    didOpen: (toast) => {
    toast.style.marginTop = '70px'; 
            toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
  
})




</script>
<style>
.custom-toast {
    padding: 16px 20px;
    border-radius: 12px;
         box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', sans-serif;
  min-width: 250px;
  max-width: 350px;
}

.custom-progress {
  background: linear-gradient(to right, #00b09b, #96c93d);
}
</style>