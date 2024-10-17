// app/page.tsx
import Image from 'next/image';
import socialsbutton from '@/components/SocialButton';
import SocialButton from '@/components/SocialButton';
import LinkedinIcon from '@/assets/linkedin.webp'
import ProfilePic from '@/assets/pfp.jpeg'

export default function Home() {
  return (
    <div className="w-full max-w-4xl text-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
        <div className="mb-6">
          <Image
            src={ProfilePic} // Replace with your actual image path
            alt="Your Name"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-emerald-600">Samuil Iordachi</h1>
        <p className="text-xl mb-6 text-emerald-600"> Junior Backend DEV</p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-slate-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded ">
            My Projects
          </a>
          <a href="#contact" className="bg-green-500 hover:bg-green-600
           text-whitefont-bold py-2 px-4 rounded">
            Contact Me
          </a>
          <a href="#contact" className="bg-green-500 hover:bg-green-600
           text-whitefont-bold py-2 px-4 rounded">
            Contact Me
          </a>
          <button href="#contact" className="bg-green-500 hover:bg-green-600
           text-whitefont-bold py-2 px-4 rounded">
            Contact Me
          </button>

      <SocialButton
            href="https://www.linkedin.com/in/samuil-iordachi-019320292/"
            icon= {LinkedinIcon}
            alt="LinkedIn"
            label=""
          />
        </div>
      </div>

      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-emerald-600 ">Project 1</h3>
            <p className='text-emerald-600'>Short description of your project</p>
          </div>
          {/* Repeat for other projects */}
        </div>
      </section>
      
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-emerald-600">About Me</h2>
        <p className='text-emerald-600'>A little about me.</p>
      </section>

    </div>
  );
}