import Image from "next/image";
import {GetStaticProps} from 'next';
import BlurImage from "../lib/BlurImage";

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  

  return {
    props:{
      data:null
    }
  }
}


const Home = () => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <BlurImage />
      </div>
    </div>
  );
}


export default Home