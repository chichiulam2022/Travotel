import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import './ReviewForm.css'
import Auth from '../../utils/auth'


function ReviewForm() {
    const { t } = useTranslation(["review"]);



    return (
        <>
            {Auth.loggedIn() ? (
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
            ) : ''
            }
        </>



    )
}

export default ReviewForm