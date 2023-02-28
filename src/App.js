// import logo from './logo.svg';
import contactsDB from "./contacts.json";
import './App.css';
import { useState } from "react";


function App() {

  const [contacts, setContacts] = useState(contactsDB.slice(0, 5))

  // Add a Celebrity
  const handleAddCeleb = () => {
    const addCeleb = contactsDB[Math.floor(Math.random() * contactsDB.length)]
    const copy = [...contacts]
    copy.push(addCeleb)
    setContacts(copy)
  }

  // Sort by Popularity
  const handleSortPop = () => {
    const copy = [...contacts]
    copy.sort((a, b) => a.popularity + b.popularity)
    setContacts(copy)
  }

  // Sort by Name
  const handleSortName = () => {
    const copy = [...contacts]
    copy.sort((a, b) => a.name.localeCompare(b.name))
    setContacts(copy)
  }

  // Delete a celebrity
  const handleDelete = (id) => {
    const copy = contacts.filter((contacts) => contacts.id !== id)
    setContacts(copy)
  }


  return (
    <div className="App">
      <div class="patterns pt1"></div>
      <h1 class="grays">IronContacts</h1>


      <button onClick={handleAddCeleb}> Add a celebrity 🎬 </button>
      <button onClick={handleSortPop}> Sort by Popularity 🔀 </button>
      <button onClick={handleSortName}> Sort by Name 🔀 </button>
      <table>
        <thead>
          <tr>
            <th scope="col">picture</th>
            <th scope="col">name</th>
            <th scope="col">popularity</th>
            <th scope="col">Won Oscar</th>
            <th scope="col">Won Emmy</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contactCeleb) => {
            return <tr>
              <td>
                <img src={contactCeleb.pictureUrl} height={110} width={90} />
              </td>
              <td>
                {contactCeleb.name}
              </td>
              <td>
                {contactCeleb.popularity}
              </td>
              <td>
                {contactCeleb.wonOscar && "🏆"}
              </td>
              <td>
                {contactCeleb.wonEmmy && "🐐"}
              </td>
              <td>
                {<button onClick={() => handleDelete(contactCeleb.id)}>"❌"</button>}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div >
  )
}


export default App;
