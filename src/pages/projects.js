import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import { GithubIcon } from '@/components/Icons';
import Image from 'next/image';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import Image1 from '../../public/images/articles/oucis.png';
import Image2 from '../../public/images/articles/kidney.png';
import Image3 from '../../public/images/projects/net.png'; 
import Image4 from '../../public/images/articles/portfolio.png';
import Image5 from '../../public/images/articles/garage.jpg';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, link, github }) => {
  return (
    <article className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between
    rounded-3xl border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light relative
    lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4
    '>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      
      <Link href={link} target='_blank'
        className='cursor-pointer overflow-hidden rounded-lg lg:w-full'>
        <FramerImage src={Image1} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
      />
      </Link>

      <div className='flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>

          <h2 className='my-2 text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={link} target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            '>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' />

      <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage src={img} alt={title} className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }} />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>

        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='rounded-lg font-semibold underline md:text-base'>
            Visit
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6'>
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Alfer | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>

      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Imagination Trumps Knowledge!' 
          className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />

          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Online University Certificate Issuing System'
                img={project1}
                summary='The system enables administrators to input student details, select certificate templates, and automatically generate personalized certificates. 
                PHP handles backend logic, database interactions, and certificate generation, while Bootstrap ensures a responsive, user-friendly interface. 
                Custom scripts manage form validation, certificate previews, and automated email distribution, streamlining the issuance process for accuracy and efficiency.'
                link='https://github.com/SAYANISHAN98/Group-11-final.git'
                github='https://github.com/SAYANISHAN98/Group-11-final.git'
                type='Featured Project'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Research Project - Kidney Diseases Detection Using Deep Learning'
                img={Image2}
                link=''
                github=''
                type='Featured Project'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Enterprise Networking Project (University OF JAFFNA Main Campus Network)'
                img={Image3} 
                link='https://github.com/ralfer-99/NetworkProject.git'
                github='https://github.com/ralfer-99/NetworkProject.git'
                type='Featured Project'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Portfolio, built with Next.js and styled using TailwindCSS, offers a sleek and modern design.'
                img={Image4} 
                link='https://github.com/ralfer-99/NetworkProject.git'
                github='https://github.com/ralfer-99/portfolio.git'
                type='Featured Project'
              />
            </div>

            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Built Mobile Garage Management System using ReactJS, React Native for the frontend, and Spring Boot for the backend.'
                img={Image5} 
                link='https://github.com/Althaf27/MobileGarage.git'
                github='https://github.com/Althaf27/MobileGarage.git'
                type='Featured Project'
              />
            </div>
          </div> 

          
        </Layout>
      </main>
    </>
  );
}

export default Projects;
