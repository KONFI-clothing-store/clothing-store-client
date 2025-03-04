import { useEffect } from 'react'

declare global {
  interface Window {
    Paddle: any
  }
}

const CheckoutButton = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/payment-intent`,
        {
          method: 'POST',
        },
      )

      const data = await response.json()
      console.log('Оплата успішна:', data)
    } catch (error) {
      console.error('Помилка оплати:', error)
    }
  }

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: '10px 20px',
        background: '#635BFF',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      Оплатити
    </button>
  )
}

export default CheckoutButton
