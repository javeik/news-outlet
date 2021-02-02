import "./NewsList.css";
import useFetchNews from "./useFetchNews";

const NewsList = () => {
  const { news } = useFetchNews();

  console.log(news);

  return (
    <ol className="NewsList">
      {news?.map(({ id, title }) => (
        <li className="NewsList-item" key={id}>
          {title}
        </li>
      ))}
    </ol>
  );
};

export default NewsList;
