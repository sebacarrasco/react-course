const getUsuarioActivo = (nombre) => ({
    uid: '123456',
    username: nombre
});

const usuarioActivo = getUsuarioActivo("Seba");
console.log(usuarioActivo)