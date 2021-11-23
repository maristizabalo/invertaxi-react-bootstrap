import React from "react";
import { db, functions } from "../../firebase";

const AdminUsuarios = () => {
  const [usuarios, setUsuario] = React.useState([]);

  React.useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const res = await db.collection("usuarios").get();
      setUsuario(res.docs.map((doc) => doc.data()));
    } catch (error) {
      console.log(error);
    }
  };

  const supervisor = (email) => {
    if (!email.trim()) {
      return console.log("email vacio");
    }

    const agregarRol = functions.httpsCallable("agregarSupervisor");

    agregarRol({ email: email }).then((res) => {
      console.log(res);
      if (res.data.error) {
        return console.log("no tiene permisos");
      }

      db.collection("usuarios")
        .doc(email)
        .update({ rol: "supervisor" })
        .then((user) => {
          console.log("Usuario modificado rol supervisor");
          fetchUsuarios();
        });
    });
  };
  return (
    <div>
      <div className="col px-0 flex-grow-1 ">
        <h3>Administracion de usuarios</h3>
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="m-2">
            {usuario.email} - rol: {usuario.rol}
            <button
              className="btn btn-danger m-2"
              onClick={() => supervisor(usuario.email)}
            >
              Supervisor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUsuarios;
