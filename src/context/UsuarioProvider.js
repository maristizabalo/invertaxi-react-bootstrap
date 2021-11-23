import React from 'react'
import { auth,db,app } from '../firebase'

export const UsuarioContext = React.createContext()

const UsuarioProvider = (props) => {


    const dataUsuarioInicial = {
        email: null,
        uid: null,
        activo:null
    }

    const [usuario, setUsuario] = React.useState(dataUsuarioInicial)
    
    React.useEffect(() => {
        detectarUsuario()
    }, [])

    const detectarUsuario = () => {

        auth.onAuthStateChanged(user => {
            if(user){
                console.log(user)

                user.getIdTokenResult()
                    .then(idTokenResult => {
                        console.log(idTokenResult)
                        if(!!idTokenResult.claims.supervisor){
                            console.log('Es supervisor')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Supervisor'
                            })
                        }else if(!!idTokenResult.claims.adminTaller){
                            console.log('Es Administrador de taller')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Administrador de Taller'
                            })
                        }else if(!!idTokenResult.claims.conductor){
                            console.log('Es Conductor')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Conductor'
                            })
                        }else{
                            console.log('Es Invitado')
                            setUsuario({
                                email: user.email,
                                uid: user.uid,
                                activo: true,
                                rol: 'Invitado'
                            })
                        }
                    })

            }else{
                console.log(user)
                setUsuario({
                    email: null,
                    uid: null,
                    activo: false,
                    rol: null
                })
            }
        })
    }


    const iniciarSesion = async() => {
        try{
            const provider = new app.auth.GoogleAuthProvider()
            const res = await auth.signInWithPopup(provider)

            const existe = await db.collection('usuarios').doc(res.user.email).get()

            if(!existe.exists){
                await db.collection('usuarios').doc(res.user.email).set({
                    uid: res.user.uid,
                    email: res.user.email,
                    rol: 'invitado'
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    const cerrarSesion = () => {
        auth.signOut()
    }

    return (
        <UsuarioContext.Provider value={{usuario, iniciarSesion, cerrarSesion}}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider
