import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(part => part !== '');

  return (
    <div className="mt-20">
      {pathParts.map((part, index) => (
        <span key={index}>
          {index < pathParts.length - 1 ? (
            <span className="text-gray-500 font-medium">{decodeURIComponent(part)} / </span>
          ) : (
            <span className="font-medium">{decodeURIComponent(part).replace(/-/g, ' ')}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;