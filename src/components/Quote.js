import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/Quote.css';

function Quote({ styleClass }) {
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
        .then((result) => setData(`“${result[0].quote}” \n ― ${result[0].author}`))
        .catch(() => setData('Error loading Quotes!!'));
    };
    getQuotes();
  }, []);

  return (
    <>
      <p className={`${styleClass} quote`}>
        Quote :
        {' '}
        {data}
      </p>
    </>
  );
}
Quote.propTypes = { styleClass: PropTypes.string.isRequired };

export default Quote;
