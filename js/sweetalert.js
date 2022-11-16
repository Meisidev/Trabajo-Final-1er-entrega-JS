//usamos promises para realizar un sweet alert
setTimeout(() => {
    Swal.fire({
        title: 'Bienvenido! Sos mayor de edad?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Soy mayor!',
        denyButtonText: `No`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Adelante!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Busca a un mayor!', '', 'info')
            }
        })
}, 2000);

