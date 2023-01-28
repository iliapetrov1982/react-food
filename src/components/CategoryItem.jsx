import {Link, useHistory} from "react-router-dom";


function CategoryItem(props) {
    const {
        // idCategory,
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;

    const {goBack} = useHistory();

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={strCategoryThumb} alt={strCategory}/>

                </div>
                <div className="card-content">
                    <span className="card-title">{strCategory}</span>
                    <p>{strCategoryDescription.slice(0, 60)}...</p>
                </div>
                <div className="card-action">
                    <Link to={`/category/${strCategory}`} className="btn">View category</Link>
                </div>
            </div>
        </>
    )
}

export {CategoryItem}