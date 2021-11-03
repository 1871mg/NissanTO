export const getOrderById = async (orderId) => {
  const response = await fetch(`/orders/${orderId}`, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json();
  return data;
}

export const deleteOrderById = async (orderId) => {
  const response = await fetch(`/orders/${orderId}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  const data = await response.json();
  return data;
}

export const changeStatusOrderById = async (orderId) => {
  const response = await fetch(`/orders`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({orderId}),
  });
  const data = await response.json();
  return data;
}
