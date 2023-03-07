import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { useAppDispatch } from '../store/hooks';

export default function Login() {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const onLogin = (e: any) => {

    const myUser = {
      email: email,
      password: password
    }

    dispatch(login(myUser))
    return navigate('/dashboard');
  }

  return (
    <>
      <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 bg-[#1E293B]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-20 w-auto"
            src="https://seeklogo.com/images/U/universidad-nacional-pedro-henriquez-urena-logo-A8C3F68EE1-seeklogo.com.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-200">Accede a tu cuenta</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md rounded-full">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Correo electronico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={ (e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md py-1.5 border border-gray-500 text-gray-900 shadow-sm pl-3"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={ (e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border border-gray-500 py-1.5 text-gray-900 shadow-sm pl-3"
                  />
                </div>
              </div>

              <div className="flex justify-end">

                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Reestablecer contraseña
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onLogin}
                  className="flex w-full justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
                >
                  ENTRAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
