import { useEffect, useState } from 'react';

const Visitors = () => {
        const [visits, setVisits] = useState(0);
      
        // Loading from localStorage
        useEffect(() => {
          const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
          setVisits(storedVisits + 1);
        }, []);
      
        // Saving in localStorage
        useEffect(() => {
          localStorage.setItem("visitCounter", visits);
        }, [visits]);
      
        return <p> Visitors count : {visits}</p>;
};

export default Visitors;