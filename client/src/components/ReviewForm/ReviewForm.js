import React, { useState } from 'react'
import { Form, FloatingLabel } from 'react-bootstrap'


function ReviewForm() {
    const [formState, setFormState] = useState({
        thoughtText: '',
        thoughtAuthor: ''
    })

    const [charCount, setCharCount] = useState(0)



    return (
        <>
            <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
            >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
        </>
    )
}

export default ReviewForm