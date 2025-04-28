

function eliminarProducto(id) {
    fetch(`/productos/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.mensaje);
      cargarProductos(); // Refresca la lista
    })
    .catch(error => console.error('Error al eliminar:', error));
  }
  





