import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Home from "./views/Home/Home"
import ContactMe from "./views/ContactMe"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/contact",
        element: <ContactMe/>
      }
    ]
  },
])

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
  
)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
