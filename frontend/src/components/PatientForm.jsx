// src/components/PatientForm.jsx
import React, { useState } from "react";

const PatientForm = ({ department, fields }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field] = "";
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      department,
      ...formData,
    });
    // Optionally send to backend
  };

  return (
    <></>
    // <form onSubmit={handleSubmit} className="patient-form">
    //   {fields.map((field) => (
    //     <div key={field} className="form-group">
    //       <label htmlFor={field}>
    //         {field.replace(/([A-Z])/g, " $1").replace(/^\w/, (c) => c.toUpperCase())}
    //       </label>
    //       <input
    //         type="text"
    //         id={field}
    //         name={field}
    //         value={formData[field]}
    //         onChange={handleChange}
    //         required
    //       />
    //     </div>
    //   ))}
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default PatientForm;
