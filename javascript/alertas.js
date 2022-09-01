
function mostrarMensaje( mensaje ) {
    Swal.fire({
      title: mensaje,
      icon: 'success',
      showConfirmButton: false,
      timer: 3500,
      allowOutsideClick: () => {
        const popup = Swal.getPopup()
        popup.classList.remove('swal2-show')
        setTimeout(() => {
          popup.classList.add('animate__animated', 'animate__headShake')
        })
        setTimeout(() => {
          popup.classList.remove('animate__animated', 'animate__headShake')
        }, 500)
        return false
      }
    })
  }
  
  function mostrarError( mensaje ) {
    Swal.fire({
      title: "Error",
      text: mensaje,
      icon: "error",
      button: "Ok",
      allowOutsideClick: () => {
        const popup = Swal.getPopup()
        popup.classList.remove('swal2-show')
        setTimeout(() => {
          popup.classList.add('animate__animated', 'animate__headShake')
        })
        setTimeout(() => {
          popup.classList.remove('animate__animated', 'animate__headShake')
        }, 500)
        return false
      }
    })
  }