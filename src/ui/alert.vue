
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
        position:'bottom-end',
         showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
      icon: props.nameIcon, 
  title: props.title,
  text: props.text,
})




</script>