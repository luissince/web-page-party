
import { redirect } from 'next/navigation';
import ThreeScene from '../components/ThreeScene';
import { getServerSession } from 'next-auth';
import Button from '../ui/logout';

export default async function Page() {
    const session = await getServerSession();
    // const session = await getServerSession();
    console.log(session)

    if (!session) {
        redirect('/');
    }

    // // Obtiene la cadena de consulta de la URL
    // const queryString = window.location.search;

    // // Parsea la cadena de consulta para obtener los parámetros
    // const params = new URLSearchParams(queryString);

    // // Obtiene los valores de los parámetros
    // const param1 = params.get('param1');
    // const param2 = params.get('param2');

    // console.log(param1)

    return (
        <div>
            <main>
                <div className='absolute text-white text-2xl w-full h-full flex justify-center items-center'>
                    <div className='relative'>
                        <div className='py-8 text-center'>
                            <h6 className='text-5xl text-yellow-500' >Bienvenido {session.user.name}</h6>
                        </div>
                        <div className='py-8'>
                            <h6>Invitación para el cumpleaños de Rahamsis</h6>
                        </div>
                        <div className='items-center text-center'>
                            <Button/>
                        </div>

                    </div>
                </div>
                <ThreeScene />
            </main>
        </div>
    );
}


