const Contact =()=>{
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export const NewContact = (Contact)=>{
    return (props)=>{
        return (
            <div>
                <label>{props.label}</label>
                <Contact/>
            </div>

        )
    }
}

export default Contact;