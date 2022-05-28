import {useRouter} from 'next/router';

const Car = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            Sup {id}
        </div>
    );
}

export default Car;