import "./signup.css";
import Select from 'react-select'
import userData from '../../types/user';
import {db} from '../../services/firebase'
import { doc, setDoc } from "firebase/firestore";

const options = [
  { value: 'Music', label: 'Music' },
  { value: 'Animal', label: 'Animal' },
  { value: 'Movie', label: 'Movie' },
  { value: 'Design', label: 'Design' },
  { value: 'Business', label: 'Business' },
  { value: 'Dance', label: 'Dance' },
  { value: 'Relationship', label: 'Relationship' }

]

const MyComponent = () => (
  <Select options={options} />
)
function signup(obj: userData) {
    
  //is email valid?
  if (obj.email === "") return;
  if (obj.password !== obj.confirmPassword) {
      return;    
  }

  //user exists already?
  db.doc(`/users/${obj.userHandle}`).get
  .then((doc: any) => {
      if (doc.exists) return;
      else {
          return firebase.auth()
              .createUserWithEmailAndPassword(obj.email, obj.password);
      }
  })
      
  //adding data to collection
  .then((data: any) => {
      return db.doc(`/users/${obj.userHandle}`).set({
          email: obj.email,
          password: obj.password,
          userHandle: obj.userHandle,
          userImage: obj.userImage || "gs://thuglyf-53648.appspot.com/no-img.png",
          userInterests: obj.userInterests,        
      })  
  })
}

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Thug Lyf</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ThugLyf
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <p> Interests :</p>
            <Select 
            isMulti
            name="Interests"
            options={options}/>
            {/* <select>
              <option value = 'Music'>Music</option>
              <option value="Animal">Animal</option>
              <option value="Car">Car</option>
              <option value="Movie">Movie</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Dance">Dance</option>
              <option value="Relationship">Relationship</option>
            </select> */}
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}