import React from 'react';
import Chekout from './Chekout';

const Home = () => {
  return (
    <>
      <div className='flex flex-col items-center border-b py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32'>
        <p className='text-2xl font-bold '>sneekpeeks</p>
        <div className='mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base'>
          <div className='relative'>
            <ul className='relative flex w-full items-center justify-between space-x-2 sm:space-x-4'>
              <li className='flex items-center space-x-3 text-left sm:space-x-4'>
                <a
                  className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700'
                  href='#'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </a>
                <span className='font-semibold text-gray-500'>Shop</span>
              </li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <li className='flex items-center space-x-3 text-left sm:space-x-4'>
                <a
                  className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2'
                  href='#'
                >
                  2
                </a>
                <span className='font-semibold text-gray-500'>Shipping</span>
              </li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <li className='flex items-center space-x-3 text-left sm:space-x-4'>
                <a
                  className='flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white'
                  href='#'
                >
                  3
                </a>
                <span className='font-semibold text-gray-500'>Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32'>
        <div className='px-4 pt-8'>
          <p className='text-xl font-medium'>Order Summary</p>
          <p className='text-gray-400'>
            Check your items. And select a suitable shipping method.
          </p>
          <div className='overflow-y-scroll mt-8 h-64 space-y-2 rounded-lg border  px-2 py-4 sm:px-6'>
            <div className='flex flex-col rounded-lg  sm:flex-row'>
              <img
                className='m-2 h-24 w-28 rounded-md border object-cover object-center'
                src='https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
              <div className='flex w-full flex-col px-4 py-4'>
                <span className='font-semibold'>
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className='float-right text-gray-400'>42EU - 8.5US</span>
                <p className='text-lg font-bold'>$138.99</p>
              </div>
            </div>
            <div className='flex flex-col rounded-lg sm:flex-row'>
              <img
                className='m-2 h-24 w-28 rounded-md border object-cover object-center'
                src='https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
              <div className='flex w-full flex-col px-4 py-4'>
                <span className='font-semibold text-gray-700'>
                  Nike Air Max Pro 8888 - Super Light 42EU
                </span>
                <span className='float-right text-gray-400'>42EU - 8.5US</span>
                <p className='text-lg font-bold'>$138.99</p>
              </div>
            </div>
            <div className='flex flex-col rounded-lg  sm:flex-row'>
              <img
                className='m-2 h-24 w-28 rounded-md border object-cover object-center'
                src='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
                alt=''
              />
              <div className='flex w-full flex-col px-4 py-4'>
                <span className='font-semibold'>
                  Nike Air Max Pro 8888 - Super Light
                </span>
                <span className='float-right text-gray-400'>42EU - 8.5US</span>
                <p className='mt-auto text-lg font-bold'>$238.99</p>
              </div>
            </div>
          </div>

          <p className='mt-8 text-lg font-medium'>Shipping Methods</p>

          <form className='mt-5 grid gap-2'>
            <div className='relative'>
              <input
                className='peer hidden'
                id='radio_1'
                type='radio'
                name='radio'
              />
              <span className='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 '></span>
              <label
                className='peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4'
                htmlFor='radio_1'
              >
                <img
                  className='w-14 object-contain'
                  src='https://ecourier.com.bd/wp-content/uploads/cropped-e-cou-fav-icon-op.png'
                  alt=''
                />
                <div className='ml-5'>
                  <span className='mt-2 font-semibold text-slate-500'>
                    Sundarban Courier Service
                  </span>
                  <p className='text-slate-500 text-sm leading-6'>
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className='relative'>
              <input
                className='peer hidden'
                id='radio_2'
                type='radio'
                name='radio'
              />
              <span className='peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white'></span>
              <label
                className='peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4'
                htmlFor='radio_2'
              >
                <img
                  className='w-14 object-contain'
                  src='https://ecourier.com.bd/wp-content/uploads/cropped-e-cou-fav-icon-op.png'
                  alt=''
                />
                <div className='ml-5'>
                  <span className='mt-2 font-semibold text-slate-500'>
                    eCourier
                  </span>
                  <p className='text-slate-500 text-sm leading-6'>
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <Chekout />
      </div>
    </>
  );
};

export default Home;
