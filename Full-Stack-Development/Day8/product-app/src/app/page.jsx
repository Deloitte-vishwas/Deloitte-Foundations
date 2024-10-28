'use client'
async function Home() {
  const response = await fetch("http://localhost:9090/products");
  const products = await response.json();
  console.log(products);
  
  return products && products.length > 0 ? (
    <table className="table-zebra table-lg">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product,idx) => (
          <tr key={product.id} className="hover">
            <th scope="row">{idx+1}</th>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>

            <td><button className="primary" >View</button> </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <>
      <h3> No data found</h3>
    </>
  );
}

export default Home;




























// function Home() {
//   return ( 
//     <div>
//       <Image
//        src="/flower.jpg"
//        alt="A beautiful Flower"
//        width={400}
//        height={600}
//        quality={75}
//        placholder="blur"
//        priority
//        />
//     </div>
//     // <Link href="/about">About Us Page</Link>
//    );
// }

// export default Home;




// 'use client'
 
// import { useRouter } from 'next/navigation'

 
// export default function Page() {
//   const router = useRouter()
    // const handleClick = ()=>{
    //   router.push('/about');
    // }
//   return (
//     <button type="button" onClick={handleClick}>
//       Dashboard
//     </button>
//   )
// }
