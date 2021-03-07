const sampleJSON = {
  "location": {
        "latitide": 1.361742,
        "longitude": 103.703341,
    }
}

function LocationTraffic() {

  return (
    <div>
      {
        Object.keys(sampleJSON.object).map((key, i) => (
          <p key={i}>
            <span>Key Name: {key}</span>
            <span>Value: {sampleJSON.object[key]}</span>
          </p>
        )
      }

    </div>
  )
}




export default LocationTraffic;





