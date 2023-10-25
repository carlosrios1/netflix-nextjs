"use client"
import Input from "@/components/Input";
//El useCallback optimiza el rendimiento de los componentes, se encarga de memorizar funciones en react
//Se puede usar el useCallback para evitar que una función se cree nuevamente en cada renderizado de tu componente, lo que puede ser especialmente útil en situaciones en las que pasas funciones como propiedades a componentes hijos.
import { useCallback, useState } from "react";

function Auth() {
  // Se crean las variables de estado con el hook de React (useState) el cual inicializará en vacío
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  //Se hará un toggle, el cual manejará el  parrafo que esta debajo del boton 'Login'
  const [variant, setVariant] = useState('login');

  //Se hace la funcion del toggle el cual usara un hook de react (useCallBack) para manejarlo
  const toggleVariant = useCallback(() => {
    //La variante actual estará seteada mientras sea igual al 'login' donde se maneja el estado del toggle y sino cambiará a 'register'
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
  }, [])

  return (
    // Header con el fondo hero que es el de netflix e importa la img que es donde va el logo
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </nav>

        {/* Contenedor principal */}
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">

            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign in' : 'Register'}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                // Se importa el componente Input que se creó en /components/Input
                <Input
                  label="Username"
                  onChange={(e: any) => setName(e.target.value)}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />

              <Input
                label="Password"
                onChange={(e: any) => setPassword(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>

            {/* Se agrega el boton */}
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign up'}
            </button>

            <p className="text-neutral-500 mt-12">
              {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
