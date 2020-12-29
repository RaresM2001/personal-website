const getApiUrl = () => {
  const environment = process.env.NODE_ENV;
  if (environment == "development") return  "http://localhost:8082";
  else return "https://modurerares.herokuapp.com";
}

export default  {
  getApiUrl
}