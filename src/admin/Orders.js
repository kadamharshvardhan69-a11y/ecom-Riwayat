import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector(state => state.orders.list);

  return (
    <div className="admin-main">
      <h2>All Orders</h2>

      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <h4>Order #{order.id}</h4>
          <p>Total: ₹{order.total}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
