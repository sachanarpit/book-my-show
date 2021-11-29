export const Card = (imageUrl, name, description) => {
  return (
    <div class="card shadow h-100">
      <img src={imageUrl} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <a href="#" class="btn btn-primary">
          book Now
        </a>
      </div>
    </div>
  );
};
