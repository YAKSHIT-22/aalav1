import React from 'react';
import { motion } from 'framer-motion';

const CarDetails = ({
  handleChange,
  nextStep,
  prevStep,
  formData,
  handleSubmit,
}) => {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="flex items-start justify-start flex-col h-full gap-4 w-full"
    >
      <div className="flex items-start justify-start w-full">
        <h1 className="text-5xl text-center text-gray-50 font-bold sm:max-w-4xl">
          Car Details
        </h1>
      </div>
      <div className="flex items-start justify-start h-full w-full">
        <div className="flex items-start justify-start flex-col gap-6 w-full">
          <form className="flex items-start justify-start w-full h-full gap-4 flex-col">
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="vehicleType" className="text-gray-50">
                Vehicle Type
              </label>
              <select
                type="text"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="vehicleType"
                id="vehicleType"
                placeholder="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
              >
                <option className="text-black" value="">
                  Vehicle Type
                </option>
                <option className="text-black" value="Private">
                  Private
                </option>
                <option className="text-black" value="Commercial">
                  Commercial
                </option>
                <option className="text-black" value="Motorcycles">
                  Motorcycles
                </option>
                <option className="text-black" value="Off-Road">
                  Off-Road
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="companyName" className="text-gray-50">
                Company Name
              </label>
              <select
                type="text"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="companyName"
                id="companyName"
                placeholder="companyName"
                value={formData.companyName}
                onChange={handleChange}
              >
                <option className="text-black" value="">
                  Company Name
                </option>
                <option className="text-black" value="Toyota">
                  Toyota
                </option>
                <option className="text-black" value="Maruti suzuki">
                  Maruti suzuki
                </option>
                <option className="text-black" value="Hyundai motors">
                  {' '}
                  Hyundai motors
                </option>
                <option className="text-black" value="Tata motors">
                  {' '}
                  Tata motors
                </option>
              </select>
            </div>
            <div className="flex flex-col items-start justify-start gap-2 w-full">
              <label htmlFor="vehicleName" className="text-gray-50">
                Vehicle Name
              </label>
              <select
                type="text"
                className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                name="vehicleName"
                id="vehicleName"
                placeholder="vehicleName"
                value={formData.vehicleName}
                onChange={handleChange}
              >
                <option className="text-black" value="">
                  Vehicle Name
                </option>
                <optgroup className="text-black" label="Toyota">
                  <option className="text-black" value="Toyota Glanza">
                    Toyota Glanza
                  </option>
                  <option className="text-black" value="Toyota Urban Cruiser">
                    Toyota Urban Cruiser
                  </option>
                  <option className="text-black" value="Toyota Etios Liva">
                    {' '}
                    Toyota Etios Liva
                  </option>
                </optgroup>
                <optgroup className="text-black" label="Maruti suzuki">
                  <option className="text-black" value="Maruti Suzuki Swift">
                    Maruti Suzuki Swift
                  </option>
                  <option className="text-black" value="Maruti Suzuki Baleno">
                    Maruti Suzuki Baleno
                  </option>
                  <option
                    className="text-black"
                    value="Maruti Suzuki Vitara Brezza"
                  >
                    {' '}
                    Maruti Suzuki Vitara Brezza
                  </option>
                </optgroup>
                <optgroup className="text-black" label="Hyundai">
                  <option className="text-black" value="Hyundai i20">
                    Hyundai i20
                  </option>
                  <option className="text-black" value="Hyundai creta">
                    Hyundai creta
                  </option>
                </optgroup>
              </select>
            </div>
            <div className="flex items-center justify-center flex-col w-full gap-2 md:flex-row">
              <div className="flex flex-col items-start justify-start gap-2 w-full">
                <label htmlFor="averageSpeed" className="text-gray-50">
                  Average Speed you drive at?(km/h)
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                  name="averageSpeed"
                  id="averageSpeed"
                  placeholder="Average Speed you drive at?(km/h)"
                  value={formData.averageSpeed}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="flex flex-col items-start justify-start gap-2 w-full">
                <label htmlFor="averageHours" className="text-gray-50">
                  Average Hours you drive in a Week?
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md border border-[#757575] bg-transparent text-gray-50"
                  name="averageHours"
                  id="averageHours"
                  placeholder="Average Hours you drive in a Week?"
                  value={formData.averageHours}
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-center flex-row w-full gap-2">
            <button
              onClick={prevStep}
              className="button button-white w-full relative bg-[#00febe] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-lg border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-xl font-[500] transition-all tracking-wide"
            >
              Prev
            </button>
            <button
              onClick={handleSubmit}
              className="button button-white w-full relative bg-[#00febe] text-white inline-flex h-[3rem] items-center justify-center gap-[1rem] rounded-lg border-opacity-[1] border-[rgb(242,246,250,0.1)] px-[2.5rem] text-center text-xl font-[500] transition-all tracking-wide"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarDetails;
