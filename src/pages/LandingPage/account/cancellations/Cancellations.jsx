import React from 'react'

const Cancellations = () => {
  const cancelledOrders = [
    {
      id: 1,
      orderNumber: '#123456',
      date: '2023-06-01',
      product: 'Product A',
      reason: 'Changed my mind'
    },
    {
      id: 2,
      orderNumber: '#654321',
      date: '2023-05-15',
      product: 'Product B',
      reason: 'Item out of stock'
    },
    {
      id: 3,
      orderNumber: '#789012',
      date: '2023-04-20',
      product: 'Product C',
      reason: 'Shipping delay'
    }
  ]

  return (
    <div className="bg-gray-100 mt-10">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-700 font-bold">
                <th className="px-4 py-3">Order #</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Reason</th>
              </tr>
            </thead>
            <tbody>
              {cancelledOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-4 py-3 font-medium">{order.orderNumber}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.product}</td>
                  <td className="px-4 py-3">{order.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cancellations