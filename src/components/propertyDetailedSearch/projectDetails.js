import React, { useState } from "react";
import "./projectDetails.css";
import Heading from "../searchBar/Heading";
import useAPI from "../../effects/useAPI";
import getPropertyByLocation from "../../services/getPropertyByLocation";
import getLocations from "../../services/getLocations";
import Card from "react-bootstrap/Card";
import { CardText } from "react-bootstrap";

const PropertyDetails = () => {
  const [location, setLocation] = useState("");
  const [propertyResults, setPropertyResults] = useState([{}]);

  const [loadingLocations, errorLocations, responseLocations] = useAPI(() =>
    getLocations()
  );

  if (errorLocations) {
    return <div>Something went wrong</div>;
  }
  if (loadingLocations) {
    return <div>Loading...</div>;
  }

  const { locations } = responseLocations;

  const handleSubmit = async () => {
    try {
      const response = await getPropertyByLocation(location);

      setPropertyResults(response.data.property);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Heading
        className="project-heading"
        title="View The Property You Search"
      />
      <div className="location">
        <h6 htmlFor="location" className="location">
          Location
        </h6>
        <select
          className="dropdown"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          {locations.map((property) => {
            return (
              <option value={property.location}>{property.location}</option>
            );
          })}
        </select>
      </div>
      <div className="benjamin">
        <button
          className="benjamin"
          type="button"
          onClick={() => handleSubmit()}
        >
          Search
        </button>
      </div>
      <div className="container_2">
        {propertyResults.map((property) => (
          <div key={property.id} className="propertyContainer">
            <Card>
              <Card.Header>Property Information</Card.Header>
              <Card.Body>
                <Card.Title>{property.location}</Card.Title>
                <Card.Text>Price: {property.price}</Card.Text>
                <Card.Text>Status: {property.status}</Card.Text>
                <Card.Text>Type: {property.type}</Card.Text>
                <CardText>
                  Size square meters : {property.sizeSqMeters}
                </CardText>
                <CardText>No. of bedrooms : {property.noOfBedrooms}</CardText>
                <CardText>No. of bathrooms : {property.noOfBathrooms}</CardText>
                <CardText>No. of rooms : {property.noOfRooms}</CardText>
                <CardText>Listed Date : {property.listedDate} </CardText>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default PropertyDetails;
