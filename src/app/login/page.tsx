import Form from './Form';

function Page() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center"
      style={{
        background:
          'linear-gradient(148.72deg, #7680AC 10.66%, #2A3D68 126.36%)',
      }}
    >
      <div className="logindiv w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6 md:p-8">
        <Form />
      </div>
    </div>
  );
}

export default Page;
