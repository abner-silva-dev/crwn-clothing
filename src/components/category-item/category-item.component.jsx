import './category-item.style.scss';

const CategoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;