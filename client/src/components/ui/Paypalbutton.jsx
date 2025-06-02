import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import axiosInstance from "@/utils/axios";

const PaypalButton = ({ price, bookingDetails, onSuccess }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: price.toFixed(2),  // Use price directly in INR
              currency_code: "INR",     // Set currency to Indian Rupee
            }
          }]
        });
      }}
      onApprove={(data, actions) => {
        return actions.order.capture().then(async (details) => {
          toast.success(`Payment successful by ${details.payer.name.given_name}`);

          try {
            const response = await axiosInstance.post("/bookings", bookingDetails);

            if (response.data.success) {
              onSuccess(response.data.pendingBooking._id);
            }
          } catch (err) {
            toast.error("Booking failed after payment");
            console.error(err);
          }
        });
      }}
    />
  );
};

export default PaypalButton;
