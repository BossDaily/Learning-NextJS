import {useRouter} from 'next/router';

const Car = ({ car }) => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            Sup {id}
            <img src={car.image}></img>
        </div>
    );
}

export default Car;

export const getStaticProps = async ({ params }) => {

    const req = await fetch(`http://localhost:300/${params.id}.json`)
    const data = await req.json()

    return {
        props: {
            car: data
        }
    }
}