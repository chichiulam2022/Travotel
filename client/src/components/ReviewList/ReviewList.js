import React from 'react'
import { Link } from 'react-router-dom'
import './ReviewList.css'
// import { useQuery } from '@apollo/client';
// import { QUERY_HOTEL } from '../../utils/queries'

function ReviewList() {
    // const { loading, data } = useQuery(QUERY_HOTEL);
    // const hotel = data?.hotel || []

    return (

        <div>
            <>
                <div key='list' className="card mb-3 mx-3 mt-4">
                    <p className="card-header">
                        <Link
                            to='/profile'
                            style={{ fontWeight: 700 }}
                            className="text-light"
                        >
                            Hello
                        </Link>{' '}
                        thought on hello
                    </p>
                    <div className="card-body">
                        <p>Testing</p>
                    </div>
                </div>
            </>

        </div>
    )
}

export default ReviewList