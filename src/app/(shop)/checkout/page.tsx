import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";
import Image from "next/image";

const productInCarts = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Confirmar compra" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
            Editar artículos
            </Link>

            {/* Items del carrito */}
            {productInCarts.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>€{product.price} x 3</p>
                  <p className="font-bold">Subtotal: €{product.price * 3}</p>

                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
           <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="font-bold text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
                <p className="text-xl">Albert A M</p>
                <p>Calle San Salvador, 17</p>
                <p>03005</p>
                <p>Alicante</p>
                <p>6000000</p>
            </div>

            {/* Divisor */}
            <div 
                className="w-full h-0.5 rounded bg-gray-200 mb-10"
            />




            <h2 className="font-bold text-2xl">Resumen de Orden</h2>
            <div className="grid grid-cols-2">
                <span>Nº de Productos</span>
                <span className="text-right">3 artículos</span>

                <span>Subtotal</span>
                <span className="text-right">€100</span>

                <span>I.V.A 21%</span>
                <span className="text-right">€100</span>

                <span className="mt-5 text-2xl">Total</span>
                <span className="mt-5 text-2xl text-right">€100</span>



            </div>

            <div className="mt-5 mb-2 w-full">
                <p className="mb-5">
                    {/* Disclaimer */}
                    <span className="text-xs">
                        Al hacer clic en Comprar, aceptas nuestros <a href="#" className="underline">Términos y Condiciones</a> y <a href="#" className="underline"> Política de Privacidad de la empresa.</a> 
                    </span>
                </p>

                <Link 
                className="flex btn-primary justify-center"
                href="/orders/123">
                    Comprar
                </Link>
            </div>
           </div>



        </div>
      </div>
    </div>
  );
}
