import {useRouter} from 'next/router';
import Head from 'next/head'

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

export const getStaticPaths = async (ctx) => {
    const { data } = await  // your fetch function here 

    return {
        paths: [
            {
                params: {
                    
                }
            }
        ],
        fallback: "blocking"
    }
}