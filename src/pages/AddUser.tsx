import { useState } from 'react'
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import esLocale from 'date-fns/locale/es';
import moment from 'moment';
import CedulaInput from '../shared/CedulaInput';
import PhoneInput from '../shared/PhoneInput';
import { useAppDispatch } from '../store/hooks';
import { addUser } from '../store/usersSlice'
import { useNavigate } from 'react-router-dom';

type Inputs = {
  names: string,
  lastname1: string,
  lastname2: string,
  cedula: string,
  age: number,
  gender: string,
  address: string,
  addressOptional?: string,
  telephone: string,
  email: string,
  maritalStatus: string,
  hasKids: string,
  birthdate: string
};

const AddUser = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { register, handleSubmit, watch, control, resetField, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      names: '',
      lastname1: '',
      lastname2: '',
      cedula: '',
      age: 0,
      gender: '',
      address: '',
      addressOptional: '',
      telephone: '',
      email: '',
      maritalStatus: '',
      hasKids: '',
      birthdate: ''
    }
  });

  const [show, setShowAddress] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = ( (data) => {

    const myUser = {
      names: data?.names.toUpperCase().trim(),
      lastname1: data?.lastname1.toUpperCase().trim(),
      lastname2: data?.lastname2.toUpperCase().trim(),
      cedula: data?.cedula.toUpperCase().trim(),
      age: Number(data?.age),
      gender: data?.gender.toUpperCase().trim(),
      address: data?.address.toUpperCase().trim(),
      addressOptional: data?.addressOptional?.toUpperCase().trim(),
      telephone: data?.telephone.toUpperCase().trim(),
      email: data?.email,
      maritalStatus: data?.maritalStatus.toUpperCase().trim(),
      hasKids: data?.hasKids.toUpperCase().trim(),
      birthdate: moment(data?.birthdate).toString()
    };


    dispatch(addUser(myUser))
    return navigate('/users-list');

  });
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow sm:overflow-hidden sm:rounded-md">
            <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
              <div>
                <h3 className="text-3xl font-semibold leading-6 text-gray-900">Agregar un usuario</h3>
                <p className="mt-3 text-sm text-gray-500">Aquí se agregarán los usuarios al sistema.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div>
                  <label htmlFor="names" className="block text-sm font-medium leading-6 text-gray-900">
                    Nombres
                  </label>
                  <input
                  {...register("names", { required: true })}
                    type="text"
                    name="names"
                    id="names"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                  {errors.names && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="lastname1" className="block text-sm font-medium leading-6 text-gray-900">
                    Primer apellido
                  </label>
                  <input
                  {...register("lastname1", { required: true })}
                    type="text"
                    name="lastname1"
                    id="lastname1"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                  {errors.lastname1 && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="lastname2" className="block text-sm font-medium leading-6 text-gray-900">
                    Segundo apellido
                  </label>
                  <input
                  {...register("lastname2", { required: false })}
                    type="text"
                    name="lastname2"
                    id="lastname2"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                </div>

                <div>
                  <label htmlFor="cedula" className="block text-sm font-medium leading-6 text-gray-900">
                    Cédula
                  </label>
                  <CedulaInput
                  {...register("cedula", { required: true })}
                    type="text"
                    name="cedula"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                  {errors.cedula && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                    Edad
                  </label>
                  <input
                  {...register("age", { required: true })}
                    type="number"
                    name="age"
                    id="age"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                  {errors.age && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                    Género
                  </label>
                  <select
                  {...register("gender", { required: true })}
                    id="gender"
                    name="gender"
                    className="mt-2 pl-2 block w-full h-14 rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  >
                    <option></option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                  {errors.gender && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <div className='flex'>
                  <label htmlFor="address" className="flex-1 text-sm font-medium leading-6 text-gray-900">
                    Dirección
                  </label>

                    {show ? 
                    <div onClick={ () => {setShowAddress(false); resetField('addressOptional')}} className='text-red-600 cursor-pointer'>Quitar otro</div>
                    :
                    <div onClick={ () => setShowAddress(true)} className='text-blue-600 cursor-pointer'>Agregar otra</div>
                  }
                  </div>
                  
                  <input
                  {...register("address", { required: true })}
                    type="text"
                    name="address"
                    id="address"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                  {errors.address && <span className='text-red-500'>Requerido</span>}
                </div>
                
                {show && (
                <div>
                <label htmlFor="addressOptional" className="block text-sm font-medium leading-6 text-gray-900">
                  Dirección 2
                </label>
                <input
                {...register("addressOptional", { required: false })}
                  type="text"
                  name="addressOptional"
                  id="addressOptional"
                  className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                />
              </div>
                )}
                
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium leading-6 text-gray-900">
                    Teléfono
                  </label>
                  <PhoneInput
                  {...register("telephone", { required: true })}
                    type="text"
                    name="telephone"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  />
                  {errors.telephone && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Correo Electrónico
                  </label>
                  <input
                  {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    className="mt-2 block w-full h-14 rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6"
                  />
                  {errors.email && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="maritalStatus" className="block text-sm font-medium leading-6 text-gray-900">
                    Estado Civil
                  </label>
                  <select
                  {...register("maritalStatus", { required: true })}
                    id="maritalStatus"
                    name="maritalStatus"
                    className="mt-2 pl-2 block w-full h-14 rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  >
                    <option></option>
                    <option>Casado</option>
                    <option>Casada</option>
                    <option>Soltero</option>
                    <option>Soltera</option>
                    <option>Divorciado</option>
                    <option>Divorciada</option>
                    <option>Viudo</option>
                    <option>Viuda</option>
                  </select>
                  {errors.maritalStatus && <span className='text-red-500'>Requerido</span>}
                </div>

                <div>
                  <label htmlFor="hasKids" className="block text-sm font-medium leading-6 text-gray-900">
                    ¿Tiene hijos?
                  </label>
                  <select
                  {...register("hasKids", { required: true })}
                    id="hasKids"
                    name="hasKids"
                    className="mt-2 pl-2 block w-full h-14 rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:border-green-600 focus:ring-green-600 focus:outline-none sm:text-md sm:leading-6 uppercase"
                  >
                    <option></option>
                    <option>Si</option>
                    <option>No</option>
                  </select>
                  {errors.hasKids && <span className='text-red-500'>Requerido</span>}
                </div>

              <div>
              <label htmlFor="birthdate" className="block mb-2 text-sm font-medium leading-6 text-gray-900">
                   Fecha de nacimiento
                  </label>
                <Controller
                  name="birthdate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}><DatePicker {...field} sx={{ width: '100%' }} /></LocalizationProvider> }
                  />
              </div>

              </div>

            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
              >
                AGREGAR
              </button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default AddUser