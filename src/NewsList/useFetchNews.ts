import { useEffect, useState } from "react";

type NewsListItem = {
  id: string;
  title: string;
};

type FetchStatus = "initial" | "loading" | "data-received";

const useFetchNews = () => {
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("initial");

  const [news, setNews] = useState<NewsListItem[]>();

  useEffect(() => {
    async function fetchNewsData() {
      const fetchedNews = await fetch(
        "http://jsonplaceholder.typicode.com/posts"
      );

      const newsAsJson = await fetchedNews.json();

      if (newsAsJson) {
        setFetchStatus("data-received");

        setNews(newsAsJson);
      }
    }

    if (fetchStatus === "initial") {
      setFetchStatus("loading");

      fetchNewsData();
    }
  }, [fetchStatus]);

  return {
    news,
  };
};

export default useFetchNews;
