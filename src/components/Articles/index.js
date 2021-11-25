import { CircularProgress } from "@mui/material";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selecetArticlesError, selectArticlesList, selectArticlesLoading } from "../../store/articles/selectors";
//import { apiUrl } from "../../utils/constants";

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticlesList);
    const isLoading = useSelector(selectArticlesLoading);
    const error = useSelector(selecetArticlesError);
    // const [articles, setArticles] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);//переменная под скинер


    const requestArticles = async () => {
        dispatch(getArticles());
        // setLoading(true);
        // try {
        //     const response = await fetch(apiUrl)
        //     console.log('response:', response);

        //     if (!response.ok) {
        //         throw new Error('not OK');
        //     }

        //     const result = await response.json();

        //     setError(false);
        //     setArticles(result);
        // }
        // catch (err) {
        //     console.log(err);
        //     setError(true);
        // } finally {
        //     setLoading(false);
        // }
    };


    useEffect(() => {
        requestArticles(); //альтернатива с async
        // пример вызова aoi по url без async
        // setLoading(true);

        // fetch(apiUrl).then(response => {
        //     console.log('response:', response);

        //     if (!response.ok) {
        //         throw new Error('not OK');
        //     }

        //     return response.json();
        // }).then((result) => {
        //     setError(false);
        //     setLoading(false);
        //     setArticles(result);
        // })

        //     .catch((err) => {
        //         console.log(err);
        //         setError(true);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    }, []);

    return (
        <>
            <h3>Articles</h3>
            {isLoading ?
                (<CircularProgress />) : (//запуск скинера
                    <>
                        <button onClick={requestArticles}>REQUEST</button>
                        {!!error && <h4>ERROR: {error}</h4>}
                        <ul>
                            {articles.map((art) => (
                                <li key={art.id}>{art.title}</li>
                            ))}
                        </ul>
                    </>
                )};
        </>
    );
};
