import { Card } from '@nextui-org/card'
import FormEditEvent from '../organism/FormEditEvent.jsx'
const EditEvent = () => {
    return (
        <main
            className='min-h-screen bg-gray-300 py-11'
        >
            <div className='pl-16'>
                <h5 className='font-sans text-base text-gray-700'>1 September 2024</h5>
                <h1 className='font-sans text-2xl text-gray-700'>Edit Acara</h1>
            </div>
            <article
                className='flex justify-center'
            >
                <Card
                    shadow='xl'
                    className='w-[80%] p-8 bg-white mt-9'
                >
                    <FormEditEvent />
                </Card>
            </article>
        </main>
    )
}
export default EditEvent