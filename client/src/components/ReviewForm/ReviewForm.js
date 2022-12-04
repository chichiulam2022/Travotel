import React, { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './ReviewForm.css'


function ReviewForm() {
    const [formState, setFormState] = useState({
        thoughtText: '',
        thoughtAuthor: ''
    })

    const [charCount, setCharCount] = useState(0)



    return (
        <Form className='review-form' >
            <div className='mt-4'>
                <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                <span className="star"><FontAwesomeIcon icon={faStar} /></span>
            </div>
            <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3 mx-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>

            <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-4'>
                Submit
            </Button>
        </Form>


    )
}

export default ReviewForm