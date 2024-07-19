import React from 'react'

const Returns = () => {
  const returnedItems = [
    {
      id: 1,
      name: 'Product A',
      date: '2023-06-15',
      status: 'Refunded'
    },
    {
      id: 2,
      name: 'Product B',
      date: '2023-05-20',
      status: 'Pending'
    },
    {
      id: 3,
      name: 'Product C',
      date: '2023-04-01',
      status: 'Approved'
    }
  ]

  return (
    <div className="bg-gray-100 mt-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-bold">
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {returnedItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-3 font-medium">{item.name}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
                        item.status === 'Refunded'
                          ? 'bg-green-100 text-green-500'
                          : item.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-500'
                            : 'bg-blue-100 text-blue-500'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Returns