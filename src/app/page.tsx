import styles from './styles.module.css';
export default function Home() {
  return (
    <div className={styles['mesh-background']}>
      <h1 className='text-3xl text-emerald-900 font-bold m-4 mb-1 lg:text-7xl'>
        💰 Budget Buddy
      </h1>

      <p className='text-lg text-emerald-700 m-4 mt-1'>
        A budgeting app for the modern age.
      </p>

      <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg m-8 transition-all w-full lg:w-96'>
        Start
      </button>
    </div>
  );
}
