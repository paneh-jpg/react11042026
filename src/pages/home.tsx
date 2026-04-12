const HomePage = () => {
  return (
    <>
      <main className="max-w-4xl mx-auto mt-30 px-4">
        <div className="bg-white shadow-lg border-2 border-gray-600 rounded-2xl p-6 space-y-4">
          <p className="text-lg font-semibold text-gray-800">
            Sử dụng api customer trong dự án DOM
          </p>

          <p>
            <a
              href="https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com/doc#tag/customer-controller"
              className="text-blue-500 hover:text-blue-600 underline break-all"
            >
              https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com/doc#tag/customer-controller
            </a>
          </p>

          <p className="text-gray-700">
            Viết giao diện customer (thêm/sửa/xóa giống dự án dom)
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Không yêu cầu giao diện giống dự án DOM</li>
            <li>
              Khi create/update thì sử dụng
              <span className="font-medium text-gray-800"> dialog (popup)</span>
              thay vì tạo 1 page mới
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default HomePage;
