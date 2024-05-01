export default function AdditionalInfo() {
  return (
    <section>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[1100px] mx-auto my-5">
        <table className="w-full text-sm text-left rtl:text-right text-textColor">
          <thead className="text-xs text-textColor uppercase"></thead>
          <tbody>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Brand
              </th>
              <td className="px-6 py-4">Nixe</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Sex
              </th>
              <td className="px-6 py-4">Men</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Sku
              </th>
              <td className="px-6 py-4">XO15615589</td>
            </tr>
            <tr className="border-b border-gray-200 ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
              >
                Warranity
              </th>
              <td className="px-6 py-4">24 Month</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
