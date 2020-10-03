import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";

const Search = () => {
  return (
    <div
      className="mt-5"
      style={{ textAlign: "center", textTransform: "uppercase" }}
    >
      <h1 className="mb-4">I grow by helping people in need.</h1>
      <InputGroup style={{ width: "35%", margin: "auto" }} className="mb-3">
        <FormControl
          placeholder="Search..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="primary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
