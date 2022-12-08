import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import './ReviewForm.css';
import Auth from '../../utils/auth';

import { useParams  } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from "@apollo/client";

// import { QUERY_COMMENTS } from '../utils/queries';
import { QUERY_COMMENTS, QUERY_ME } from '../../utils/queries';
import { ADD_COMMENT } from '../../utils/mutations';

const ReviewForm = props => {
    const { t } = useTranslation(["review"]);

    const [commentText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT, {
        update(cache, { data: { addComment } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    cata: { me: { ...me, comments: [...me.comments, addComment] } },
                });
            } catch (e) {
                console.warn("First thought insertion by user!")
            }

            const { comments } = cache.readQuery({ query: QUERY_COMMENTS, QUERY_ME });

            cache.writeQuery({
                query: QUERY_COMMENTS, QUERY_ME,
                data: { comments: [addComment, ...comments] }
            })
        }
    });

    const { id: commentId } = useParams();
    const { loading, data } = useQuery(QUERY_COMMENTS, {
      variables: { id: commentId }
    });
  
    const comment = data?.comment || {};
  
    if (loading) {
      return <div>Loading...</div>
    }

    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
      };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            // add thought to database
            await addComment({
              variables: { commentText }
            });
        
            // clear form value
            setText('');
            setCharacterCount(0);
          } catch (e) {
            console.error(e);
        }
    };

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

                    <Form.Group className="mb-3 mx-3" controlId="formBasicPassword" onSubmit={handleFormSubmit}>
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