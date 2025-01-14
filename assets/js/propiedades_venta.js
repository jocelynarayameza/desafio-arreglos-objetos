const propiedadesVenta = [
    {
        nombre: ' Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: "4 Habitaciones",
        baños: "4 Baños",
        costo: 5.000,
        smoke: false,
        pets: false
    },
    {
        nombre: "Apartamento acogedor en la montaña",
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: "2 Habitaciones",
        baños: "1 Baño",
        costo: 1.200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: "3 Habitaciones",
        baños: "3 Baños",
        costo: 3.500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento de lujo con vista al mar',
        src: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=600",
        descripcion: '"Este apartamento de lujo ofrece impresionantes vistas al mar y está ubicado en una exclusiva zona costera."',
        ubicacion: '456 Ocean Drive, Beachville, FL 33480',
        habitaciones: "3 Habitaciones",
        baños: "3 Baños",
        costo: 3.500,
        smoke: false,
        pets: true
    },

]








const htmlVenta = document.getElementById('venta');
let venta = ''
for (const propiedad of propiedadesVenta) {
    venta += `
        <div class="col-md-4 mb-4">
    <div class="card">
    <img src= ${propiedad.src} class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
      <h5 class="card-title">${propiedad.nombre}</h5>
      <p class="card-text">${propiedad.descripcion}</p>
      <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
      <p><i class="fas fa-bed"></i> ${propiedad.habitaciones}
        <i class="fas fa-bath"></i> ${propiedad.baños}</p>
        <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
    `
    if (propiedad.smoke) {
        venta += `<i class="fas fa-smoking"></i>Permitido fumar `
    } else {
        venta += `<i class="fas fa-smoking-ban"></i> No se permite fumar`
    }
    venta += `</div> </div>
    </div>`;
}

htmlVenta.innerHTML = venta;
