export default function AppointmentFrom() {
  return (
    <>
      {" "}
      <div className="w-full lg:-mt-80 bg-gray-200 rounded shadow-md hover:shadow-xl hover:shadow-gray-400 ease-in-out duration-300">
        <h2 className="mb-4 py-8 text-3xl text-center font-bold text-white bg-neutral-600 uppercase">
          REQUEST APPOINTMENT
        </h2>
        <form className="p-6">
          <div className="mb-4 flex gap-3 max-md:flex-wrap">
            <div className="md:w-1/2">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded py-2 px-3"
              />
            </div>

            <div className="md:w-1/2">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded py-2 px-3"
              />
            </div>
          </div>

          <div className="mb-4 flex gap-3">
            <div className="w-1/2">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border rounded py-2 px-3"
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="center"
                className="block text-sm font-medium mb-1"
              >
                Center
              </label>
              <select
                className="w-full h-10 pl-2 bg-white  rounded"
                name="your_center"
                id="center"
              >
                <option>Donation Center</option>
                <option>Los Angles</option>
                <option>California</option>
              </select>
            </div>
          </div>

          <div className="mb-4 flex gap-3">
            <div className="w-1/2">
              <label htmlFor="date" className="block text-sm font-medium mb-1">
                Date
              </label>
              <input
                type="text"
                id="date"
                className="w-full border rounded py-2 px-3"
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="time" className="block text-sm font-medium mb-1">
                Time
              </label>
              <input
                type="text"
                id="time"
                className="w-full border rounded py-2 px-3"
              />
            </div>
          </div>

          <div className="">
            <textarea
              className="w-full border pl-3 pt-2"
              name="Message"
              placeholder="Your Messages..."
              cols="30"
              rows="4"
            ></textarea>
          </div>

          <button
            className="py-3 px-14 mt-5 mb-3 bg-red-600 text-xl mx-auto block text-white hover:bg-gray-700 ease-in-out duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
