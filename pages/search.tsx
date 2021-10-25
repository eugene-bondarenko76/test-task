import { useRouter } from 'next/router';
import { useState, useRef } from "react";

const performSearch = async (query: string) => {
  const response = await fetch(`https://hatsa.com/api/search/public/afiproducts/search/${query}?dedupe=true`);

  return await response.json();
}

function debounce(fn, delay) {
  let tOut = null;

  return (...args) => {
    if (tOut) {
      clearTimeout(tOut);
    }

    tOut = setTimeout(() => fn(...args), delay);
  }
}

export default function Search({ initialSearchResults }) {
  const [searchResults, setSearchResults] = useState(initialSearchResults || []);

  const deboucedSearch = useRef(debounce(async (query: string) => {
    try{
      const result = await performSearch(query);

      setSearchResults(result?.data);
    } catch (error) {
      setSearchResults([])
    }
  }, 200)).current;

  const router = useRouter();

  const searchingData = (event) => {
    router.push({
        pathname: '/search',
        query: {search: event.currentTarget.value},
      },
      undefined, {shallow: true},
    )

    deboucedSearch(event.currentTarget.value);
  }

  return (
    <div className="p-4">
      <label htmlFor="searchQuery" className="mr-4">Search for:</label>

      <input defaultValue={router?.query?.search || ''} id="searchQuery" type="text" className="border" onChange={searchingData}/>

      <ul>
        {searchResults && searchResults.map(({ id, product: { title } }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await performSearch(context.query.search || '');

  return {
    props: {
      initialSearchResults: data,
    },
  }
}
