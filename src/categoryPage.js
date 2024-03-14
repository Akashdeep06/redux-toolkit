import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './slices/catSlice';
import './MyComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="row row-cols-md-4 g-4">
        {data && data.map((item) => (
          <div key={item.id} className="col">
            <div className="card border-light" style={{ width: '18rem', height: '100%'  }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png" className="card-img-top" alt="..." style={{ objectFit: 'contain', height: '200px' }} />
              <div className="card-body">
                <p className="card-text" >{String(item)}</p>
                <Link to={`/${String(item).replace(/[ '\s]/g, '')}`}>
                  <button
                    type="button"
                    className="btn btn-sm mb-2"
                    style={{ backgroundColor: 'rgba(144, 238, 144, 0.288)', color: 'lightgreen', border: 'none' }}
                  >
                    go to category
                  </button>
                  </Link>
                <h5 className="card-title" style={{ fontSize: '1rem' }}>{item.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;

//   <li key={item.id}>id:{item.id}<br />
        //   title:{item.title}<br />
        //   <img src={item.image} height={"100px"}></img><br /></li>