import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { WORKOUTS, SCHEMES } from '../utils/swoldier';
import Button from './Button';

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className='flex flex-col gap-4 py-20'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-red-400'>
          {index}
        </p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>
          {title}
        </h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>
        {description}
      </p>
    </div>
  );
}

export default function Generator(props) {
  const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props;
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter(val => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== 'individual') {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setShowModal(false);
    }
  }

  return (
    <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
      <Header index={'01'} title={'Pick Your Poison'} description={'Select the workout you wish to endure'} />
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => (
          <button key={typeIndex} onClick={() => {
            setMuscles([]);
            setPoison(type);
          }}
            className={`bg-slate-950 border-3 py-3 border-red-400 rounded-lg duration-200 px-4 mx-8 ${type === poison ? 'text-red-400' : ''} hover:border-red-600`}>
            <p className='uppercase'>
              {type.replaceAll('_', " ")}
            </p>
          </button>
        ))}
      </div>
      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles you wish to annihilate'} />
      <div className='bg-slate-950 border-solid border-3 border-red-400 duration-200 rounded-lg mx-10 hover:border-red-600 flex flex-col'>
        <button onClick={toggleModal} className='relative flex p-3 px-4 items-center justify-center'>
          <p className={`capitalize ${muscles.length === 0 ? 'text-white' : 'text-red-400'}`}>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className='flex flex-col px-3 pb-3'>
            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => (
              <button onClick={() => updateMuscles(muscleGroup)} key={muscleGroupIndex}
                className={`hover:text-red-400 duration-200 ${muscles.includes(muscleGroup) ? 'text-red-400' : ''}`}>
                <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
              </button>
            ))}
          </div>
        )}
      </div>
      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective'} />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => (
          <button key={schemeIndex} onClick={() => setGoal(scheme)}
            className={`bg-slate-950 border-3 border-red-400 py-3 px-4 rounded-lg duration-200 mx-16 ${scheme === goal ? 'text-red-400' : ''} hover:border-red-600`}>
            <p className='uppercase'>
              {scheme.replaceAll('_', " ")}
            </p>
          </button>
        ))}
      </div>
      <Button func={updateWorkout} text={"Generate"}></Button>
    </SectionWrapper>
  );
}
