// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from "./components/Home"
// import ContactUs from "./components/ContactUs"
// import Login from "./components/Login"

// const App = () =>(
//   <>
//   <BrowserRouter>
//   <Routes>
//       <Route exact path="/" element={<Home/>} />
//       <Route exact path="/contact-us" element={<ContactUs/>} />
//       <Route exact path="/login" element={<Login/>} />
//   </Routes>
//   </BrowserRouter>
//   </>

import React from "react";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "bde3fa9a-c34d-407a-af6f-79fef8b74e8e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res =  fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json())

    .catch((error)=>
      console.log(error)
    )

    // if (res.success) {
    //   console.log("Success", res);
    // }
  };

  return (
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
  );
}

export default App;


// )

// export default App;
