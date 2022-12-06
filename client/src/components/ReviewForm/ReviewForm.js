import React, { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import './ReviewForm.css'


function ReviewForm() {
    const [formState, setFormState] = useState({
        thoughtText: '',
        thoughtAuthor: ''
    })

    const { t } = useTranslation(["review"]);



    return (
        <Form className='review-form' >
            <FloatingLabel
                controlId="floatingTextarea"
                label={t('comment')}
                className="mb-3 mx-3 mt-4"
            >
                <Form.Control as="textarea" style={{ height: '10%' }} />
            </FloatingLabel>

            <Form.Group className="mb-3 mx-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder={t('username')} />
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-4' id='review-form-btn'>
                {t('submit')}
            </Button>
        </Form>


    )
}

export default ReviewForm