world
  .onGlobeClick(({ lat, lng }) => {
      alert(`You clicked at Latitude: ${lat}, Longitude: ${lng}`);
      // In a more advanced version, you could fetch the specific depth 
      // from GEBCO's API here.
  });