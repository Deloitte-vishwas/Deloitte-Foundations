function Card({name, description, imageUrl}) {
    return ( 
      <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={imageUrl}
        alt={name} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
     );
  }
  
  export default Card;