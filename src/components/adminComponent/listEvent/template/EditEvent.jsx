import { Card } from '@nextui-org/card'
import FormEditEvent from '../organism/FormEditEvent.jsx'
const EditEvent = () => {
    return (
        <article
            className='flex justify-center min-h-screen w-full lg:min-w-[768px]'
        >
            <Card
                shadow='xl'
                className='w-full p-8 bg-white mt-9'
            >
                <FormEditEvent />
            </Card>
        </article>
    )
}
export default EditEvent