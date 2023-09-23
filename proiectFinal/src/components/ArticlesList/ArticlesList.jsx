import './ArticlesList.css';
import ArticlesCard from '../ArticlesCard/ArticlesCard';

function ArticlesList(props) {

    const { articlesList } = props;

    console.log('articlesList', articlesList)

    if (!Array.isArray(articlesList.articles)) {
        return <p>No articles here.</p>
    }


    return(
        <div>
            {articlesList && articlesList.articles.map((article) => (
                <ArticlesCard key={article.id} oneArticle={article} />
            ))}

            {/* Lista cu muzica
            <ArticlesCard/> */}
          
        </div>
    )
}

export default ArticlesList;