export const useFetch = (url) => {
  
  const [state, setState] = useState({
    data: null,
    isLoading: true
  });

  const getFetch = async() =>{
    
    setState({
      ...state,
      isLoading : true
    })

    const response = await fetch(url);
    const data = await response.json();

    setState({
      ...state,
      data,
      isLoading: false
    })
    
  }

  useEffect(() => {
    getFetch()
  }, [url])
  
  return {
    data : state.data,
    isLoading : state.isLoading
  }
}
