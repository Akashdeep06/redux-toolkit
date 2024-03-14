import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';
import './MyComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const toggleDescriptionExpansion = (id) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((itemId) => itemId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

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
              <img src={item.image} className="card-img-top" alt="..." style={{ objectFit: 'contain', height: '200px' }} />
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-sm mb-2"
                  style={{ backgroundColor: 'rgba(144, 238, 144, 0.288)', color: 'lightgreen', border: 'none' }}
                >
                  Add item
                </button>
                <h5 className="card-title" style={{ fontSize: '1rem' }}>{item.title}</h5>
                <p>${item.price}</p>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: '0.8rem', whiteSpace: expandedIds.includes(item.id) ? 'normal' : 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                  onClick={() => toggleDescriptionExpansion(item.id)}
                >
                  {item.description}
                </p>
              </div>
              <div class="row">
                                    <div class="col-1">
                                        <img src="star.png" width="19px" height="19px"></img>
                                    </div>
                                    <div class="col-1">
                                        <img src="star.png" width="19px" height="19px"></img>
                                    </div>
                                    <div class="col-1">
                                        <img src="star.png" width="19px" height="19px"></img>
                                    </div>
                                    <div class="col-1">
                                        <img src="star.png" width="19px" height="19px"></img>
                                    </div>
                                    <div class="col-1">
                                        <img src="star.png" width="19px" height="19px"></img>
                                    </div>
                                    <div class="col-4 px-3">
                                        <span>{item.rating.rate}</span>
                                    </div>
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