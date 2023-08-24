const CommunicateForm = () => {
  return (
    <>
      <h2 className="text-3xl text-gray-600 font-semibold mb-4">
        Say hello to us
      </h2>
      <div className="h-0.5 bg-gray-200 my-5">
        <p className="h-0.5 w-10 bg-red-600"></p>
      </div>
      <form>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            className="mt-2 p-5 w-full outline-none focus:border-b focus:border-red-600 ease-in-out duration-500"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            className="mt-2 p-5 w-full outline-none focus:border-b focus:border-red-600 ease-in-out duration-500"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="subject"
            className="mt-2 p-5 w-full outline-none focus:border-b focus:border-red-600 ease-in-out duration-500"
            placeholder="Subject"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            className="mt-2 p-5 w-full outline-none focus:border-b focus:border-red-600 ease-in-out duration-500"
            rows="4"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white py-4 px-10 hover:bg-gray-600"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CommunicateForm;
