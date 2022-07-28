import { useNavigate } from 'react-router';
import './directory-item.style.scss';

const DirectoryItem = ({ category: { title, imageUrl, route } }) => {
  const goToRoutehandler = () => navigate(route);
  const navigate = useNavigate();

  return (
    <div className="directory-item-container" onClick={goToRoutehandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="directory-item-body-container">
        <h2 className="directory-item directory-item-title highlight">
          {title}
        </h2>
        <p className="directory-item directory-item-subTitle highlight">
          Shop now
        </p>
      </div>
    </div>
  );
};

export default DirectoryItem;
