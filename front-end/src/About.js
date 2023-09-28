import {useState} from 'react'
import axios from 'axios'
import './About.css'
 
/**
 * A React component that represents the About page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
    const [text, setText] = useState('')
    const [imglink, setImglink] = useState('')

    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const text = response.data.text
        setText(text)
        const imglink = response.data.imglink
        setImglink(imglink)
      })
      .catch(err => {
        console.log(err)
      })

    const pArr = text.split('\n').map((val) => {
        return (
            <>
                <p>{val}</p>
                <br />
            </>
        )
    })

    return (
    <>
        {pArr}
        <img src={imglink} alt="dolphins swimmming" width="200px" />
    </>
    )
}

// make this component available to be imported into any other file
export default About
