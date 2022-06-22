export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, //'c5e310b234msha2e80ef5f87dd01p1cbb50jsnf3fd5b379a59',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}