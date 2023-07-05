import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Quote({ sav }) {
  const [data, setData] = useState('loading...');

  useEffect(() => {
    const getQuotes = async () => {
      const myHeaders = new Headers();
      myHeaders.append('X-Api-Key', 'JApZ9IkdEvyK/Wn4uTRNkQ==vEuwff2CfhjGsGLJ');

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=learning',
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) => setData(result[0].quote))
        .catch(() => setData('Error loading Quotes!!'));
    };
    getQuotes();
  }, []);

  return (
    <>
      <p className={sav}>
        Quote :
        {data}
      </p>
    </>
  );
}
Quote.propTypes = { sav: PropTypes.string.isRequired };

export default Quote;
