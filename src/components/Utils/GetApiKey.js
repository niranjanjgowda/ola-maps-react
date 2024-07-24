const getApiKey = () => {
    const apiKey = process.env.REACT_APP_OLA_MAPS_API_KEY;
    if (!apiKey) {
      throw new Error("OlaMap API key not found. Please set the OLA_MAPS_API_KEY environment variable.");
    }
    return apiKey;
  };
  
export default getApiKey;