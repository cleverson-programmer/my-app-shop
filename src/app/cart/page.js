//app/cart.js
import { Title } from "@/components/PageCart/Title";
import { MessageTop } from "@/components/PageCart/MessageDiscount";
import { TableProducts } from "@/components/PageCart/TableProducts";
import { DeliveryTime } from "@/components/PageCart/DeliveryTime";
import { DiscountCoupon } from "@/components/PageCart/DiscountCoupon";
import { Resume } from "@/components/PageCart/Resume";
export default function CartPage() {

  return (
    <div>
      <Title/>
      <div className=" m-10">
        <MessageTop/>
        <TableProducts/>
      </div>

      <div className="w-full max-w-6xl mx-auto flex-col flex items-center sm:justify-around sm:items-start sm:flex-row">
        <DeliveryTime/>
        <DiscountCoupon/>
        <Resume/>
      </div>
    </div>
  );
}
