import { useState } from 'react';

export default function MoviePoster({ img, title }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="mt-12 md:mt-0 md:w-1/5">
        <h5 className="text-3xl mb-2 font-semibold pl-2">Movie Poster</h5>
        <img
          className="movie-poster mt-5 rounded-md cursor-pointer"
          src={img}
          alt={`${title}`}
          onClick={() => setShowModal(true)}
        />
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <img
                    className="movie-poster modal-img rounded-md"
                    src={img}
                    alt={`${title}`}
                  />
                </div>
                {/*footer*/}
                <i
                  className="close-modal fas fa-times cursor-pointer"
                  onClick={() => setShowModal(false)}
                  type="button"
                ></i>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
