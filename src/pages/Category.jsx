import {useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getFilteredCategory} from "../api";
import {Preloader} from "../components/Preloader";
import {MealList} from "../components/MealList";

function Category() {
    const {name} = useParams()
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name)
            .then((data) => setMeals(data.meals));
    }, [name]);

    const {goBack} = useHistory();

    return(
        <>
            <button className="btn" onClick={goBack}>Go Back</button>
            {!meals.length ?
                <Preloader/> :
                <MealList meals={meals} />
            }
        </>
    )
}

export {Category};