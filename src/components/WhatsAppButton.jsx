export default function WhatsAppButton() {
  return (
<a
  href={`https://wa.me/919095932878?text=
Hello Sri Murugan Agency,

Product : ${product.name}
Quantity : ${quantity} ${product.unit}

Please send me the price.`}
  target="_blank"
  rel="noreferrer"
  className="bg-green-600 text-white px-6 py-3 rounded-lg mt-6 inline-block"
>
  WhatsApp Order
</a>
  );
}