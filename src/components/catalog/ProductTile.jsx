import Image from "next/legacy/image";
import Link from "next/link";

export const ProductTile = ({ product }) => {
  const { title, image, price } = product;
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <article>
      <header>
        <div>
          <Link href="/" title={title}>
            <Image
              alt={`Image for product ${title}`}
              src={image}
              width="200"
              height="200"
              objectFit="contain"
              className="inline"
            ></Image>
          </Link>
        </div>

        <h1>
          <Link href="/" title={title}>
            {title}
          </Link>
        </h1>
      </header>

      <section>
        <span>{formattedPrice}</span>
      </section>

      <footer>{/* add to cart */}</footer>
    </article>
  );
};
