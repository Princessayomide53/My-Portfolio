import React from 'react';

const Projects = () => {
  const works = [
    { id: 1, title: '', description: '', preview: '' },
    { id: 2, title: '', description: '', preview: '' },
    { id: 3, title: '', description: '', preview: '' },
    { id: 4, title: '', description: '', preview: '' },
    { id: 5, title: '', description: '', preview: '' },
    { id: 6, title: '', description: '', preview: '' },
    { id: 7, title: '', description: '', preview: '' },
    { id: 8, title: '', description: '', preview: '' },
  ];
  return (
    <section className='bg-[#f5f5f5] h-screen w-full py-16'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-6xl font-bold text-center'>Work</h2>

        <article>
          {/* {works.map(() => (
            <div></div>
          ))} */}
        </article>
      </div>
    </section>
  );
};

export default Projects;
