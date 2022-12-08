import React from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import './ReviewForm.css'
import Auth from '../../utils/auth'

import { useParams  } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_COMMENTS } from '../utils/queries';
import { QUERY_COMMENTS } from '../../utils/queries';

const ReviewForm = props => {
    const { t } = useTranslation(["review"]);

    const { id: commentId } = useParams();
    const { loading, data } = useQuery(QUERY_COMMENTS, {
      variables: { id: commentId }
    });
  
    const comment = data?.comment || {};
  
    if (loading) {
      return <div>Loading...</div>
    }

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
                        {/* <Form.Control type="text" placeholder={t('username')} /> */}
                        <div>
                            <p className="card-header">
                            <span style={{ fontWeight: 700 }} className="text-light">
                                {comment.username}
                            </span>{' '}
                            comment on {comment.createdAt}
                            </p>
                            <div className="card-body">
                            <p>{comment.commentText}</p>
                            </div>
                        </div>
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