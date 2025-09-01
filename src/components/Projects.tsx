import React from 'react';

const Projects = () => {
  const works = [
    { id: 1, title: 'Project 1', description: 'Description 1', preview: '' },
    { id: 2, title: 'Project 2', description: 'Description 2', preview: '' },
    { id: 3, title: 'Project 3', description: 'Description 3', preview: '' },
    { id: 4, title: 'Project 4', description: 'Description 4', preview: '' },
    { id: 5, title: 'Project 5', description: 'Description 5', preview: '' },
    { id: 6, title: 'Project 6', description: 'Description 6', preview: '' },
    { id: 7, title: 'Project 7', description: 'Description 7', preview: '' },
    { id: 8, title: 'Project 8', description: 'Description 8', preview: '' },
    { id: 9, title: 'Project 8', description: 'Description 8', preview: '' },
    { id: 10, title: 'Project 8', description: 'Description 8', preview: '' },
    { id: 11, title: 'Project 8', description: 'Description 8', preview: '' },
    { id: 12, title: 'Project 8', description: 'Description 8', preview: '' },
    { id: 13, title: 'Project 8', description: 'Description 8', preview: '' },
    { id: 14, title: 'Project 8', description: 'Description 8', preview: '' },
  ];

  return (
    <section className='bg-[#f5f5f5] min-h-screen w-full py-16'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-6xl font-bold text-center mb-10'>Work</h2>

        <article className='space-y-6'>
          {works.map((work, index) => {
            if (index % 3 === 0) {
              return (
                <div
                  key={work.id}
                  className='bg-white p-6 shadow-md rounded-xl w-full'
                >
                  <h3 className='text-2xl font-semibold'>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              );
            }

            if (index % 3 === 1) {
              return (
                <div key={work.id} className='flex gap-6'>
                  <div className='flex-1 bg-white p-6 shadow-md rounded-xl'>
                    <h3 className='text-xl font-semibold'>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>

                  {works[index + 1] && (
                    <div
                      key={works[index + 1].id}
                      className='flex-1 bg-white p-6 shadow-md rounded-xl'
                    >
                      <h3 className='text-xl font-semibold'>
                        {works[index + 1].title}
                      </h3>
                      <p>{works[index + 1].description}</p>
                    </div>
                  )}
                </div>
              );
            }

            return null;
          })}
        </article>
      </div>
    </section>
  );
};

export default Projects;
