import Form from "./Form";

function Page() {
  return (
    <div
      className="h-screen w-full justify-center items-center flex"
      style={{
        background:
          "linear-gradient(148.72deg, #7680AC 10.66%, #2A3D68 126.36%)",
      }}
    >
      <div className="logindiv p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
        <Form />
      </div>
    </div>
  );
}

export default Page;
