'use client';
import { CloseOutlined } from '@ant-design/icons';
import PrimaryButton from '@components/Form/Button/Primary';
import PageTitle from '@components/UI/PageTitle';
import useSWR from 'swr';

function Dashboard() {
  const { data, isLoading, mutate } = useSWR<any[]>('/products?limit=10');

  if (isLoading || !data) return <p>Loading...</p>;

  function addProduct(data: any) {
    const newTodo = {
      userId: 1,
      id: data.length + 1,
      title: 'new product ' + (data.length + 1),
      completed: false,
    };

    return [...data, newTodo];
  }

  function removeTodo(id: any) {
    return data?.filter((item) => item.id !== id);
  }

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="space-y-3">
        {data.map((product: any) => (
          <div key={product.id} className="flex items-center gap-3">
            <p>{product.title}</p>
            <CloseOutlined
              className="cursor-pointer text-danger"
              onClick={() =>
                mutate(() => removeTodo(product.id), { revalidate: false })
              }
            />
          </div>
        ))}
        <PrimaryButton
          onClick={() => mutate(addProduct, { revalidate: false })}
        >
          Add Todo
        </PrimaryButton>
      </div>
    </>
  );
}

export default Dashboard;
